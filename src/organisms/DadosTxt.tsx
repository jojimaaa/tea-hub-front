import styled from "styled-components";

interface DadosTxtProps{
    title:string;
    body:string;
}

const DadosTxt = ({title, body}: DadosTxtProps) => {
    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <h2>{body}</h2>

        </StyledContainer>
    );
}

export default DadosTxt;

const StyledTitle = styled.div`
    font-size: 28px;
`;

const StyledContainer = styled.div`
    width: 70%;
    padding-bottom: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #BDBBDD;
`;
