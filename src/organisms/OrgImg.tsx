import MolTxtImg from "../molecules/MolTxtImg"
import '../app/globals.css'
import quebra2 from "../assets/quebra2.jpg"
import styled from "styled-components";
import { ArrowBackIcon } from "@/components/ui/icons/akar-icons-arrow-back";

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
                  <ArrowBackIcon/>
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
  background: linear-gradient(90deg, var(--purple-light1), var(--purple-light3));
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

const BackLabel = styled.h1`
  font-family: var(--font-montserrat);
  font-size: 15px;
  color: var(--primary-foreground);
`;