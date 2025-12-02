import styled from "styled-components";
import Image from "next/image";
import teaimg from "@/assets/teasymbol.png"
export function MainImg() {
    return (
      <StyledContainerImg>
        <StyledImage src={teaimg} alt=""/>
      </StyledContainerImg>
    );
  }
export default MainImg;

const StyledContainerImg = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: center;
    align-items: bottom;
    border-bottom-left-radius:180px;
    border-top-left-radius:180px;
    position: relative;
    background-color: #BDBBDD;
    overflow: hidden; 
`;
const StyledImage = styled(Image)`
    height: 150%;
    width: 100%;
    align-self: flex-end;
    margin-top: auto;
    margin-left: 60px;
`;