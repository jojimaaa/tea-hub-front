import { DetailedHTMLProps, Dispatch, SetStateAction, TextareaHTMLAttributes } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface FormTextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    setInstantValue? : Dispatch<SetStateAction<any>>
    defaultValue? : string;
    register: UseFormRegister<any>;
    className?: string;
    placeHolder?: string;
    value: string;
    setValue: UseFormSetValue<any>,
}

const FormTextArea = ({className, defaultValue, placeHolder, value, register, setValue, setInstantValue, ...props} : FormTextAreaProps) => {
    return (<textarea 
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


    </textarea>)
}

export default FormTextArea;