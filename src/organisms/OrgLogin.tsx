import Molinput from "../molecules/Molinput"
import '../app/globals.css'
import LineButton from '../atoms/LineButton'
import AtminputBotao from "../atoms/AtminputBotao"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import styled from "styled-components"


interface OrgLoginProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgLogin({className, increment, decrement}:OrgLoginProps){
    async function onSubmit(values: z.infer<typeof formLogin>) {
      try {
        const response = await fetch("http://127.0.0.1:8000/login", {
          method: "POST", 
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", 
          },
          body: new URLSearchParams({
              grant_type: values.grant_type,
              username: values.username,
              password: values.password,
            }), 
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
    
    const formLogin = z.object({
      username: z.string(),
      password: z.string(),
      grant_type: z.string()
    });

    const form = useForm<z.infer<typeof formLogin>>({
      resolver: zodResolver(formLogin),
      defaultValues: { username: "", password: "", grant_type: "password"}
    });

    return(
        <div className={className}>
            <LogoHeader className=''>TEA-HUB</LogoHeader>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
                <StyledInput register={form.register} text='Email' name="username"></StyledInput>
                <StyledInput register={form.register} text='Senha' name="password"></StyledInput>
                
                <AtminputBotao value='Entrar'/>
            </Form>
            <FooterBar>
                <LineButton 
                    Nome="Esqueceu a senha?"
                    onClick={increment}
                ></LineButton>
                <LineButton 
                    Nome="Não tenho conta"
                    onClick={decrement}
                ></LineButton>
            </FooterBar>
        </div>
    );
}

const LogoHeader = styled.h1`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-size: 64px;
  margin-top: 4%;
  color: var(--primary-foreground);
  font-family: var(--font-tea-hub);
`;

const Form = styled.form`
  margin-top: 5%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Molinput)`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 30%;
`;

const FooterBar = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default OrgLogin