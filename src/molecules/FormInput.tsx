import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import '../app/globals.css'
import styled from "styled-components";

interface FormInputProps{
    label: string;
    register: UseFormRegister<any>;
    className?: string;
    value: string;
    setValue: UseFormSetValue<any>;
    placeHolder?: string
}

function FormInput({label: label, 
                    value: value, 
                    register: register, 
                    className, 
                    setValue: setValue,
                    placeHolder
                }:FormInputProps){
    return(
        <StyledContainer className={className}>
            <Label>{label}</Label>
            <StyledInput 
                {...register(value)}    
                onChange={(e) => {setValue(value, e.target.value)}} 
                placeholder={placeHolder}
            ></StyledInput>
        </StyledContainer>
    );
}

export default FormInput

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const Label = styled.h1`
    font-family: var(--font-montserrat);
    font-size: 18px;
`;

const StyledInput = styled.input`
    border-style: var(--tw-border-style);
    border-width: 1px;
    height: 100%;
    width: 100%;
    min-height: 36px;
    border-radius: 4px;
    border-color: var(--secondary);
    outline-style: none;
    padding: 5px;
`;