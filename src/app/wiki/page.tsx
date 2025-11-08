"use client"
import { Label } from "@/components/ui/label";
import WikiHomeButtonsBar from "@/organisms/WikiHomeButtonsBar";
import WikiRecentList from "@/organisms/WikiRecentList";
import WikiRecomList from "@/organisms/WikiRecomList";
import WikiSearchBar from "@/organisms/WikiSearchBar";
import styled from "styled-components";

export default function HomeWiki() {

    return (<StyledContainer> 
        <TitleLabel>Wiki TEA-HUB</TitleLabel>
        <WikiRecomList/>
        <WikiRecentList/>
        <WikiHomeButtonsBar/>
    </StyledContainer>);
}

const StyledContainer = styled.div`
    background-color: var(--primary);

    padding-left: 4%;
    padding-right: 4%;
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