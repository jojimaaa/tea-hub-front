import '../app/globals.css'
import AtminputBotao from "../atoms/AtminputBotao"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import styled from "styled-components"
import FormInput from '@/molecules/FormInput'
import { useEffect } from 'react'
import { Label } from '@/components/ui/label'

interface OrgRegistroProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgRegistro({className}:OrgRegistroProps){
    const formReg = z.object({
      email: z.email(),
      password: z.string().min(6),
      name: z.string(),
      username: z.string().min(4)
    });
    
    const form = useForm<z.infer<typeof formReg>>({
      resolver: zodResolver(formReg),
      defaultValues: { email: "", password: "", username:"", name:""}
    });
        
    useEffect(() => {
        form.register("email");
        form.register("password");
        form.register("username");
        form.register("name");
    }, []);

    const onSubmit = async (values: z.infer<typeof formReg>) => {
        console.log(values);
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
        <StyledContainer className={className}>
            <LogoHeader>TEA-HUB</LogoHeader>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
                <FormCol>
                    <StyledInput register={form.register} setValue={form.setValue} label='Email' value="email"/>
                    {form.formState.errors && <StyledErrorLabel>{form.formState.errors.email?.message}</StyledErrorLabel>}

                    <StyledInput register={form.register} setValue={form.setValue} label='Nome'  value="nome"/>
                    <StyledInput  register={form.register} setValue={form.setValue} label='Username'  value="username"/>
                    {form.formState.errors && <StyledErrorLabel>{form.formState.errors.username?.message}</StyledErrorLabel>}
                    <StyledInput  register={form.register} setValue={form.setValue} label='Senha' value="password"/>
                    {form.formState.errors && <StyledErrorLabel>{form.formState.errors.password?.message}</StyledErrorLabel>}
                </FormCol>
                <EntrarButton onClick={(e : any) => form.handleSubmit(onSubmit)(e)} value='Criar Conta'/> 
            </Form>
        </StyledContainer>
    );
}

export default OrgRegistro

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: 5%;
    justify-content: center;
`;

const Form = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(FormInput)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  min-height: 40px;
`;

const FormCol = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoHeader = styled.h1`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-size: 64px;
  color: var(--primary-foreground);
  font-family: var(--font-tea-hub);
`;

const StyledErrorLabel = styled(Label)`
    color: var(--primary-foreground);
    font-family: var(--font-login-text)
`;

const EntrarButton = styled(AtminputBotao)`
    min-height: 40px;
`;