import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface FormTextAreaProps {
    register: UseFormRegister<any>;
    className?: string;
    value: string;
    setValue: UseFormSetValue<any>
}

const FormTextArea = ({className, value, register, setValue} : FormTextAreaProps) => {
    return (<textarea 
        {...register(value)}
        onChange={(e) => {
            e.preventDefault();
            setValue(value, e.target.value)
        }}
        className={className}>


    </textarea>)
}

export default FormTextArea;