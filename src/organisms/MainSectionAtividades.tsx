import MainCard from "@/molecules/MainCard";
import styled from "styled-components";
import imgdados from '@/assets/dados.png';
import imgwiki from '@/assets/wiki.png';
import imgforum from '@/assets/forum.png';

export function MainSectionAtividades() {
    return (
        <StyledContainer>
            <Vbox>
              <StyledTitle>Nossos Serviços</StyledTitle>
              <Hbox>
                <MainCard
                    redirecturl="/dados"
                    title="Dados e Estatísticas"
                    text="Acesse informações e estatísticas atualizadas sobre o TEA em diferentes regiões e faixas etárias."
                    url={imgdados}
                />
                <MainCard
                    redirecturl="/wiki"
                    title="Entenda o Autismo"
                    text="Uma coleção rica de publicações educativas sobre o espectro autista, suas características, desafios e potencialidades."
                    url={imgwiki}
                />
                <MainCard
                    redirecturl="/forum"
                    title="Forum TEA-Hub"
                    text="Participe de um espaço acolhedor para trocar experiências, tirar dúvidas e compartilhar vivências sobre o autismo com outras pessoas."
                    url={imgforum}
                />
              </Hbox>
            </Vbox>
        </StyledContainer>
    );
  }
export default MainSectionAtividades;

const StyledTitle = styled.h1`
    font-family: var(--font-login-text);
    font-size: 30px;
    color:#40386B;
    margin-bottom: 30px;
`;

const Hbox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

const Vbox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 600px;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #F0EDF6;
`;