import styled from "styled-components";
import BubblesMaps from "@/organisms/BubbleMaps";

const DashBoard = () => {
    return (
        <StyledContainer>
            <StyledBubbleContainer>
            </StyledBubbleContainer>
        </StyledContainer>
    );
}

export default DashBoard;

const StyledContainer = styled.div`
    width: 100%;
    background-color: #BDBBDD;
    height: 60%;
    border: 0.5px solid black;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const StyledBubbleContainer = styled.div`
    width: 50%;
    height: 80%;
    position: relative;
    border: 1px solid black;
    overflow: hidden;
    margin:20px
`;
