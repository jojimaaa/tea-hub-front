import styled from 'styled-components';
import '../app/globals.css'
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeHolder: string;
    register?: UseFormRegister<any>;
    className?: string;
    value: string;
    setValue: UseFormSetValue<any>
}



function TextInput({ placeHolder, register, className, value, setValue, ...props}: TextInputProps ){
    return (
        <StyledInput className={className}
                value = {value}  
                onChange={(e) => {setValue('filter', e.target.value)}} 
                placeholder={placeHolder}
                {...props}
        ></StyledInput>
    );
}

export default TextInput

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