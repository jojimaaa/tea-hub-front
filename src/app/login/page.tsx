"use client"
import Loginzada from '../../organisms/Loginzada';
import '../globals.css'
import OrgLogin from "../../organisms/OrgLogin"
import { useState } from "react";
import OrgRegistro from '../../organisms/OrgRegistro';
import OrgEsqueci from '../../organisms/OrgEsqueci';
import OrgImg from '../../organisms/OrgImg';

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
       <Loginzada index={index}
       itemsE={[
          <OrgRegistro className="w-[50%] h-[100%]" increment={increment} decrement={decrement}></OrgRegistro>,
          <OrgLogin className="w-[50%] h-[100%]" increment={increment} decrement={decrement}></OrgLogin>,
          <OrgEsqueci className="w-[50%] h-[100%]" increment={increment} decrement={decrement}></OrgEsqueci>
       ]}
       itemsD={[
          <OrgImg className="w-[50%] h-[100%] ml-[50%] rounded-br-2xl rounded-tr-2xl relative" 
            TextoGiga="Bem - Vindo"
            TextoMini="Estamos felizes em te ver por aqui"
            onClick={increment}
            index={index}>
          </OrgImg>,
          <OrgImg className="w-[50%] h-[100%] ml-[50%] rounded-br-2xl rounded-tr-2xl relative" 
            TextoGiga="Bem - Vindo"
            TextoMini="Estamos felizes em te ver por aqui"
            onClick={increment}
            index={index}>
          </OrgImg>,
          <OrgImg className="w-[50%] h-[100%] ml-[50%] rounded-br-2xl rounded-tr-2xl relative" 
            TextoGiga="Bem - Vindo"
            TextoMini="Estamos felizes em te ver por aqui"
            onClick={decrement}
            index={index}>
          </OrgImg>,

       ]}/>
    </div>

  );
}


export default LoginPage