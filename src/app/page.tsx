'use client';
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import HomeClient from '@/components/home-client';


const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });

export default function Home() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsAppLoaded(true);
    }, 3500);

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
          <HomeClient />
        </Suspense>
      )}
    </>
  );
}
