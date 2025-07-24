import React from 'react'
import Image from 'next/image';
function About() {
 const content = <>
    D'Code NSUT presents OBLIVION 2025, our flagship <span className='text-cyan-500'>Tech Summit</span> of the year. 
    It will bring together developers and tech innovators for a dynamic showcase of their technical skills. 
    From conceptualizing amazing ideas to building intelligent solutions, participants collaborate, compete, 
    and explore the frontiers of modern technology.
    <span className="block h-2 sm:h-4" />
    Rooted in the theme <span className='text-cyan-500'>'Gothic Pirate Punk'</span>-Gothic Pirate Punk is 
    a world of stormy seas, crumbling shipwrecks, and fog-drenched skies, where ghostly pirates roam 
    with rebellion in their bones, Oblivion’25 stands for bold expression, radical creativity, and 
    fearless pursuit.
    </>;
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center relative'>
        <Image
        className='absolute top-0 left-0 brightness-75 contrast-250 opacity-80'
            src="/image 23.png"
            alt="pspss"
            width={500}
            height={0}
            priority
        />
        <Image
        className='absolute top-100 left-0 brightness-75 contrast-250 opacity-80'
            src="/image 22.png"
            alt="pspss"
            width={500}
            height={0}
            priority
        />
        <Image
            className="block relative mx-auto mb-10 w-[60%] max-w-[300px] h-auto"
            src="/group-23.svg"
            alt="pspss"
            width={300}
            height={61}
            priority
        />
        <div className='mx-auto mt-4   border-cyan-400 border-2 rounded-2xl backdrop-blur-2xl bg-white/3 
        text-center 
        text-l sm:text-l md:text-xl lg:text-3xl 
        tracking-wider 
        leading-6 sm:leading-6 md:leading-6 lg:leading-10
        px-3 sm:px-3 md:px-5 lg:px-8 
        py-3 sm:py-3 md:py-4 lg:py-6 
        w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[80vw] ' 
        
        >
        
            {content}
        
        </div>
    </div>
  )
}

export default About;