"use client"
import { Label } from "@/components/ui/label";
import BubblesMaps from "@/organisms/BubbleMaps";
import styled from "styled-components";

export default function HomeDados() {
    const dadosExemplo = [
  { id: "SP", value: 120 },
  { id: "RJ", value: 80 },
  { id: "MG", value: 55 },
  { id: "BA", value: 30 },
  { id: "RS", value: 40 },
];
    return (
    <StyledContainer> 
        
        <BubblesMaps/>
    </StyledContainer>
    );
}

const StyledContainer = styled.div`
    background-color: var(--primary);
    width: 100%;
    overflow-x: hidden;
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