import styled from 'styled-components';
import '../app/globals.css'
import { UseFormRegister } from "react-hook-form";


interface FormTextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeHolder: string;
    register?: UseFormRegister<any>;
    className?: string;
    value: string;
    setValue:  React.Dispatch<React.SetStateAction<string>>;
}



function FormTextInput({ placeHolder, register, className, value, setValue, ...props }: FormTextInputProps ){
    return (
        <StyledInput className={className}
                value = {value}  
                onChange={(e) => {setValue(e.target.value)}} 
                placeholder={placeHolder}
                {...props}
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