import Molinput from "../molecules/Molinput"
import '../app/globals.css'
import Botao from '../atms/Botao'
import AtminputBotao from "../atms/AtminputBotao"


interface OrgLoginProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgLogin({className, increment, decrement}:OrgLoginProps){
    return(
        <div className={className}>
            <h1 className='font-[Virgil] text-[64px] flex items-center justify-center mt-[4%]'>Tea-Hub</h1>
            <form action="" className="flex flex-col items-center justify-center mt-[5%] ">
                <Molinput text='Email' className="flex flex-col w-[70%] h-[30%]" name="Email"></Molinput>
                <Molinput text='Senha' className="flex flex-col w-[70%] h-[30%] mt-[4%]" name="Senha"></Molinput>
                
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