import styled from 'styled-components';

interface ParabolicProps {
    corcima:string;
    corbaixo:string;
}

function Parabolic ({corcima, corbaixo}:ParabolicProps){
    return(
        <StyledSvg viewBox="0 0 100 100" preserveAspectRatio="none">
            <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
              <path 
                d="M0,0 C0,1.05 1,1.05 1,0 V1 H0 Z"
               />
            </clipPath>
            <rect width="100%" height="100%" fill={corcima} />
            <rect width="100%" height="100%" fill={corbaixo} clip-path="url(#curveClip)" />
        </StyledSvg>
    );
}

export default Parabolic;

const StyledSvg = styled.svg`
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
`;