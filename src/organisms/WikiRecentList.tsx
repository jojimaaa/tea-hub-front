"use client"

import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import WikiPostCard from "@/molecules/WikiPostCard"
import { getRecent, getRecommended } from "@/services/wikiServices";
import { useEffect, useState } from "react";
import styled from "styled-components";

const WikiRecentList = () => {

    const [recent, setRecent] = useState<WikiPostSchema[]>([]);

    useEffect(
        () => {
            const fetchRecent = async () => {
                const response = await getRecent();
                if (response) setRecent(response);
                console.log(response);
            }   
            fetchRecent();
        },[]
    );

    return (
        <StyledContainer>
            <StyledLabelContainer>
                <StyledLabel>Recentes</StyledLabel>
            </StyledLabelContainer>

            <StyledListContainer>
                {(recent.length != 0) && 
                    recent.map((post) => <WikiPostCard post={post}/>)
                }
            </StyledListContainer>
        </StyledContainer>
    )
}

export default WikiRecentList;

const StyledContainer = styled.div`
    height: 100%;
    margin-top: 20px;
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
    font-family: var(--font-montserrat);
    font-size: 30px;
    width: 100%;
`;

const StyledLabelContainer = styled.div`
    width: 100%;
    border-width: 0px 0px 1px 0px;
    border-color: var(--primary-foreground);
    margin-bottom: 10px;
`;