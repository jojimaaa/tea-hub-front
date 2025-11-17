import MainImg from "@/molecules/MainImg";
import MainSectionTextos from "@/molecules/MainSectionTextos";
import styled from "styled-components";

export function MainSection() {
    return (
        <Vbox>
            <Hbox>
                <MainSectionTextos/>
                <MainImg/>
                <StyledSvg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
                      <path 
                        d="M0,0 C0,1.05 1,1.05 1,0 V1 H0 Z"
                       />
                    </clipPath>
                    <rect width="100%" height="100%" fill="none" />
                    <rect width="100%" height="100%" fill="#F0EDF6" clip-path="url(#curveClip)" />
                </StyledSvg>
            </Hbox>
        </Vbox>
    );
}

export default MainSection;

const StyledSvg = styled.svg`
    width: 100%;
    height: 25%;
    position: absolute;
    bottom: 0;
`;

const Hbox = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    position: relative;
`;

const Vbox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50vh;
`;
