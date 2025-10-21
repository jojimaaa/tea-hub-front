import MolTxtImg from "../molecules/MolTxtImg"
import '../app/globals.css'
import quebra2 from "../assets/quebra2.jpg"
import voltar from "../assets/voltar.png"

interface OrgImgProps{
    className?: string;
    TextoGiga:string;
    TextoMini:string;
    onClick: () => void;
    index:number;
}

function OrgImg({className,TextoGiga,TextoMini,onClick, index}:OrgImgProps){
    return(
        <div className={className}>
            <div className="bg-cover bg-center w-[100%] h-[100%] rounded-br-2xl rounded-tr-2xl absolute" 
                style={{ backgroundImage: `url(${quebra2})` }} >
            </div>
            {index !=1  && (
              <button
                className="items-center justify-center flex flex-col absolute top-0 right-0 w-[14%] cursor-pointer h-[12%] hover:underline"
                onClick={onClick}
              >
                <img className="w-[100%] h-[80%]" src={voltar.src} alt="" />
                <h1 className="font-[Virgil] text-[15px] text-black">Voltar</h1>
              </button>
            )}
            <MolTxtImg 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] flex flex-col items-center justify-center"
                TextoGiga={TextoGiga}
                TextoMini={TextoMini}
            ></MolTxtImg>
            
        </div>
    );
}

export default OrgImg