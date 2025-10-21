import Atminput from "../atms/Atminput"
import { UseFormRegister } from "react-hook-form";
import '../app/globals.css'

interface MolinputProps{
    text: string;
    className?: string;
    name: string
    register: UseFormRegister<any>
}

function Molinput({text, name, className, register}:MolinputProps){
    return(
        <div className={className}>
            <h1 className="font-[Virgil] text-[20px]">{text}</h1>
            <Atminput register ={register} name={name} placeholderText={text} className="border rounded-[4px] border-black outline-none"></Atminput>
        </div>
    );
}

export default Molinput