import DashBoard from "@/molecules/DashBoard";
import styled from "styled-components";

interface DadosTxtProps{
    title:string;
    body:string;
}

const DadosTxtDashBoard = ({title, body}: DadosTxtProps) => {
    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <DashBoard/>
            <h2>{body}</h2>
            
        </StyledContainer>
    );
}

export default DadosTxtDashBoard;

const StyledTitle = styled.div`
    font-size: 28px;
`;

const StyledContainer = styled.div`
    width: 70%;
    padding-bottom: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #BDBBDD;
`;
