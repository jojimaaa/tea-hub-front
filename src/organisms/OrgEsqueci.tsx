import Molinput from "../molecules/Molinput"
import AtminputBotao from "../atoms/AtminputBotao"
import '../app/globals.css'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import styled from "styled-components"

interface OrgEsqueciProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgEsqueci({className}:OrgEsqueciProps){

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
            <LogoHeader>TEA-HUB</LogoHeader>
            <Form action="">
                <StyledInput register={form.register} text='Email' name="email"/>
                <AtminputBotao value='Enviar'/>
            </Form>
        </div>
    );
}

export default OrgEsqueci;

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