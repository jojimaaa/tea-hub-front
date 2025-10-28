import Molinput from "../molecules/Molinput"
import '../app/globals.css'
import AtminputBotao from "../atoms/AtminputBotao"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface OrgRegistroProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgRegistro({className}:OrgRegistroProps){
    const formReg = z.object({
      email: z.string().min(1),
      password: z.string(),
      name: z.string(),
      username: z.string()
    });
    
    const form = useForm<z.infer<typeof formReg>>({
      resolver: zodResolver(formReg),
      defaultValues: { email: "", password: "", username:"", name:""}
    });
        
    async function onSubmit(values: z.infer<typeof formReg>) {
        try {
          const response = await fetch("http://127.0.0.1:8000/register", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(values), 
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
    

    return(
        <div className={className}>
            <h1 className='font-[Virgil] text-[64px] flex items-center justify-center mt-[4%]'>Tea-Hub</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center mt-[2%] ">
                <Molinput register={form.register} text='Email' className="flex flex-col w-[70%] h-[30%]" name="email"></Molinput>
                <Molinput register={form.register} text='Nome' className="flex flex-col w-[70%] h-[30%] mt-[1%]" name="nome"></Molinput>
                <Molinput register={form.register} text='Username' className="flex flex-col w-[70%] h-[30%] mt-[1%]" name="username"></Molinput>
                <Molinput register={form.register} text='Senha' className="flex flex-col w-[70%] h-[30%] mt-[1%]" name="password"></Molinput>

                <AtminputBotao value='Criar Conta' 
                    classNameBt="w-[70%] h-[32px] bg-black rounded-[4px] mt-[6%]"
                    classNameInput="text-white font-[Virgil] text-[22px] w-[100%] h-[100%] cursor-pointer"
                ></AtminputBotao>
            </form>
        </div>
    );
}

export default OrgRegistro