import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface FormTextAreaProps {
    register: UseFormRegister<any>;
    className?: string;
    placeHolder?: string;
    value: string;
    setValue: UseFormSetValue<any>
}

const FormTextArea = ({className, placeHolder, value, register, setValue} : FormTextAreaProps) => {
    return (<textarea 
        placeholder={placeHolder}
        {...register(value)}
        onChange={(e) => {
            e.preventDefault();
            setValue(value, e.target.value)
        }}
        className={className}>


    </textarea>)
}

export default FormTextArea;