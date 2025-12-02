"use client"

import { motion } from "framer-motion";
import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import WikiPontosRecomList from "@/molecules/WikiPontosRecomList";
import WikiRecomImg from "@/molecules/WikiRecomImg";
import WikiRecomTxt from "@/molecules/WikiRecomTxt";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface WikiRecomListProps {
    recom : WikiPostSchema[],
    current : number,
    setCurrent : Dispatch<SetStateAction<number>>
}

const WikiRecomList = ({
    recom,
    current,
    setCurrent
} : WikiRecomListProps) => {

    return (
        <Vbox>
            {recom[current] && (
                <Hbox>
                    <StyledContainerTransition
                        key={current} 
                        initial={{ x: "-100%"}}  
                        animate={{ x: "100%" }}            
                        transition={{
                          duration: 3,
                          ease: "easeInOut",
                        }}
                    />
                    <WikiRecomTxt
                        title={recom[current].title}
                        topic={recom[current].topic}
                        author={recom[current].author_name}
                        body={recom[current].body}
                        date={recom[current].created_date.toString().split("T")[0]}
                        current={current}
                    />
                    <WikiRecomImg current={current} url={recom[current].image_url}/>
                    <StyledSvg viewBox="0 0 100 100" preserveAspectRatio="none">
                        <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
                          <path 
                            d="M0,0 C0,1.05 1,1.05 1,0 V1 H0 Z"
                           />
                        </clipPath>
                        <rect width="100%" height="100%" fill="none" />
                        <rect width="100%" height="100%" fill="#F0EDF6" clip-path="url(#curveClip)" />
                    </StyledSvg>
                    <WikiPontosRecomList current={current} setCurrent={setCurrent}/>
                </Hbox>
            )}
        </Vbox>
    )
}

export default WikiRecomList;


const StyledContainerTransition = styled(motion.div)`
    position: absolute;
    position: "fixed";
    border-radius: 100px;
    top: 0;
    left: 0;
    width: 200%;
    height: 95%;
    background-color: #F0EDF6;
    z-index: 9999;
`;

const StyledSvg = styled.svg`
    width: 100%;
    height: 25%;
    position: absolute;
    bottom: 0;
`;

const Hbox = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    align-content:center;
`;


const Vbox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50vh;
`;

