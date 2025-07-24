import React from 'react'
import styles from './WhyToStep.module.css'

function WhyToStep() {
    return (
        <div id='WhyToStep' style={{ backgroundImage: `url("/why_to_step_into_oblivion-ship-bg.png")` }} className={`min-h-screen flex justify-center items-center flex-col gap-4 ${styles.darkBackground}`}>
            <div className={`${styles['pirata-one-regular']} text-[120px]`}>WHY TO STEP INTO OBLIVION</div>
            <div className='bg-white/10  backdrop-blur-md   w-full flex justify-center gap-3 py-16 px-3 border-t-2 border-t-[#5CE4FF] shadow-[0_0_20px_5px_#36B9C5] mt-7  '>

                <div className='flex flex-col relative items-center text-center gap-2 before:content-[""] before:bg-black before:p-[30px] before:border-[6px] before:border-[#5CE4FF] before:rounded-full before:absolute before:top-[-94px]'>
                    <h1 className='text-[#FFA02B] text-[30px] font-bold font-source'>Lorem, ipsum.</h1>
                    <div className='text-[23px] font-bold font-source'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et libero tempora possimus!</div>
                </div>

                <div className='flex flex-col relative items-center text-center gap-2 before:content-[""] before:bg-black before:p-[30px] before:border-[6px] before:border-[#5CE4FF] before:rounded-full before:absolute before:top-[-94px]'>
                    <h1 className='text-[#FFA02B] text-[30px] font-bold font-source'>Lorem, ipsum.</h1>
                    <div className='text-[23px] font-bold font-source'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et libero tempora possimus!</div>
                </div>

                <div className='flex flex-col relative items-center text-center gap-2 before:content-[""] before:bg-black before:p-[30px] before:border-[6px] before:border-[#5CE4FF] before:rounded-full before:absolute before:top-[-94px]'>
                    <h1 className='text-[#FFA02B] text-[30px] font-bold font-source'>Lorem, ipsum.</h1>
                    <div className='text-[23px] font-bold font-source'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et libero tempora possimus!</div>
                </div>

                <div className='flex flex-col relative items-center text-center gap-2 before:content-[""] before:bg-black before:p-[30px] before:border-[6px] before:border-[#5CE4FF] before:rounded-full before:absolute before:top-[-94px]'>
                    <h1 className='text-[#FFA02B] text-[30px] font-bold font-source'>Lorem, ipsum.</h1>
                    <div className='text-[23px] font-bold font-source'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et libero tempora possimus!</div>
                </div>



            </div>
        </div>
    )
}

export default WhyToStep