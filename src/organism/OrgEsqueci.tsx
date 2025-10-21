import Molinput from "../molecules/Molinput"
import AtminputBotao from "../atms/AtminputBotao"
import '../app/globals.css'

interface OrgEsqueciProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgEsqueci({className}:OrgEsqueciProps){
    return(
        <div className={className}>
            <h1 className='font-[Virgil] text-[64px] flex items-center justify-center mt-[4%]'>Tea-Hub</h1>
            <form action="" className="flex flex-col items-center justify-center mt-[8%] ">
                <Molinput text='Email' className="flex flex-col w-[70%] h-[30%]" name="Email"></Molinput>
                
                <AtminputBotao value='Enviar' 
                    classNameBt="w-[70%] h-[32px] bg-black rounded-[4px] mt-[6%]"
                    classNameInput="text-white font-[Virgil] text-[22px] w-[100%] h-[100%] cursor-pointer"
                ></AtminputBotao>
            </form>
        </div>
    );
}

export default OrgEsqueci