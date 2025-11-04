"use client"

import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import WikiRecomCard from "@/molecules/WikiRecomCard"
import { getRecommended } from "@/services/wikiServices";
import { useEffect, useState } from "react";
import styled from "styled-components";

const WikiRecomList = () => {

    const [recom, setRecom] = useState<WikiPostSchema[]>([]);

    useEffect(
        () => {
            const fetchRecom = async () => {
                const response = await getRecommended();
                if (response) setRecom(response);
                console.log(response);
            }   
            fetchRecom();
        },[]
    );

    return (
        <StyledContainer>
            <StyledLabelContainer>
                <StyledLabel>Recomendados</StyledLabel>
            </StyledLabelContainer>

            <StyledListContainer>
                {(recom.length != 0) && 
                    recom.map((post) => <WikiRecomCard post={post}/>)
                }
            </StyledListContainer>
        </StyledContainer>
    )
}

export default WikiRecomList;

const StyledContainer = styled.div`
    padding-left: 4%;
    padding-right: 4%;
    height: 100%;

`;

const StyledListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-content:center;
`;

const StyledLabel = styled.text`
    font-family: var(--font-login-text);
    font-size: 30px;
    width: 100%;
`;

const StyledLabelContainer = styled.div`
    width: 100%;
    border-width: 0px 0px 1px 0px;
    border-color: var(--primary-foreground);
    margin-bottom: 10px;
`;