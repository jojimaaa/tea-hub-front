import styled from "styled-components";
import dadosDisIdade from "@/assets/dadosDistIdade.png";
import dadosDisIdade2 from "@/assets/dadosDistIdade2.png";
import dadosDisIdade3 from "@/assets/dadosDistIdade3.png";
import Image from "next/image";
import PorcentagemCard from "../atoms/PorcentagemCard";

const DashBoardDistIdade = () => {
    return (
        <StyledContainer>
            <Hbox>
                <Vbox>
                    <StyledContainerImage>
                        <StyledImage src={dadosDisIdade} alt="" fill/>
                    </StyledContainerImage>
                    <StyledContainerImage>
                        <StyledImage src={dadosDisIdade3} alt="" fill/>
                    </StyledContainerImage>
                </Vbox>
                
                <StyledContainerImage2>
                    <StyledImage src={dadosDisIdade2} alt="" fill/>
                </StyledContainerImage2>

            </Hbox>
            
        </StyledContainer>
    );
}

export default DashBoardDistIdade;

const StyledContainer = styled.div`
    width: 100%;
    background-color: #BDBBDD;
    height: 450px;
    border: 0.5px solid black;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 30px;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
`;


const Vbox = styled.div`
    width: 49.5%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
`;

const Hbox = styled.div`
    width: 94%;
    height: 90%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`;

const StyledContainerImage = styled.div`
    width: 100%;
    height: 47.5%;
    border: 0.5px solid black;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
`;

const StyledContainerImage2 = styled.div`
    width: 47.5%;
    height: 100%;
    border: 0.5px solid black;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
`;


const StyledImage = styled(Image)`
`;




