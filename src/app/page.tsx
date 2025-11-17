"use client"
import MainSection from "@/organisms/MainSection";
import MainSectionAtividades from "@/organisms/MainSectionAtividades";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledContainer>
      <MainSection/>
      <MainSectionAtividades/>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
`;
