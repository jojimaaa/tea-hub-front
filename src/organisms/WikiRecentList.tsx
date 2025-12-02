"use client"

import Parabolic from "@/atoms/Parabolic";
import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import WikiPostCard from "@/molecules/WikiPostCard"
import styled from "styled-components";

interface WikiRecentListProps {
    recent: WikiPostSchema[]
}

const WikiRecentList = ({recent} : WikiRecentListProps) => {

        return (
        <StyledContainer>
            <Vbox>
                <StyledLabelContainer>
                    <StyledLabel>Recentes</StyledLabel>
                </StyledLabelContainer>
            <StyledListContainer>
                {(recent.length != 0) && 
                    recent.map((post) => <WikiPostCard key={post.id} post={post}/>)
                }
            </StyledListContainer>
            </Vbox>
            <Parabolic corcima={`var(--background-blue)`} corbaixo={"#BDBBDD"}/>
        </StyledContainer>
    )
}

export default WikiRecentList;

const StyledContainer = styled.div`
    background-color: var(--background-blue);
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Vbox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 500px;
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
    color:#40386B;
`;

const StyledLabelContainer = styled.div`
    height: 50px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 10px;
`;