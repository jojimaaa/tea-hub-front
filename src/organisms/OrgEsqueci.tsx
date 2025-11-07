import FormInput from "../molecules/FormInput"
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

    const onSubmit = () => {
        //do something
    }

    return(
        <StyledContainer className={className}>
            <LogoHeader>TEA-HUB</LogoHeader>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
                <StyledInput register={form.register} setValue={form.setValue} label='Email' value="email"/>
                <EntrarButton onClick={(e : any) => form.handleSubmit(onSubmit)(e)} value='Enviar'/>
            </Form>
        </StyledContainer>
    );
}

export default OrgEsqueci;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: 5%;
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
  margin-bottom: 30px;
`;

const EntrarButton = styled(AtminputBotao)`
    min-height: 40px;
`;