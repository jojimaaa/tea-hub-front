import '../app/globals.css'

interface BotaoProps{
    Nome?:string;
    classNameBt?:string;
    classNameTxt?:string;
    onClick?: () => void;
}

function Botao({Nome, classNameBt, classNameTxt, onClick}:BotaoProps) {
    return (
        <button className={classNameBt} onClick={onClick}>
            <h1 className={classNameTxt}>{Nome}</h1>
        </button>
    );
}

export default Botao