import DashBoardEsc25anos from "@/molecules/DashBoardEsc25anos";
import styled from "styled-components";


const DadosSectionEsc25anos = () => {
    return (
        <StyledContainer>
            <StyledTitle>Escolaridade de pessoas autistas com 25 anos ou mais</StyledTitle>
            <DashBoardEsc25anos/>
            <h2>Entre as pessoas com 25 anos ou mais, a distribuição do nível de instrução mostra uma desigualdade marcante. Na população geral, cerca de 35,2% não têm instrução ou não concluíram o ensino fundamental, enquanto entre as pessoas autistas essa proporção sobe para 46,1%. Ou seja, quase metade dos autistas adultos permanece nos níveis de escolaridade mais baixos.
                 Nos níveis mais altos, a diferença também aparece. Entre a população geral com 25 anos ou mais, aproximadamente 18,4% têm ensino superior completo, contra 15,7% entre autistas. Somando-se os níveis médio completo/superior incompleto e superior completo, cerca de 50,7% dos adultos da população geral estão nesse bloco, enquanto entre autistas essa proporção cai para aproximadamente 41,1%.
                 Esses números dão suporte à hipótese de que pessoas autistas enfrentam mais barreiras para avançar na trajetória escolar, tanto para concluir a educação básica quanto para acessar e se manter na educação superior.
                 </h2>
        </StyledContainer>
    );
}

export default DadosSectionEsc25anos;

const StyledTitle = styled.div`
    font-size: 28px;
`;

const StyledContainer = styled.div`
    width: 70%;
    padding-bottom: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #BDBBDD;
`;
