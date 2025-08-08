import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'


function ComingSoonPopUp({
    name,
    closePopUpFunction
}) {
    const popupOverlayRef = useRef(null)
    const popupRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const closePopUp = () => {
        if (closePopUpFunction) {
            closePopUpFunction()
        }
    }

    // Animation trigger
    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 5)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        // Store original overflow values
        const originalBodyOverflow = document.body.style.overflow
        const originalHtmlOverflow = document.documentElement.style.overflow

        document.body.style.overflow = "hidden"
        document.documentElement.style.overflow = "hidden"

        const preventDefault = (e) => {
            // Always prevent scrolling - popup will use stopPropagation to override
            e.preventDefault()
            e.stopPropagation()
            return false
        }

        const zIndexElements = document.querySelectorAll('#WhyToStep, #join-community')
        const originalZindex = []

        zIndexElements.forEach((element) => {
            originalZindex.push(element.style.zIndex)
            element.style.zIndex = "1"
        })

        const handleEscape = (e) => {
            if (e.key == "Escape") {
                closePopUp()
            }
        }

        // ✅ Add these listeners to prevent background scrolling
        document.addEventListener('wheel', preventDefault, { passive: false })
        document.addEventListener('touchmove', preventDefault, { passive: false })
        document.addEventListener('keydown', handleEscape, { passive: false })

        return () => {
            document.removeEventListener('wheel', preventDefault, { passive: false })
            document.removeEventListener('touchmove', preventDefault, { passive: false })
            document.removeEventListener('keydown', handleEscape, { passive: false })

            // Restore original overflow values
            document.body.style.overflow = originalBodyOverflow
            document.documentElement.style.overflow = originalHtmlOverflow

            zIndexElements.forEach((element, index) => {
                element.style.zIndex = originalZindex[index]
            })
        }
    }, [])



    const popupContent = (
        <div
            ref={popupOverlayRef}
            onClick={closePopUp}
            className={` flex fixed inset-0 justify-center items-center backdrop-blur-lg bg-black/35 transition-opacity duration-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                } z-[99999]`}

        >

            <div
                ref={popupRef}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}

                style={{
                    scrollbarWidth: 'auto',
                    scrollbarColor: '#4B5563 #1F2937',
                }}
                className={` bg-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col p-4 md:p-8 rounded-3xl gap-2 md:gap-4 h-[50vh] md:h-[85vh] w-[95%] md:w-full max-w-sm md:max-w-4xl overflow-y-auto md:overflow-hidden scroll-smooth transition-opacity duration-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                    } [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500 border-2 border-[#5CE4FF] z-[999999]`}
            >
                {/* Close button - works for both mobile and desktop */}
                <button
                    onClick={closePopUp}
                    className="fixed top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 cursor-pointer transition-all duration-300 w-10 h-10 rounded-lg hover:bg-white/20 hover:backdrop-blur-md hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 z-30"
                    aria-label="Close popup"
                >
                    {/* Cross text */}
                    <span className="text-white text-lg font-bold flex items-center justify-center h-full w-full">
                        ✕
                    </span>
                </button>

                <h1 className=' font-semibold font-pirata tracking-wider mt-1 text-center text-[#36B9C5] text-[45px] md:text-[70px]'>{name}</h1>

                <div className='font-pirata h-full w-full flex justify-center items-center text-3xl lg:text-6xl'>
                    Coming Soon!!!
                </div>
            </div>
        </div>
    )

    // Portal rendering with SSR safety
    return typeof document !== 'undefined' ? createPortal(popupContent, document.body) : null
}

export default ComingSoonPopUp