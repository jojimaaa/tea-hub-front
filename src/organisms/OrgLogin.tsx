import FormInput from "../molecules/FormInput"
import '../app/globals.css'
import LineButton from '../atoms/LineButton'
import AtminputBotao from "../atoms/AtminputBotao"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z, ZodType } from "zod"
import styled from "styled-components"
import { LoginRequest } from "@/interfaces/AuthSchemas"
import { login } from "@/services/authServices"
import { useEffect } from "react"
import { Label } from "@/components/ui/label"

interface OrgLoginProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgLogin({className, increment, decrement}:OrgLoginProps){

    const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
        try {
            console.log(values);
            const response = await login(values);
        } catch (error) {
            console.error("Erro:", error);
        }
    }
    
    const formLoginSchema = z.object({
      username: z.email(),
      password: z.string(),
      grant_type: z.string()
    });

    const formLogin = useForm<z.infer<typeof formLoginSchema>>({
      resolver: zodResolver(formLoginSchema),
      defaultValues: { username: "", password: "", grant_type: "password"}
    });

    useEffect(() => {
        formLogin.register("username");
        formLogin.register("password");
    }, []);

    return(
        <div className={className}>
            <LogoHeader className=''>TEA-HUB</LogoHeader>
            <Form onSubmit={formLogin.handleSubmit(onSubmit)}>
                <StyledInput setValue={formLogin.setValue} register={formLogin.register} label='Email' value="username"></StyledInput>
                {formLogin.formState.errors && <StyledErrorLabel>{formLogin.formState.errors.username?.message}</StyledErrorLabel>}
                <StyledInput setValue={formLogin.setValue} register={formLogin.register} label='Senha' value="password"></StyledInput>
                <AtminputBotao onClick={(e : any) => {
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

const StyledInput = styled(FormInput)`
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

const StyledErrorLabel = styled(Label)`
    color: var(--primary-foreground);
    font-family: var(--font-login-text)
`;

export default OrgLogin