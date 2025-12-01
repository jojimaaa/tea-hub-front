"use client"
import CompleteAuthFlipbook from '@/organisms/CompleteAuthFlipbook';
import { Suspense } from 'react';
import styled from 'styled-components';

function LoginPage() {

  return (
    <Background className='flex items-center justify-center h-screen w-screen relative'>
        <Suspense fallback={<>...</>}>
            <CompleteAuthFlipbook/>
        </Suspense>
    </Background>

  );
}

const Background = styled.div`
    background: linear-gradient(90deg, var(--purple-light2), var(--purple-light1));
`;

export default LoginPage;