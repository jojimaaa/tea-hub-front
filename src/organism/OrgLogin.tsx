import Molinput from "../molecules/Molinput"
import '../app/globals.css'
import Botao from '../atms/Botao'
import AtminputBotao from "../atms/AtminputBotao"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


interface OrgLoginProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgLogin({className, increment, decrement}:OrgLoginProps){
    async function onSubmit(values: z.infer<typeof formLogin>) {
      try {
        const response = await fetch("http://127.0.0.1:8000/login", {
          method: "POST", 
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", 
          },
          body: new URLSearchParams({
              grant_type: values.grant_type,
              username: values.username,
              password: values.password,
            }), 
        });

        if (!response.ok) {
          throw new Error("Algo deu errado!");
        }

        const data = await response.json(); 
        console.log("Sucesso:", data);
      } catch (error) {
        console.error("Erro:", error);
      }
    }
    
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center mt-[5%] ">
                <Molinput register={form.register} text='Email' className="flex flex-col w-[70%] h-[30%]" name="username"></Molinput>
                <Molinput register={form.register} text='Senha' className="flex flex-col w-[70%] h-[30%] mt-[4%]" name="password"></Molinput>
                
                <AtminputBotao value='Entrar' 
                    classNameBt="w-[70%] h-[32px] bg-black rounded-[4px] mt-[6%]"
                    classNameInput="text-white font-[Virgil] text-[22px] w-[100%] h-[100%] cursor-pointer"
                ></AtminputBotao>
            </form>
            <div className="mt-[10%] flex items-center justify-center">
                <Botao classNameBt="w-[140px] h-[50%] mr-[10%] cursor-pointer" 
                    Nome="Esqueceu a senha?"
                    classNameTxt="font-[Virgil] text-[15px] h-[100%] hover:underline"
                    onClick={increment}
                ></Botao>
                <Botao classNameBt="w-[130px] h-[50%] cursor-pointer" 
                    Nome="Não tenho conta"
                    classNameTxt="font-[Virgil] text-[15px] hover:underline"
                    onClick={decrement}
                ></Botao>
            </div>

        </div>
    );
}



export default OrgLogin