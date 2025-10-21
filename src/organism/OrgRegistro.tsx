import Molinput from "../molecules/Molinput"
import '../app/globals.css'
import AtminputBotao from "../atms/AtminputBotao"


interface OrgRegistroProps{
    className?: string;
    increment?: () => void;
    decrement?: () => void;
}

function OrgRegistro({className}:OrgRegistroProps){
    return(
        <div className={className}>
            <h1 className='font-[Virgil] text-[64px] flex items-center justify-center mt-[4%]'>Tea-Hub</h1>
            <form action="" className="flex flex-col items-center justify-center mt-[2%] ">
                <Molinput text='Email' className="flex flex-col w-[70%] h-[30%]" name="Email"></Molinput>
                <Molinput text='Nome' className="flex flex-col w-[70%] h-[30%] mt-[1%]" name="Nome"></Molinput>
                <Molinput text='Username' className="flex flex-col w-[70%] h-[30%] mt-[1%]" name="Username"></Molinput>
                <Molinput text='Senha' className="flex flex-col w-[70%] h-[30%] mt-[1%]" name="Senha"></Molinput>

                <AtminputBotao value='Criar Conta' 
                    classNameBt="w-[70%] h-[32px] bg-black rounded-[4px] mt-[6%]"
                    classNameInput="text-white font-[Virgil] text-[22px] w-[100%] h-[100%] cursor-pointer"
                ></AtminputBotao>
            </form>
        </div>
    );
}

export default OrgRegistro