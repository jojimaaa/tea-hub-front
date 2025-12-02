import styled from "styled-components";
import dadosEscFaixa from "@/assets/dadosEscFaixa.png";
import dadosEscFaixa2 from "@/assets/dadosEscFaixa2.png";
import Image from "next/image";

const DashBoardEscFaixa = () => {
    return (
        <StyledContainer>
            <Hbox>
                <StyledContainerImage>
                    <StyledImage src={dadosEscFaixa} alt="" fill/>
                </StyledContainerImage>
                
                <StyledContainerImage2>
                    <StyledImage src={dadosEscFaixa2} alt="" fill/>
                </StyledContainerImage2>

            </Hbox>
            
        </StyledContainer>
    );
}

export default DashBoardEscFaixa;

const StyledContainer = styled.div`
    width: 100%;
    background-color: #BDBBDD;
    height: 400px;
    border: 0.5px solid black;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 30px;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
`;


const Hbox = styled.div`
    width: 94%;
    height: 90%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`;

const StyledContainerImage = styled.div`
    width: 50%;
    height: 100%;
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




