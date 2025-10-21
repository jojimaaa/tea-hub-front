import '../app/globals.css'

interface AtminputBotaoProps {
    classNameBt?:string;
    classNameInput?:string
    value:string
}

function AtminputBotao({classNameBt,classNameInput,value}:AtminputBotaoProps) {
    return(
        <button className={classNameBt} type="submit">
            <input type="submit" className={classNameInput} value={value}/>
        </button>
    );
}

export default AtminputBotao