import React from 'react'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'


function EventDetailsPopup({
  name,
  date,
  description,
  venue,
  RegistrationLink,
  poster,
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

      <div className='w-full h-[20vh] bg-gradient-to-r from'>

      </div>

      <div
        ref={popupRef}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}

        style={{
          scrollbarWidth: 'auto',
          scrollbarColor: '#4B5563 #1F2937',
        }}
        className={`bg-black absolute top-[17%] mx-auto flex flex-col p-8 rounded-3xl gap-3 md:gap-4 max-h-[85vh] md:max-h-[80vh] w-full max-w-sm md:max-w-4xl  overflow-y-auto scroll-smooth transition-opacity duration-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
          } [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500 border-2 border-[#5CE4FF] z-[999999]`}
      >
        {/* Close button */}
        <button
          onClick={closePopUp}
          className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 cursor-pointer transition-all duration-300 w-10 h-10 rounded-lg hover:bg-white/20 hover:backdrop-blur-md hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 z-10"
          aria-label="Close popup"
        >
          {/* Cross text */}
          <span className="text-white text-lg font-bold flex items-center justify-center h-full w-full">
            ✕
          </span>
        </button>

        {/* Title */}

        {/* Main content container */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full '>
          {/* Left side - Image */}
          <div className='flex-shrink-0 md:w-1/2'>
            <img className='rounded-lg w-full h-[200px] md:h-[430px] object-contain bg-gray-900' src={poster} alt={name || "Event poster"} />
          </div>

          {/* Right side - Details */}
          <div className='flex flex-col justify-center gap-2 '>
            <h1 className=' font-semibold font-pirata tracking-wider mt-2 text-center text-[#36B9C5] text-[70px]'>{name}</h1>

            {/* Date */}
            <div className='flex items-center gap-3 md:gap-4 text-white'>
              <img src="/Calender.svg" alt="" className='w-[67px] h-[67px]' />
              <div>

                <div className='text-lg md:text-xl font-semibold'>{date}</div>
              </div>
            </div>

            {/* Venue */}
            <div className='flex items-center gap-3 md:gap-4 text-white'>

              <img src="/Location.svg" alt="" className='w-[67px] h-[67px]' />

              <div className='flex-1'>
                <div className='text-lg md:text-xl font-semibold'>{venue}</div>
              </div>
            </div>

            {/* Description */}
            <div className='flex items-center  gap-3 md:gap-4 text-white'>

              <img src="/Description.svg" alt="" className='w-[67px] h-[67px]' />

              <div className='flex-1'>
                <div className='text-base md:text-lg leading-relaxed text-gray-200 font-bold'>{description}</div>
              </div>
            </div>

            {/* Register button */}
            <div className=' flex justify-center mt-6'>
              <Link
                href={RegistrationLink}
              >
                <button
                  className='relative bg-cyan-500 border-none p-0 cursor-pointer transition-all duration-300 w-[140px] md:w-[200px] h-[36px] md:h-[48px] overflow-hidden shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,191,255,0.8)] active:scale-95'
                  style={{
                    clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)'
                  }}
                >
                  {/* Inner black background */}
                  <div
                    className='absolute top-[2px] md:top-[3px] left-[6px] md:left-[9px] right-[6px] md:right-[9px] bottom-[2px] md:bottom-[3px] bg-black z-10'
                    style={{
                      clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)'
                    }}
                  ></div>

                  {/* Button text */}
                  <span className='relative z-20 text-white text-[12px] md:text-[15px] font-semibold uppercase tracking-wider flex items-center justify-center h-full font-sans shadow-[0_0_8px_rgba(0,191,255,0.6)]'>
                    Register Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Portal rendering with SSR safety
  return typeof document !== 'undefined' ? createPortal(popupContent, document.body) : null
}

export default EventDetailsPopup