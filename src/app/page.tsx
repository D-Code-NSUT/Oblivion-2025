import { Suspense } from 'react';
import HomeClient from '@/components/home-client';
import Loading from '@/components/loading/Loading';
// import About from '@/components/home/About.section';
// import TimeLine from '@/components/timeline/timeline';
// import JoinCommunity from '@/components/join-community/join-community';


// do not make changes to this file, it is used to render the home page
// check out home-client.tsx for the actual home page component

export default function Home() {
  return (<>
    <Suspense fallback={<Loading />}>
      <HomeClient />
    </Suspense>
    {/* <About/>
    <TimeLine />
    <JoinCommunity /> */}
    </>
  );
}
