import { useEffect, useState } from "react";
import styled from "styled-components";

interface WikiPontosRecomListProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}


export function WikiPontosRecomList({current, setCurrent}:WikiPontosRecomListProps) {
    const [progress, setProgress] = useState(0);
    const [cont, setCont] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 1) {
            setCont(i => i+1);
            return 0;
          }
          return prev + 0.02;
        });
      }, 100);

      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrent(i => contar(i));
    }, [cont]);


    function contar(i: number) {
        if(i == 3) return 0;
        return i + 1;
    }


    return (
        <StyledContainerPontos>
            {[0,1,2,3].map(i =>
                i == current ? (
                    <ContainerBarra key={i}><Barra style={{ width:`${90 * progress}%` }}/></ContainerBarra>
                ) : (
                    <ContainerCircle
                        key={i}
                        onClick={() => {setCurrent(i), setProgress(0)}}
                    >
                        <Circle/>
                    </ContainerCircle>
                )
            )}
        </StyledContainerPontos>
    );
  }
export default WikiPontosRecomList;


const StyledContainerPontos = styled.div`
    position: absolute;
    width: 80px;
    height: 5%;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
`;

const Circle = styled.div`
  width: 50%;
  height: 50%;
  background-color: #BDBBDD;
  border-radius: 100%;
  &:hover {
    transform: scale(1.5);
    cursor: pointer
  }
`;

const ContainerCircle = styled.div`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ContainerBarra = styled.div`
  width: 40%;
  height: 100%;
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;

const Barra = styled.div`
    height: 30%;
    border-radius: 4px;
    margin-left: 5%;
    background-color: #BDBBDD;
`;
