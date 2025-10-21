import Molinput from "../molecules/Molinput"
import AtminputBotao from "../atms/AtminputBotao"
import '../app/globals.css'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface OrgEsqueciProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgEsqueci({className}:OrgEsqueciProps){

    const formLogin = z.object({
      username: z.string(),
      password: z.string(),
      grant_type: z.string()
    });
    
    const form = useForm<z.infer<typeof formLogin>>({
      resolver: zodResolver(formLogin),
      defaultValues: { username: "", password: "", grant_type: "password"}
    });

    return(
        <div className={className}>
            <h1 className='font-[Virgil] text-[64px] flex items-center justify-center mt-[4%]'>Tea-Hub</h1>
            <form action="" className="flex flex-col items-center justify-center mt-[8%] ">
                <Molinput register={form.register} text='Email' className="flex flex-col w-[70%] h-[30%]" name="email"></Molinput>
                
                <AtminputBotao value='Enviar' 
                    classNameBt="w-[70%] h-[32px] bg-black rounded-[4px] mt-[6%]"
                    classNameInput="text-white font-[Virgil] text-[22px] w-[100%] h-[100%] cursor-pointer"
                ></AtminputBotao>
            </form>
        </div>
    );
}

export default OrgEsqueci