"use client"
import styled from "styled-components";
import WikiHomeButtonsBar from "@/organisms/WikiHomeButtonsBar";
import WikiRecentList from "@/organisms/WikiRecentList";
import WikiRecomList from "@/organisms/WikiRecomList";
import { useAsyncFn } from "@/hooks/useAsync";
import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import LoadingSpinner from "@/organisms/LoadingSpinner";
import { getRecent, getRecommended } from "@/services/wikiServices";
import { useState, useEffect } from "react";

export default function HomeWiki() {

    const {
        loading : loadingRecom,
        execute : getRecommendedAsync
    } = useAsyncFn(getRecommended);

    const [recom, setRecom] = useState<WikiPostSchema[]>([]);
    const [current, setCurrent] = useState(0);

    useEffect(
        () => {
            const fetchRecom = async () => {
                const response = await getRecommendedAsync();
                console.log(response);
                if (response) setRecom(response);
            }   
            fetchRecom();
        },[]
    );
    
    const {
        loading : loadingRecent, 
        execute : getRecentAsync
    } = useAsyncFn(getRecent);
    
    const [recent, setRecent] = useState<WikiPostSchema[]>([]);
    
    useEffect(
        () => {
            const fetchRecent = async () => {
                const response = await getRecentAsync();
                if (response) setRecent(response);
            }   
            fetchRecent();
        },[]
    );
    
    if (loadingRecent) {
        return (
            <LoadingSpinner
                label="Carregando"
                text="Por favor, aguarde."
            />
        )
    }
    
    if(loadingRecom) return (<LoadingSpinner
        label={"Carregando"}
        text={"Por favor, aguarde."}
    />);
    

    return (
        <StyledContainer> 
        <WikiRecomList
            recom={recom}
            current={current}
            setCurrent={setCurrent}
        />
        <WikiRecentList
            recent={recent}
        />
        <WikiHomeButtonsBar/>
    </StyledContainer>);
}


const StyledContainer = styled.div`
    background-color: var(--primary);
    width: 100%;
    overflow-x: hidden;
`;


