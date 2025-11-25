"use client"
import styled from "styled-components";
import WikiHomeButtonsBar from "@/organisms/WikiHomeButtonsBar";
import WikiRecentList from "@/organisms/WikiRecentList";
import WikiRecomList from "@/organisms/WikiRecomList";

export default function HomeWiki() {

    return (
    <StyledContainer> 
        <WikiRecomList/>
        <WikiRecentList/>
        <WikiHomeButtonsBar/>
    </StyledContainer>);
}


const StyledContainer = styled.div`
    background-color: var(--primary);
    width: 100%;
    overflow-x: hidden;
`;


