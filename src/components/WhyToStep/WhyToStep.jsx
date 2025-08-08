import React, { useEffect, useRef, useState } from 'react'
import styles from './WhyToStep.module.css'

function WhyToStep() {

    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                let elementRect = elementRef.current.getBoundingClientRect()
                const windowHeight = window.innerHeight

                // Perfect values for clear reveal and fade animations
                if (elementRect.top < windowHeight * 0.80 && elementRect.bottom > windowHeight * 0.40) {
                    setIsVisible(true)
                }

            }
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])


    return (
        <>

            <div id='WhyToStep' 
                style={{ 
                    backgroundImage: `url("/why_to_step_into_oblivion-ship-bg.png")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    
                }}
                className={`min-h-screen flex justify-center  flex-col gap-0 lg:gap-4 ${styles.darkBackground} py-11 relative`}>
                <div className={`${styles['pirata-one-regular']} text-[#36B9C5] text-center text-[50px] md:text-[70px] lg:text-[100px] xl:text-[120px]`}>WHY TO STEP INTO OBLIVION</div>
                <div
                    ref={elementRef}
                    className={`${isVisible ? styles.revealContainer : ""}`}>

                    <div className='lg:bg-white/10  lg:backdrop-blur-md   w-full flex justify-center py-7   lg:py-16 px-7  lg:border-t-2 lg:border-t-[#5CE4FF] lg:border-b-1 lg:border-b-[#5CE4FF] lg:shadow-[0_0_15px_3px_#36B9C5] mt-0 lg:mt-7  opacity-0'>

                        <div className=' w-[90%] sm:w-[90%] mx-auto lg:w-full flex-wrap lg:flex-nowrap flex  gap-5 border-l-2 lg:border-l-0 py-2 lg:py-0 border-l-[#5CE4FF] shadow-[-10px_0_10px_-3px_#36B9C5] lg:shadow-none '>

                            <div className='flex flex-col relative items-start px-8 lg:px-0 lg:items-center text-center gap-2 before:content-[""] before:bg-black before:p-[15px] lg:before:p-[30px] before:border-[6px] before:border-[#5CE4FF] before:rounded-full before:absolute lg:before:top-[-94px] lg:before:left-[40%] before:top-0 before:left-[-22px] '>
                                <h1 className='text-[#FFA02B] text-[20px] lg:text-[30px] font-bold font-source  text-left lg:text-center'>Access Powerful Mentorship & Hands-On Learning
                                </h1>
                                <div className='text-[15px] lg:text-[23px] font-bold font-source text-left lg:text-center'>Join exciting offline workshops, challenges, and activities while getting one-on-one guidance from industry pros. Sharpen your skills, refine your ideas, and learn by doing.
                                </div>
                            </div>

                            <div className='flex flex-col relative items-start px-8 lg:px-0 lg:items-center text-center gap-2 before:content-[""] before:bg-black before:p-[15px] lg:before:p-[30px] before:border-[6px] before:border-[#5CE4FF] before:rounded-full before:absolute lg:before:top-[-94px] lg:before:left-[40%] before:top-0 before:left-[-22px] '>
                                <h1 className='text-[#FFA02B] text-[20px] lg:text-[30px] font-bold font-source text-left lg:text-center'>Build Your Tribe
                                </h1>
                                <div className='text-[15px] lg:text-[23px] font-bold font-source text-left lg:text-center'>Connect with fellow innovators, creators, and tech geeks. Expand your network and grow with a vibrant community.
                                </div>
                            </div>

                            <div className='flex flex-col relative items-start px-8 lg:px-0 lg:items-center text-center gap-2 before:content-[""] before:bg-black before:p-[15px] lg:before:p-[30px] before:border-[6px] before:border-[#5CE4FF] before:rounded-full before:absolute lg:before:top-[-94px] lg:before:left-[40%] before:top-0 before:left-[-22px] '>
                                <h1 className='text-[#FFA02B] text-[20px] lg:text-[30px] font-bold font-source text-left lg:text-center'>Win Big – ₹1,50,000 Prize Pool
                                </h1>
                                <div className='text-[15px] lg:text-[23px] font-bold font-source text-left lg:text-center'>Show off your creativity and compete for a prize pool worth ₹1.5 Lakhs. Hustle hard, win big
                                </div>
                            </div>

                            <div className='flex flex-col relative items-start px-8 lg:px-0 lg:items-center text-center gap-2 before:content-[""] before:bg-black before:p-[15px] lg:before:p-[30px] before:border-[6px] before:border-[#5CE4FF] before:rounded-full before:absolute lg:before:top-[-94px] lg:before:left-[40%] before:top-0 before:left-[-22px] '>
                                <h1 className='text-[#FFA02B] text-[20px] lg:text-[30px] font-bold font-source text-left lg:text-center'>Bring Your Ideas to Life
                                </h1>
                                <div className='text-[15px] lg:text-[23px] font-bold font-source text-left lg:text-center'>Got a brilliant idea? Pitch it to us and get real support from the college to turn it into reality.This is your opportunity to solve real world problems and convert it into a startup</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyToStep