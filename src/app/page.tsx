import { Suspense } from 'react';
import HomeClient from '@/components/home-client';
import About from '@/components/home/About.section';
import TimeLine from '@/components/timeline/timeline';
import JoinCommunity from '@/components/join-community/join-community';
export default function Home() {
  return (<>
    <Suspense fallback={<div>Loading...</div>}>
      <HomeClient />
    </Suspense>
    <About/>
    <TimeLine />
    <JoinCommunity />
    </>
  );
}
