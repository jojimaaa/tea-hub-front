"use client"

import { useState } from "react";
import LoginRegisterFlipbook from "./LoginRegisterFlipbook";
import { Toaster } from "sonner";
import styled from "styled-components";
import OrgEsqueci from "./OrgEsqueci";
import OrgImg from "./OrgImg";
import OrgLogin from "./OrgLogin";
import OrgRegistro from "./OrgRegistro";

const CompleteAuthFlipbook =() => {

    const [index, setIndex] = useState<number>(1);

    const increment = () => {
    setIndex(prev => (prev + 1));
    };

    const decrement = () => {
    setIndex(prev => (prev - 1)); 
    };

    return (<>
        <StyledToaster/>
       <LoginRegisterFlipbook 
       index={index}
       itemsE={[
          <StyledRegistro key={"registro"} increment={increment} decrement={decrement}></StyledRegistro>,
          <StyledLogin key={"login"} increment={increment} decrement={decrement}></StyledLogin>,
          <StyledEsqueci key={"esqueci"} increment={increment} decrement={decrement}></StyledEsqueci>
       ]}
       itemsD={[
          <StyledImg
            key={"panel1"}
            TextoGiga="Bem - Vindo"
            TextoMini="Estamos felizes em te ver por aqui"
            onClick={increment}
            index={index}>
          </StyledImg>,
          <StyledImg
            key={"panel2"}
            TextoGiga="Bem - Vindo"
            TextoMini="Estamos felizes em te ver por aqui"
            onClick={increment}
            index={index}>
          </StyledImg>,
          <StyledImg
            key={"panel3"}    
            TextoGiga="Bem - Vindo"
            TextoMini="Estamos felizes em te ver por aqui"
            onClick={decrement}
            index={index}>
          </StyledImg>,

       ]}/>
    </>
    );
}

export default CompleteAuthFlipbook;

const StyledRegistro = styled(OrgRegistro)`
  width: 50%;
  height: 100%;
  border-bottom-left-radius: var(--radius-2xl);
  border-top-left-radius: var(--radius-2xl);
  position: relative;
`;

const StyledLogin = styled(OrgLogin)`
  width: 50%;
  height: 100%;
  border-bottom-left-radius: var(--radius-2xl);
  border-top-left-radius: var(--radius-2xl);
  position: relative;
`;

const StyledToaster = styled(Toaster)`
    background-color: var(--primary-foreground);
    color: var(--primary);
`;

const StyledEsqueci = styled(OrgEsqueci)`
  width: 50%;
  height: 100%;
  border-bottom-left-radius: var(--radius-2xl);
  border-top-left-radius: var(--radius-2xl);
  position: relative;
`;

const StyledImg = styled(OrgImg)`
  width: 50%;
  height: 100%;
  border-bottom-left-radius: var(--radius-2xl);
  border-top-left-radius: var(--radius-2xl);
  position: relative;
  margin-left: 50%;
`;

