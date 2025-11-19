"use client"

import FormInput from "../molecules/FormInput"
import '../app/globals.css'
import LineButton from '../atoms/LineButton'
import AtminputBotao from "../atoms/AtminputBotao"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import styled from "styled-components"
import { login } from "@/services/authServices"
import { useEffect, useState } from "react"
import useAuth from "@/hooks/useAuth"
import { StyledErrorLabel } from "@/atoms/StyledAtoms"
import { useRouter, useSearchParams } from "next/navigation"
import { AxiosError } from "axios"

interface OrgLoginProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgLogin({className, increment, decrement}:OrgLoginProps){
    const [error, setError] = useState("");
    const router = useRouter();
    const {setAuth} = useAuth();
    const searchParams = useSearchParams();
    const from = searchParams.get("from") || "/";



    const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
        setError("");
        try {
            const response = await login(values);
            if (response.status == 200) {
                if (!response.data.access_token || !response.data.token_type) {
                    setError("Falha no login, tente novamente.");
                }
                else {
                    setAuth({
                        username: response.data.username,
                        name: response.data.name,
                    })
                    document.cookie = `access-token=${response.data.access_token}; path=/; max-age=86400;`;
                    document.cookie = `refresh-token=${response.data.refresh_token}; path=/; max-age=86400;`;
                    router.push(from);
                }
            }
            else if (response.status == 401) {
                setError("Credenciais inválidas.");
            }

        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.detail ? error.response?.data.detail : "Falha no login, tente novamente.");
            }
            else setError("Falha no login, tente novamente.");
        }
    }
    
    const formLoginSchema = z.object({
      email: z.email(),
      password: z.string(),
    });

    const formLogin = useForm<z.infer<typeof formLoginSchema>>({
      resolver: zodResolver(formLoginSchema),
      defaultValues: { email: "", password: ""}
    });

    useEffect(() => {
        formLogin.register("email");
        formLogin.register("password");
    }, []);

    return(
        <StyledContainer className={className}>
            <LogoHeader className=''>TEA-HUB</LogoHeader>
            <Form onSubmit={formLogin.handleSubmit(onSubmit)}>
                <StyledInput setValue={formLogin.setValue} register={formLogin.register} label='Email' value="email"></StyledInput>
                {formLogin.formState.errors && <StyledErrorLabel>{formLogin.formState.errors.email?.message}</StyledErrorLabel>}
                <StyledInput setValue={formLogin.setValue} register={formLogin.register} label='Senha' value="password"></StyledInput>
                <EntrarButton onClick={(e : any) => {
                    formLogin.handleSubmit(onSubmit)(e)
                }} value='Entrar'/>
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
            {error && <StyledErrorLabel>{error}</StyledErrorLabel>}
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: 5%;
    justify-content: center;
`;

const EntrarButton = styled(AtminputBotao)`
    min-height: 40px;
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
  margin-bottom: 10px;
`;

const FooterBar = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default OrgLogin