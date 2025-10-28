import MolTxtImg from "../molecules/MolTxtImg"
import '../app/globals.css'
import quebra2 from "../assets/quebra2.jpg"
import voltar from "../assets/voltar.png"
import styled from "styled-components";

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
            <Background 
                style={{ backgroundImage: `url(${quebra2})` }} >

              {index !=1  && (
                <BackButton
                  onClick={onClick}
                >
                  <BackImage src={voltar.src} alt="" />
                  <BackLabel>Voltar</BackLabel>
                </BackButton>
              )}
              <Card 
                  TextoGiga={TextoGiga}
                  TextoMini={TextoMini}
              ></Card>
            </Background>
            
        </div>
    );
}

export default OrgImg;

const Background = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: var(--radius-2xl);
  border-top-right-radius: var(--radius-2xl);
  position: absolute;
`;

const Card = styled(MolTxtImg)`
  display: flex; 
  position: absolute; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  width: 100%;
  color: var(--primary-foreground);
`;

const BackButton = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 14%;
  cursor: pointer;
  height: 12%;
  &:hover {
    text-decoration: underline;
  };
`;

const BackImage = styled.img`
  width: 100%;
  height: 80%;
`;

const BackLabel = styled.h1`
  font-family: var(--font-text);
  font-size: 15px;
  color: var(--primary-foreground);
`;