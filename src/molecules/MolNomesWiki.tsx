import { getTopic } from "@/services/wikiServices";
import { useEffect, useState } from "react";
import { WikiTopic } from "@/interfaces/WikiSchemas";
import styled from "styled-components";

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
                <h1>{author} {date}</h1>    
            </StyledContainerDesc>
            <h1>{topic_name}</h1>
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
    font-size: 28px;
    color: #282343;
`;

const Styleddate = styled.h1`
    margin-left: auto;
`;

const StyledContainerDesc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;