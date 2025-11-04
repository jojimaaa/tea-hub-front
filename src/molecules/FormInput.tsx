import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import '../app/globals.css'
import styled from "styled-components";
import { Input } from "@/components/ui/input";

interface FormInputProps{
    label: string;
    register: UseFormRegister<any>;
    className?: string;
    value: string;
    setValue: UseFormSetValue<any>
}

function FormInput({label: label, 
                    value: value, 
                    register: register, 
                    className, 
                    setValue: setValue
                }:FormInputProps){
    return(
        <StyledContainer className={className}>
            <Label>{label}</Label>
            <StyledInput 
                {...register(value)}    
                onChange={(e) => {setValue(value, e.target.value)}} 
                placeholder={label}
            ></StyledInput>
        </StyledContainer>
    );
}

export default FormInput

const StyledContainer = styled.div`
    height: 100%;
    width: 70%;
`;

const Label = styled.h1`
    font-family: var(--font-login-text);
    font-size: 20px;
`;

const StyledInput = styled.input`
    margin-bottom: 3%;
    border-style: var(--tw-border-style);
    border-width: 1px;
    height: 100%;
    min-height: 37px;
    border-radius: 4px;
    border-color: var(--primary-foreground);
    outline-style: none;
`;