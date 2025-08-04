'use client';
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import HomeClient from '@/components/home-client';
import Nav from '@/components/nav/nav';


const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });

export default function Home() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsAppLoaded(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isAppLoaded && (
  // @ts-expect-error Loading component type mismatch with isAppLoaded prop
  <Loading isAppLoaded={isAppLoaded} />
)}

      {isAppLoaded && (
        <Suspense fallback={null}>
            <Nav />

          <HomeClient />
        </Suspense>
      )}
    </>
  );
}
