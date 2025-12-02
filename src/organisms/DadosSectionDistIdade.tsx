
import DashBoardDistIdade from "@/molecules/DashBoardDistIdade";
import styled from "styled-components";


const DadosSectionDistIdade = () => {
    return (
        <StyledContainer>
            <StyledTitle>Distribuição por idade: concentração em crianças e jovens</StyledTitle>
            <DashBoardDistIdade/>
            <h2>Quando observamos a prevalência por faixa etária (autistas por 1.000 pessoas em cada grupo), a maior concentração de diagnósticos acontece na infância e adolescência. A faixa de 5 a 9 anos apresenta cerca de 25,5 autistas por 1.000 pessoas, seguida de 0 a 4 anos com aproximadamente 20,7 por 1.000. A partir dos 20 anos, os valores caem para algo em torno de 8 a 10 autistas por 1.000 pessoas.
                  Somando todas as faixas até 19 anos, cerca de 44% de todas as pessoas autistas estão abaixo de 20 anos. Já as faixas com 60 anos ou mais concentram apenas algo em torno de 13% dos diagnósticos. Esta diferença sugere um forte foco de diagnóstico nas gerações mais jovens, compatível com a hipótese de subdiagnóstico histórico em adultos e idosos. Ou seja, muitos autistas mais velhos provavelmente nunca receberam um diagnóstico formal.
                  </h2>
        </StyledContainer>
    );
}

export default DadosSectionDistIdade;

const StyledTitle = styled.div`
    font-size: 28px;
`;

const StyledContainer = styled.div`
    width: 70%;
    padding-bottom: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #BDBBDD;
`;
