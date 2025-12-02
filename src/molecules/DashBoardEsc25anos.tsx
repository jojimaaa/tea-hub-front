import styled from "styled-components";
import dadosEsc25anos from "@/assets/dadosEsc25anos.png";
import dadosEsc25anos2 from "@/assets/dadosEsc25anos2.png";
import Image from "next/image";
import NumeroCardEsc25anos from "@/atoms/NumeroCardEsc25anos";

const DashBoardEsc25anos = () => {
    return (
        <StyledContainer>
            <Hbox>
                <Vbox>
                    <StyledContainerImage>
                        <StyledImage fill src={dadosEsc25anos} alt=""/>
                    </StyledContainerImage>

                    <StyledContainerImage>
                        <StyledImage fill src={dadosEsc25anos2} alt=""/>
                    </StyledContainerImage>

                </Vbox>
                <VboxCards>
                    <HboxCards>
                        <NumeroCardEsc25anos numero={"547727"} title={"Sem instrução e fundamental incompleto"}/>
                        <NumeroCardEsc25anos numero={"153293"} title={"Fundamental completo e médio incompleto"}/>
                    </HboxCards>

                    <HboxCards>
                        <NumeroCardEsc25anos numero={"301664"} title={"Médio completo e superior incompleto"}/>
                        <NumeroCardEsc25anos numero={"186639"} title={"Superior completo"}/>
                    </HboxCards>

                </VboxCards>
            </Hbox>
        </StyledContainer>
    );
}

export default DashBoardEsc25anos;

const StyledContainer = styled.div`
    width: 100%;
    background-color: #BDBBDD;
    height: 500px;
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

const HboxCards = styled.div`
    width: 100%;
    height: 47.5%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`;

const Vbox = styled.div`
    width: 45%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
`;

const VboxCards = styled.div`
    width: 52.5%;
    height: 100%;
    flex-direction: column;
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


const StyledImage = styled(Image)`
`;




