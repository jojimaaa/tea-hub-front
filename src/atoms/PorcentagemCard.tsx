import styled from "styled-components";
import BubblesMaps from "@/organisms/BubbleMaps";
import dadosDifReg from "@/assets/dadosDifReg.png";
import Image from "next/image";

interface PorcentagemCardProps{
    porcentagem:string;
    title:string;
}

const PorcentagemCard = ({porcentagem, title}: PorcentagemCardProps) => {
    return (
        <StyledContainer>
            <StyledPorcentagem>{porcentagem}</StyledPorcentagem>
            <Styledtitle>{title}</Styledtitle>
        </StyledContainer>
    );
}

export default PorcentagemCard;

const StyledPorcentagem = styled.h1`
    font-size: 20px;
`;

const Styledtitle= styled.h2`
    font-size: 14px;
`;

const StyledContainer = styled.div`
    width: 19%;
    background-color: white;
    height: 90%;
    border: 0.5px solid black;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;





