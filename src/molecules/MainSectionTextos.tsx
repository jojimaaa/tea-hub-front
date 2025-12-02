import styled from "styled-components";

export function MainSectionTextos() {
    return (
      <StyledContainer>
        <StyledContainerTitle>
            <StyledTitle>TEA-HUB</StyledTitle>
            <StyledTitle>Informação e Acolhimento</StyledTitle>
            <StyledTxt>Plataforma dedicada a reunir informações confiáveis sobre o Transtorno do Espectro Autista. Nosso objetivo é oferecer conhecimento acessível a famílias, profissionais e pessoas autistas, promovendo inclusão, respeito e autonomia através da informação e da comunidade.</StyledTxt>
        </StyledContainerTitle>
      </StyledContainer>
    );
  }
export default MainSectionTextos;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    justify-content: center;
`;

const StyledContainerTitle = styled.div`
    margin: 40px;
    height: 100%;
`;

const StyledTxt = styled.p`
    margin-top: 20px;
    font-family: var(--font-login-text);
    font-size: 18px;
`;

const StyledTitle = styled.h1`
    font-family: var(--font-login-text);
    font-size: 40px;
    color: #2713A4;
`;