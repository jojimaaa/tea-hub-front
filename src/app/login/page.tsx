"use client"
import LoginRegisterFlipbook from '../../organisms/LoginRegisterFlipbook';
import '../globals.css'
import OrgLogin from "../../organisms/OrgLogin"
import { useState } from "react";
import OrgRegistro from '../../organisms/OrgRegistro';
import OrgEsqueci from '../../organisms/OrgEsqueci';
import OrgImg from '../../organisms/OrgImg';
import styled from 'styled-components';

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
       <LoginRegisterFlipbook 
       index={index}
       itemsE={[
          <StyledRegistro increment={increment} decrement={decrement}></StyledRegistro>,
          <StyledLogin increment={increment} decrement={decrement}></StyledLogin>,
          <StyledEsqueci increment={increment} decrement={decrement}></StyledEsqueci>
       ]}
       itemsD={[
          <StyledImg
            TextoGiga="Bem - Vindo"
            TextoMini="Estamos felizes em te ver por aqui"
            onClick={increment}
            index={index}>
          </StyledImg>,
          <StyledImg
            TextoGiga="Bem - Vindo"
            TextoMini="Estamos felizes em te ver por aqui"
            onClick={increment}
            index={index}>
          </StyledImg>,
          <StyledImg
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

