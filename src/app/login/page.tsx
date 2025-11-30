"use client"
import LoginRegisterFlipbook from '../../organisms/LoginRegisterFlipbook';
import '../globals.css'
import OrgLogin from "../../organisms/OrgLogin"
import { useState } from "react";
import OrgRegistro from '../../organisms/OrgRegistro';
import OrgEsqueci from '../../organisms/OrgEsqueci';
import OrgImg from '../../organisms/OrgImg';
import styled from 'styled-components';
import { Toaster } from '@/components/ui/sonner';

function LoginPage() {
  const [index, setIndex] = useState<number>(1);

  const increment = () => {
    setIndex(prev => (prev + 1));
  };

  const decrement = () => {
    setIndex(prev => (prev - 1)); 
  };

  return (
    <div className='flex items-center justify-center h-screen w-screen relative'>
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
    </div>

  );
}


export default LoginPage;

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

