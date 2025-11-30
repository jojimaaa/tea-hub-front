import CompleteAuthFlipbook from '@/organisms/CompleteAuthFlipbook';
import { Suspense } from 'react';

function LoginPage() {

  return (
    <div className='flex items-center justify-center h-screen w-screen relative'>
        <Suspense fallback={<>...</>}>
        <CompleteAuthFlipbook/>

        </Suspense>
    </div>

  );
}


export default LoginPage;