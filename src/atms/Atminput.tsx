import '../app/globals.css'
import { UseFormRegister } from "react-hook-form";
interface AtminputProps {
  placeholderText: string;
  name:string;
  className?: string;
  register: UseFormRegister<any>
}

function Atminput({ name, placeholderText, className, register }: AtminputProps ){
    return (
        <input {...register(name)} name={name} type="text" placeholder={placeholderText} className={className} />
    );
}

export default Atminput