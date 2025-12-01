import styled from "styled-components";
import BubblesMaps from "@/organisms/BubbleMaps";
import dadosDifReg from "@/assets/dadosDifReg.png";
import Image from "next/image";
import PorcentagemCard from "../atoms/PorcentagemCard";

const DashBoardDifReg = () => {
    return (
        <StyledContainer>
            <Hbox>
                <Vbox>
                    <StyledContainerImage>
                        <Image fill alt="" src={dadosDifReg}/>
                    </StyledContainerImage>
                    <HboxCards>
                        <PorcentagemCard
                            porcentagem="1.2%"
                            title="Norte"
                        />
                        <PorcentagemCard
                            porcentagem="1.2%"
                            title="Nordeste"
                        />
                        <PorcentagemCard
                            porcentagem="1.2%"
                            title="Suldeste"
                        />
                        <PorcentagemCard
                            porcentagem="1.2%"
                            title="Sul"
                        />
                        <PorcentagemCard
                            porcentagem="1.1%"
                            title="Centro-Oeste"
                        />

                    </HboxCards>
                </Vbox>

                <StyledBubbleContainer>
                    <BubblesMaps/>
                </StyledBubbleContainer>

            </Hbox>
            
        </StyledContainer>
    );
}

export default DashBoardDifReg;

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

const StyledBubbleContainer = styled.div`
    width: 48.5%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    overflow: hidden;
    border: 0.5px solid black;
`;

const Vbox = styled.div`
    width: 48.5%;
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
    height: 75%;
    border: 0.5px solid black;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
`;

const HboxCards = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;




