import React, { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { createPortal } from 'react-dom'

function EventDetailsPopup({
  name,
  date,
  description,
  venue,
  RegistrationLink,
  poster,
  closePopUpFunction,
  isVisible: externalIsVisible = false
}) {
  const popupOverlayRef = useRef(null)
  const popupRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(true) // Always render, control visibility differently

  const closePopUp = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      setIsOpen(false)
      if (closePopUpFunction) {
        closePopUpFunction()
      }
    }, 200)
  }, [closePopUpFunction])

  // Handle external visibility changes
  useEffect(() => {
    if (externalIsVisible) {
      setIsOpen(true)
      const timer = setTimeout(() => setIsVisible(true), 10)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [externalIsVisible])

  // Handle body scroll lock and cleanup - only when visible
  useEffect(() => {
    if (!isVisible) return

    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow

    // Lock body scroll
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    const preventDefault = (e) => {
      e.preventDefault()
      e.stopPropagation()
      return false
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closePopUp()
      }
    }

    // Get elements to adjust z-index
    const zIndexElements = document.querySelectorAll('#WhyToStep, #join-community')
    const originalZindex = Array.from(zIndexElements).map(el => el.style.zIndex)

    zIndexElements.forEach((element) => {
      element.style.zIndex = "1"
    })

    // Add event listeners
    document.addEventListener('wheel', preventDefault, { passive: false })
    document.addEventListener('touchmove', preventDefault, { passive: false })
    document.addEventListener('keydown', handleEscape)

    return () => {
      // Cleanup event listeners
      document.removeEventListener('wheel', preventDefault)
      document.removeEventListener('touchmove', preventDefault)
      document.removeEventListener('keydown', handleEscape)

      // Restore original styles
      document.body.style.overflow = originalBodyOverflow
      document.documentElement.style.overflow = originalHtmlOverflow

      // Restore original z-index
      zIndexElements.forEach((element, index) => {
        element.style.zIndex = originalZindex[index] || ''
      })
    }
  }, [closePopUp, isVisible])



  const popupContent = (
    <div
      ref={popupOverlayRef}
      onClick={closePopUp}
      className={`fixed inset-0 flex justify-center items-center backdrop-blur-lg bg-black/35 transition-opacity duration-200 ease-out z-[99999] ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={popupRef}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        className={`bg-black flex flex-col p-4 md:p-8 rounded-3xl gap-4 max-h-[90vh] md:max-h-[85vh] w-[95%] md:w-full max-w-sm md:max-w-5xl overflow-y-auto scroll-smooth transition-all duration-200 ease-out border-2 border-[#5CE4FF] relative ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4B5563 #1F2937',
        }}
      >
        {/* Close button */}
        <button
          onClick={closePopUp}
          className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 cursor-pointer transition-all duration-300 w-10 h-10 rounded-lg hover:bg-white/20 hover:backdrop-blur-md hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 z-30"
          aria-label="Close popup"
          type="button"
        >
          <span className="text-white text-lg font-bold flex items-center justify-center h-full w-full">
            ✕
          </span>
        </button>

        {/* Title */}

        {/* Main content container */}
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:h-full lg:max-h-[calc(85vh-8rem)]'>
          {/* Left side - Image */}
          <div className='flex-shrink-0 lg:w-1/2 lg:sticky lg:top-0'>
            <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] rounded-lg overflow-hidden">
              <Image 
                className='object-contain w-full h-full' 
                src={poster} 
                alt={name || "Event poster"} 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={true}
                loading="eager"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R6/i"
              />
            </div>
          </div>

          {/* Right side - Details */}
          <div className='flex flex-col justify-start gap-4 flex-1 lg:overflow-y-auto lg:max-h-full lg:pr-2'
               style={{
                 scrollbarWidth: 'none',
                 msOverflowStyle: 'none',
               }}
          >
            <h1 className='font-semibold font-pirata tracking-wider text-center text-[#36B9C5] text-[32px] md:text-[45px] lg:text-[60px] leading-tight'>{name}</h1>

            {/* Event Details */}
            <div className="space-y-4">
              {/* Date */}
              <div className='flex items-center gap-3 text-white'>
                <div className="flex-shrink-0">
                  <Image 
                    src="/Calender.svg" 
                    alt="Date" 
                    className='w-12 h-12 md:w-16 md:h-16' 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className='text-lg md:text-xl font-semibold'>{date}</div>
              </div>

              {/* Venue */}
              <div className='flex items-center gap-3 text-white'>
                <div className="flex-shrink-0">
                  <Image 
                    src="/Location.svg" 
                    alt="Location" 
                    className='w-12 h-12 md:w-16 md:h-16' 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className='text-lg md:text-xl font-semibold flex-1'>{venue}</div>
              </div>

              {/* Description */}
              <div className='flex items-start gap-3 text-white'>
                <div className="flex-shrink-0">
                  <Image 
                    src="/Description.svg" 
                    alt="Description" 
                    className='w-12 h-12 md:w-16 md:h-16' 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className='text-base md:text-lg leading-relaxed text-gray-200 font-medium flex-1'>{description}</div>
              </div>
            </div>

            {/* Register button */}
            <div className='flex justify-center mt-6'>
              <Link
                href={RegistrationLink}
                target='_blank'
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  className='relative bg-cyan-500 border-none p-0 cursor-pointer transition-all duration-300 w-[200px] h-[48px] overflow-hidden shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,191,255,0.8)] active:scale-95'
                  style={{
                    clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)'
                  }}
                  type="button"
                >
                  {/* Inner black background */}
                  <div
                    className='absolute top-[3px] left-[9px] right-[9px] bottom-[3px] bg-black z-10'
                    style={{
                      clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)'
                    }}
                  ></div>

                  {/* Button text */}
                  <span className='relative z-20 text-white text-[15px] font-semibold uppercase tracking-wider flex items-center justify-center h-full font-sans shadow-[0_0_8px_rgba(0,191,255,0.6)]'>
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

  // Portal rendering with SSR safety - Always render but control visibility
  return typeof document !== 'undefined' && isOpen ? createPortal(popupContent, document.body) : null
}

export default EventDetailsPopup