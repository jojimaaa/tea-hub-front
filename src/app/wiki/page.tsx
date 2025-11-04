"use client"

import { Label } from "@/components/ui/label";
import WikiSearchBar from "@/organisms/WikiSearchBar";
import styled from "styled-components";

export default function HomeWiki() {



    return (<StyledContainer> 
        <TitleLabel>Wiki TEA-HUB</TitleLabel>
        <WikiSearchBar></WikiSearchBar>
    </StyledContainer>);
}

const StyledContainer = styled.div`
    background-color: var(--primary);
`;

const TitleLabel = styled(Label)`
    margin-top: 10px;
    font-family: var(--font-tea-hub);
    justify-self: center;
    font-size: 30px;

`;