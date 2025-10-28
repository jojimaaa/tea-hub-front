import '../app/globals.css'
import AtminputBotao from "../atoms/AtminputBotao"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import styled from "styled-components"
import Molinput from '@/molecules/Molinput'

interface OrgRegistroProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgRegistro({className}:OrgRegistroProps){
    const formReg = z.object({
      email: z.string().min(1),
      password: z.string(),
      name: z.string(),
      username: z.string()
    });
    
    const form = useForm<z.infer<typeof formReg>>({
      resolver: zodResolver(formReg),
      defaultValues: { email: "", password: "", username:"", name:""}
    });
        
    async function onSubmit(values: z.infer<typeof formReg>) {
        try {
          const response = await fetch("http://127.0.0.1:8000/register", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(values), 
          });

          if (!response.ok) {
            throw new Error("Algo deu errado!");
          }

          const data = await response.json(); 
            console.log("Sucesso:", data);
          } catch (error) {
            console.error("Erro:", error);
          }
        }
    

    return(
        <div className={className}>
            <LogoHeader>TEA-HUB</LogoHeader>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
              <FormRow>
                <FormCol>
                  <FormField register={form.register} text='Email' name="email"/>
                  <FormField register={form.register} text='Nome'  name="nome"/>
                </FormCol>
                <FormCol>
                  <FormField register={form.register} text='Username'  name="username"/>
                  <FormField register={form.register} text='Senha' name="password"/>
                </FormCol>
              </FormRow>
                <AtminputBotao value='Criar Conta'/> 
            </Form>
        </div>
    );
}

export default OrgRegistro

const Form = styled.form`
  margin-top: 5%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FormField = styled(Molinput)`
  width: 90%;
  margin-left: 10px;
  margin-right: 10px;
`;

const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoHeader = styled.h1`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-size: 64px;
  margin-top: 4%;
  color: var(--primary-foreground);
  font-family: var(--font-tea-hub);
`;