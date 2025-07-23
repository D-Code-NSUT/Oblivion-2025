import { Suspense } from 'react';
import HomeClient from '@/components/home-client';
import About from '@/components/home/About.section';
export default function Home() {
  return (<>
    <Suspense fallback={<div>Loading...</div>}>
      <HomeClient />
    </Suspense>
    <About/>
    </>
  );
}
