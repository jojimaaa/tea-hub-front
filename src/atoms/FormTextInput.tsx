import styled from 'styled-components';
import '../app/globals.css'
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface FormTextInputProps{
    placeHolder: string;
    register: UseFormRegister<any>;
    className?: string;
    value: string;
    setValue: UseFormSetValue<any>
}



function FormTextInput({ placeHolder, register, className, value, setValue }: FormTextInputProps ){
    return (
        <StyledInput className={className} 
                {...register(value)}    
                onChange={(e) => {setValue(value, e.target.value)}} 
                placeholder={placeHolder}
        ></StyledInput>
    );
}

export default FormTextInput

const StyledInput = styled.input`
    border-style: var(--tw-border-style);
    border-width: 1px;
    height: 100%;
    width: 100%;
    min-height: 37px;
    border-radius: 4px;
    border-color: var(--primary-foreground);
    outline-style: none;
`;