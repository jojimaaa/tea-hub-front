import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import styled from "styled-components";

interface FormTextAreaProps {
    setInstantValue? : Dispatch<SetStateAction<any>>
    defaultValue? : string;
    register: UseFormRegister<any>;
    className?: string;
    placeHolder?: string;
    value: string;
    setValue: UseFormSetValue<any>,
}

const FormTextArea = ({className, defaultValue, placeHolder, value, register, setValue, setInstantValue} : FormTextAreaProps) => {
    return (<StyledTextarea 
        defaultValue={defaultValue}
        placeholder={placeHolder}
        {...register(value)}
        onChange={(e) => {
            e.preventDefault();
            setValue(value, e.target.value);
            if(setInstantValue) setInstantValue(e.target.value)
        }}
        className={className}
        >


    </StyledTextarea>)
}

export default FormTextArea;

const StyledTextarea = styled.textarea`
    min-height: 60px;
`;