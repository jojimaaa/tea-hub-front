
import styled from "styled-components";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import infinity from "@/assets/infinity.png"
import LineButton from "@/atoms/LineButton";
export function Header() {
    const router = useRouter();

    return (
        <HeaderRow>
            <StyledContainerLogoNome onClick={() => router.push("/")}>
                <StyledContainerImg>
                    <StyledImg src={infinity} alt=""></StyledImg>
                </StyledContainerImg>
                <LogoButton>TEA-HUB</LogoButton>
            </StyledContainerLogoNome>
            <StyledContainerServices>
                <StyledButton
                  Nome="Wiki"
                  onClick={() => router.push("/wiki")}
                />
                <StyledButton
                  Nome="Comunidade"
                  onClick={() => router.push("/wiki")}
                />
                <StyledButton
                  Nome="Dados"
                  onClick={() => router.push("/wiki")}
                />
            </StyledContainerServices>
            <StyledContainerLogin>
                <StyledButton
                  Nome="Login"
                  onClick={() => router.push("/login")}
                />
            </StyledContainerLogin>
            
        </HeaderRow>
    );
}

export default Header;

const HeaderRow = styled.div`
    background-color: var(--primary);
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    border:1px solid black;

    border-width: 0px 0px 1px 0px;
    border-color: var(--primary-foreground);
`;

const StyledContainerImg = styled.div`
    width: 120px;
    height: 100%;
    flex-direction: row;
    align-items: center;
    display: flex;
`;

const StyledContainerLogoNome = styled.div`
    height: 100%;
    flex-direction: row;
    align-items: center;
    display: flex;
    margin-left: 10%;
    cursor: pointer;
`;

const StyledContainerServices = styled.div`
    height: 100%;
    justify-content: space-between;
    display: flex;
    width: 20%;
    margin-left: 20%;
`;

const StyledContainerLogin= styled.div`
    height: 100%;
    margin-left: 20%;
`;



const LogoButton = styled.text`
    font-size: 22px;
    &:hover{ 
        cursor: pointer;
    }
    font-family: var(--font-tea-hub);
`;

const StyledButton = styled(LineButton)`
    &:hover{
        cursor: pointer;
    }
`;

const StyledImg = styled(Image)`
    object-fit: contain; 
    object-position: center;
    width: 300%;
    height: 300%;
`;