import styled from 'styled-components';
import '../app/globals.css'
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Parabolic from '@/atoms/Parabolic';


interface MainCardProps {
    redirecturl:string,
    title:string,
    text:string,
    url:StaticImageData
}

function MainCard({redirecturl, title, text, url}:MainCardProps) {
    const router = useRouter();
    return(
        <StyledContainerCard onMouseDown={() => router.push(redirecturl)}>
            <StyledContainerImg>
                <StyledImg src={url} alt=''></StyledImg>
                <Parabolic corcima={'none'} corbaixo={"#BDBBDD"}></Parabolic>
            </StyledContainerImg>
            <StyledContainerTextos>
                <StyledTitle>{title}</StyledTitle>
                <StyledContainerTxt>
                    <StyledDesc>{text}</StyledDesc>
                </StyledContainerTxt>
            </StyledContainerTextos>
        </StyledContainerCard>
    );
}

export default MainCard;

const StyledTitle = styled.h1`
    font-family: var(--font-login-text);
    font-size: 20px;
    color:#2713A4;
    margin-bottom: 10px;
`;

const StyledDesc = styled.p`
    font-family: var(--font-login-text);
    font-size: 16px;
    color:#282343;
`;

const StyledContainerTxt = styled.div`
    width: 90%;
    height: 100%;
`;

const StyledContainerCard = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: #BDBBDD;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 18px rgba(0,0,0,0.20);
    cursor: pointer;
`;


const StyledContainerImg = styled.div`
    width: 100%;
    height: 40%;
    background-color: white;
    position: relative;
    justify-content: center;
    align-items: flex-start;
    display: flex;
`;

const StyledContainerTextos = styled.div`
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const StyledImg = styled(Image)`
    object-fit: contain; 
    object-position: top;
    width: 100%;
    height: 90%;
`;