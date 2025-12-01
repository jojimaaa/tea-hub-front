
import DashBoardDifReg from "@/molecules/DashBoardDifReg";
import styled from "styled-components";


const DadosSectionDifReg = () => {
    return (
        <StyledContainer>
            <StyledTitle>Diferenças entre estados e regiões</StyledTitle>
            <DashBoardDifReg/>
            <h2>O percentual de pessoas diagnosticadas com autismo em relação à população total é relativamente homogêneo entre estados e regiões. A maioria das unidades federativas apresenta valores entre 1,0% e 1,5%, com média nacional em torno de 1,19%. Estados como Acre e Amapá têm valores um pouco maiores (perto de 1,5%–1,6%), enquanto outros, como Bahia e Tocantins, ficam em torno de 1,0%. Essas variações sugerem que fatores locais, como disponibilidade de serviços especializados, cultura de diagnóstico e políticas públicas estaduais, influenciam o número de diagnósticos registrados. No entanto, a diferença não é tão extrema a ponto de indicar que o autismo seja restrito a uma região específica; pelo contrário, o quadro é de presença nacional.</h2>
            
        </StyledContainer>
    );
}

export default DadosSectionDifReg;

const StyledTitle = styled.div`
    font-size: 28px;
`;

const StyledContainer = styled.div`
    width: 70%;
    padding-bottom: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #BDBBDD;
`;
