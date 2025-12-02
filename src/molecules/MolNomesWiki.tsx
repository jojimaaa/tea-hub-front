import { getTopic } from "@/services/wikiServices";
import { useEffect, useState } from "react";
import { WikiTopic } from "@/interfaces/WikiSchemas";
import styled from "styled-components";
import { formatMediumDate } from "@/utils/utils";
import { Label } from "@/components/ui/label";

interface WikiNomes {
    title: string;
    author: string;
    topic_name: string;
    date:string;
}

function MolNomesWiki({
    title: title,
    author: author,
    topic_name: topic_name,
    date:date
}: WikiNomes) {

    return(
        <StyledContainer>
            <Styledtitle>{title}</Styledtitle>
            <StyledContainerDesc>
                <StyledInfo>{author} {<Styleddate>{"Criado em: " + formatMediumDate(date)} </Styleddate>}</StyledInfo>    
            </StyledContainerDesc>
            <StyledTopicLabel>{topic_name}</StyledTopicLabel>
        </StyledContainer>    
    );
}

export default MolNomesWiki

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Styledtitle = styled.h1`
    font-size: 30px;
    font-family: var(--font-lexend-exa);
    color: #282343;
`;

const Styleddate = styled.div`
    margin-left: 1%;
    color: var(--secondary)
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const StyledContainerDesc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledTopicLabel = styled(Label)`
    border-radius: 10px;
    color: var(--primary);
    font-size: 13px;
    font-weight: 300;
    background-color: var(--secondary);
    padding: 6px;
    height: 18px;
    white-space: nowrap;
    width: min-content;
    display: flex;
    align-content: center;  
    margin-bottom: 10px;
`;