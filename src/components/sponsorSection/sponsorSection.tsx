import React from 'react'
import { SponsorData, sponsorsData} from '../../data/sponsorData/homeSponsorsData'
import Image from 'next/image'

function sponorCard(sponsorData:SponsorData,index:number,priority:number){
    return(
    <div className={` ${
        priority==1? 'my-4 w-[34vw]': 
        priority==2? 'my-4 w-[26vw]':
        priority==3? 'my-3 w-[20vw]':'my-3 w-[15vw]'
    }`} key={index}>
        <div className={`bg-cyan-900/30 pb-2  drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] flex flex-col h-full relative justify-between ${
            priority==1?'w-[25vw] ':
            priority==2?'w-[20vw]':
            priority==3?'min-w-[15vw] md:min-w-[15vw] lg:min-w-[15vw] px-3 pb-3 pt-5':'min-w-[80%] max-w-[90%] px-3 pb-3 pt-5'} overflow-hidden  mx-auto rounded-3xl border-cyan-700 border-3 items-center`}>    
            
            <Image
                src="/sponsiBcg.png"
                alt="Decorative background"
                fill
                className="opacity-50 object-contain"
                quality={100}
            />
            
            { priority<3 && <div className={`title drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] font-bold  md:text-xl lg:text-xl z-10 w-full lg:w-fit text-center mb-3 px-4 py-1 border-b-3 border-cyan-700 md:border-3 md:border-t-0 lg:border-3 lg:border-t-0 bg-cyan-950/80 ${'md:rounded-b-xl'} lg:rounded-b-xl`}>{sponsorData.title||"Title Sponsor"}</div>}
            <Image  className='mx-auto z-10 hover: w-[100%] md:w-[70%] h-auto lg:w-[50%] drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]' src={'/oblivion.png'} alt={sponsorData.name||""} quality={100} width={800} height={800}/>
            {/*<div className='w-[90%] my-1 text-center name px-1 z-10 '>{sponsorData.name}</div>*/}
        </div>
    </div>)
}

function SponsorSection() {
  
    return (
        <div className={`h-fit w-full pt-50 bg-repeat-y lg:bg-[length:100%_auto] bg-[url(/homeSponsiBcg.png)]`}>
            <Image
                        className="block relative mx-auto mb-4 w-[70%] max-w-[700] h-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                        src="/sponsi-title.png"
                        alt="pspss"
                        width={300}
                        height={61}
                        priority
                        
                    />
            <div className='flex py-10 flex-wrap-reverse px-5  items-stretch  justify-center content-around'>
                {sponsorsData.top.map((sponsorData,index)=>sponorCard(sponsorData,index,1))}
            </div>

            <div className='flex py-10 flex-wrap-reverse px-7   items-stretch  justify-center content-around'>
                {sponsorsData.second.map((sponsorData,index)=>sponorCard(sponsorData,index,2))}
            </div>

            <div className='flex py-5 flex-wrap-reverse  gap-5 lg:gap-5 items-stretch  justify-center content-around'>
                {sponsorsData.third.map((sponsorData,index)=>sponorCard(sponsorData,index,3))}
            </div>

            <div className='flex py-5 items-stretch flex-wrap-reverse  lg:gap-5  justify-center content-around'>
                {sponsorsData.last.map((sponsorData,index)=>sponorCard(sponsorData,index,4))}
            </div>
        </div>
    )
}

export default SponsorSection;