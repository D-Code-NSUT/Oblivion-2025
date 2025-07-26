import React from 'react'
import styles from './EventCard.module.css'
import { useState } from 'react'

function EventCard({
    name
}) {
    const [isCardHovered, setisCardHovered] = useState(false)

    return (
        <div 
        onMouseEnter={() => setisCardHovered(true)}
        onMouseLeave={() => setisCardHovered(false)}
        className='card bg-white flex flex-col items-center justify-center gap-2 w-[250px] h-[390px] relative hover:shadow-[0_0_40px_rgba(0,191,255,0.9),0_0_80px_rgba(0,191,255,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden flex-shrink-0 rounded-lg'>
            <h1 className={`${styles.baskervville} text-black text-[40px]`}>{name}</h1>

            {/* Custom hexagonal View Details button with Tailwind */}
            <div className={ `${isCardHovered ? "block" : "hidden"} transition-all duration-300 absolute bottom-5 left-1/2 transform -translate-x-1/2`}>
                <button
                    className='relative bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 border-none p-0 cursor-pointer transition-all duration-300 w-[200px] h-[48px] overflow-hidden shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,191,255,0.8)] active:scale-95'
                    style={{
                        clipPath: 'polygon(18px 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 18px 100%, 0% 50%)'
                    }}
                >
                    {/* Inner black background */}
                    <div
                        className='absolute top-[3px] left-[9px] right-[9px] bottom-[3px] bg-black z-10'
                        style={{
                            clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)'
                        }}  
                    ></div>

                    {/* Button text */}
                    <span className='relative z-20 text-white text-[15px] font-semibold uppercase tracking-wider flex items-center justify-center h-full font-sans shadow-[0_0_8px_rgba(0,191,255,0.6)]'>
                        View Details
                    </span>
                </button>
            </div>
        </div>
    )
}

export default EventCard