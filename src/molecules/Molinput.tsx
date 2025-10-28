import Atminput from "../atoms/Atminput"
import { UseFormRegister } from "react-hook-form";
import '../app/globals.css'
import styled from "styled-components";

interface MolinputProps{
    text: string;
    className?: string;
    name: string
    register: UseFormRegister<any>
}

function Molinput({text, name, className, register}:MolinputProps){
    return(
        <div className={className}>
            <Label>{text}</Label>
            <Input register ={register} name={name} placeholderText={text}></Input>
        </div>
    );
}

export default Molinput

const Label = styled.h1`
    font-family: var(--font-text);
    font-size: 20px;
`;

const Input = styled(Atminput)`
    margin-bottom: 3%;
    border-style: var(--tw-border-style);
    border-width: 1px;
    border-radius: 4px;
    border-color: var(--primary-foreground);
    outline-style: none;
`;