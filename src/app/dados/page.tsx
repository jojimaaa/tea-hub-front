"use client"
import { Label } from "@/components/ui/label";
import BubblesMaps from "@/organisms/BubbleMaps";
import styled from "styled-components";
import { registerLicense } from "@syncfusion/ej2-base";
import DadosTxt from "@/organisms/DadosTxt";
import DashBoard from "@/molecules/DashBoard";
import DadosTxtDashBoard from "@/organisms/DadosTxtDashBoard";
import DadosSectionDifReg from "@/organisms/DadosSectionDifReg";
import DadosSectionDistIdade from "@/organisms/DadosSectionDistIdade";
import DadosSectionEsc25anos from "@/organisms/DadosSectionEsc25anos";
import DadosSectionEscFaixa from "@/organisms/DadosSectionEscFaixa";

registerLicense("Ngo9BigBOggjHTQxAR8/V1JFaF1cXGFCf1FpRmNGfV5ycUVHYVZTQHxbRk0DNHVRdkdmWH5dcHZWRGRYWEB3XEVWYEg=");

export default function HomeDados() {
    return (
    <StyledContainer>

        <DadosTxt
            title="Análise de dados sobre autismo no Brasil (Censo 2022 - IBGE)"
            body="Este documento apresenta uma síntese das análises realizadas a partir das bases do IBGE referentes à população residente, níveis de escolaridade e indicadores específicos relacionados às pessoas diagnosticadas com autismo no Brasil em 2022.
                  Diante da escassez de dados mais detalhados sobre autismo, utilizamos principalmente as informações do Censo 2022 e aprofundamos a análise buscando extrair conclusões que possam servir como ponto de partida para novos estudos, questionamentos e ações que contribuam para uma compreensão mais ampla do autismo na sociedade. Nosso objetivo é reforçar que o autismo é uma condição que impacta significativamente a vida das pessoas que o possuem.
                  Além disso, observamos algumas inconsistências nos dados disponibilizados pelo IBGE. Por esse motivo, realizamos ajustes e geramos novas planilhas com resultados mais coerentes e alinhados à proporção real da população analisada.
                 "
        />

        <DadosTxt
            title="Prevalência geral de autismo"
            body="Segundo o Censo 2022, aproximadamente 2,4 milhões de pessoas declararam ter diagnóstico de autismo no Brasil, o que corresponde a cerca de 1,2% da população residente. A prevalência é semelhante entre as grandes regiões e estados, variando de aproximadamente 1,0% a 1,6%, com média nacional próxima de 1,19%.
                  Esses dados indicam que o diagnóstico de autismo aparece de forma relativamente uniforme em todo o território nacional, e não apenas em estados mais ricos ou urbanos. Embora fosse possível supor que regiões com menor renda teriam maior dificuldade de acesso ao diagnóstico, os números sugerem que, proporcionalmente, a identificação do autismo ocorre de maneira semelhante em diferentes contextos socioeconômicos, indicando um alcance mais amplo dos serviços de diagnóstico em nível nacional.
                  "
        />

        <DadosSectionDistIdade/>

        <DadosSectionEsc25anos/>

        <DadosSectionEscFaixa/>

        <DadosSectionDifReg/>

        <DadosTxt
            title="Implicações para a aplicação proposta"
            body="As evidências extraídas dos dados do IBGE apontam para alguns eixos centrais que podem orientar o desenho da aplicação:
                  - Foco em informação qualificada: a forte concentração de diagnósticos em crianças e adolescentes reforça a necessidade de uma parte informacional robusta sobre sinais precoces, níveis de suporte, fatores de risco ambientais e boas práticas no cuidado com autistas, incluindo o uso de telas e estratégias de manejo comportamental.
                  - Ferramentas de rastreio e registro: a evasão no ensino médio e o subdiagnóstico em adultos e populações vulneráveis (como indígenas) sustentam a importância de um módulo tipo M-CHAT ou diário estruturado, que permita famílias registrarem comportamentos, facilitando o acompanhamento por profissionais de saúde e a obtenção de benefícios como o BPC.
                  - Apoio à trajetória educacional: os dados de escolaridade mostram que autistas têm mais dificuldade para concluir o fundamental e alcançar o ensino superior. A aplicação pode incluir conteúdos direcionados a escolas, dicas de adaptação e acompanhamento da vida escolar para reduzir a evasão.
                  - Comunidade e habilidades sociais: dado o impacto social do autismo, faz sentido uma funcionalidade voltada à construção de redes de apoio e treino de habilidades sociais, como um 'tinder de amizade autista', com roteiros de interação e formação de comunidades seguras.
                  "
        />

        <DadosTxt
            title="Conclusão"
            body="Em síntese, os dados do IBGE confirmam que o autismo é um fenômeno presente em todo o território brasileiro, com forte concentração de diagnósticos em crianças e jovens, desigualdades significativas na escolarização de autistas adultos, diferenças de gênero e desafios adicionais para populações indígenas. Esses achados fornecem base empírica sólida para a construção de uma aplicação que combine informação, visualização de dados, instrumentos de rastreio e ferramentas de apoio à inclusão social e educacional de pessoas autistas."
        />
    </StyledContainer>
    );
}

const StyledTitle = styled.div`
    font-size: 28px;
`;

const StyledContainerTxt = styled.div`
    width: 70%;
`;

const StyledContainer = styled.div`
    background-color: var(--primary);
    width: 100%;
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const TitleLabel = styled(Label)`
    margin-top: 10px;
    font-family: var(--font-tea-hub);
    justify-self: center;
    font-size: 30px;
`;

const StyledSearchBarContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;