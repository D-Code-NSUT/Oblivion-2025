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

      zIndexElements.forEach((element,index) => {
        element.style.zIndex = originalZindex[index]
      })
    }
  }, [])



  const popupContent = (
    <div
      ref={popupOverlayRef}
      onClick={closePopUp}
      className={`flex fixed inset-0 justify-center items-center backdrop-blur-lg bg-black/35 transition-opacity duration-200 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 2147483647 }}
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
        className={`bg-black flex flex-col p-3 md:p-4 rounded-lg gap-3 md:gap-4 max-h-[85vh] md:max-h-[80vh] w-full max-w-sm md:max-w-4xl mx-3 md:mx-4 overflow-y-auto scroll-smooth mt-16 md:mt-20 relative transition-opacity duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500`}
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
        <h1 className='text-2xl md:text-4xl font-semibold font-pirata tracking-wider mt-2 text-center text-white mb-2 md:mb-4'>{name}</h1>
        
        {/* Main content container */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full'>
          {/* Left side - Image */}
          <div className='flex-shrink-0 md:w-1/2'>
            <img className='rounded-lg w-full h-[200px] md:h-[400px] object-contain bg-gray-900' src={poster} alt={name || "Event poster"} />
          </div>
          
          {/* Right side - Details */}
          <div className='flex flex-col justify-center gap-4 md:gap-6 md:w-1/2'>
            {/* Date */}
            <div className='flex items-center gap-3 md:gap-4 text-white'>
              <div className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg'>
                <svg className='w-5 h-5 md:w-6 md:h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd' />
                </svg>
              </div>
              <div>
                <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium'>Date</div>
                <div className='text-lg md:text-xl font-semibold'>{date}</div>
              </div>
            </div>

            {/* Venue */}
            <div className='flex items-center gap-3 md:gap-4 text-white'>
              <div className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg flex-shrink-0'>
                <svg className='w-6 h-6 md:w-7 md:h-7 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                </svg>
              </div>
              <div className='flex-1'>
                <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium'>Venue</div>
                <div className='text-lg md:text-xl font-semibold'>{venue}</div>
              </div>
            </div>

            {/* Description */}
            <div className='flex items-start gap-3 md:gap-4 text-white'>
              <div className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full shadow-lg mt-1 flex-shrink-0'>
                <svg className='w-6 h-6 md:w-7 md:h-7 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z' clipRule='evenodd' />
                </svg>
              </div>
              <div className='flex-1'>
                <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium'>Description</div>
                <div className='text-base md:text-lg leading-relaxed text-gray-200 font-bold'>{description}</div>
              </div>
            </div>

            {/* Register button */}
            <div className=' flex justify-center'>
              <button className='bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg cursor-pointer text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95'>
                <Link href={RegistrationLink} className='flex items-center justify-center gap-2'>
                  <svg className='w-4 h-4 md:w-5 md:h-5 hidden md:block' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z' clipRule='evenodd' />
                  </svg>
                  Register Now
                </Link>
              </button>
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