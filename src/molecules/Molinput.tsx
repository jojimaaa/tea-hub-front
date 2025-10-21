import Atminput from "../atms/Atminput"
import '../app/globals.css'
interface MolinputProps{
    text: string;
    className?: string;
    name: string
}

function Molinput({text, name, className}:MolinputProps){
    return(
        <div className={className}>
            <h1 className="font-[Virgil] text-[20px]">{text}</h1>
            <Atminput name={name} placeholderText={text} className="border rounded-[4px] border-black outline-none"></Atminput>
        </div>
    );
}

export default Molinput