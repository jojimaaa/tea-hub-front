import styled from "styled-components";

interface NumeroCardEsc25anosProps{
    numero:string;
    title:string;
}

const NumeroCardEsc25anos = ({numero, title}: NumeroCardEsc25anosProps) => {
    return (
        <StyledContainer>
            <StyledNumero>{numero}</StyledNumero>
            <StyledContainertitle>
                <Styledtitle>{title}</Styledtitle>
            </StyledContainertitle>
        </StyledContainer>
    );
}

export default NumeroCardEsc25anos;

const StyledNumero = styled.h1`
    font-size: 36px;
`;

const Styledtitle= styled.h2`
    font-size: 16px;
    text-align: center;
`;

const StyledContainertitle= styled.div`
    width: 80%;
    justify-content: center;
    align-items: center;
`;


const StyledContainer = styled.div`
    width: 47.5%;
    height: 100%;
    background-color: white;
    border: 0.5px solid black;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;





