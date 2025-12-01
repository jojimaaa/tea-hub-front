import DashBoardEscFaixa from "@/molecules/DashBoardEscFaixa";
import styled from "styled-components";


const DadosSectionEscFaixa = () => {
    return (
        <StyledContainer>
            <StyledTitle>Taxa de escolarização por faixa etária</StyledTitle>
            <DashBoardEscFaixa/>
            <h2>Comparando a taxa de escolarização da população total com a das pessoas autistas, observam-se diferenças importantes em alguns momentos do ciclo de vida. Na faixa de 6 a 14 anos, a escolarização é alta para todos, porém um pouco menor entre autistas: 98,26% para a população geral contra 94,36% entre autistas (diferença de 3,9 pontos percentuais).
                  Na faixa de 15 a 17 anos, a diferença aumenta: 85,25% de escolarização na população geral contra 77,28% entre autistas, quase 8 pontos percentuais de distância. Esse dado indica que a transição para o ensino médio é um ponto crítico de evasão escolar para pessoas autistas, possivelmente por falta de apoio adequado, acessibilidade pedagógica e condições de inclusão.
                  Curiosamente, nas faixas de 18 a 24 anos e 25 anos ou mais, a taxa de escolarização das pessoas autistas fica ligeiramente acima da população geral. Isso sugere que muitos autistas retornam aos estudos mais tarde ou permanecem mais tempo em cursos formais, como Educação de Jovens e Adultos (EJA) ou cursos técnicos.
                  </h2>
        </StyledContainer>
    );
}

export default DadosSectionEscFaixa;

const StyledTitle = styled.div`
    font-size: 28px;
`;

const StyledContainer = styled.div`
    width: 70%;
    padding-bottom: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #BDBBDD;
`;
