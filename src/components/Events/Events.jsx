import React, { useRef, useState, useEffect } from 'react'
import styles from './Events.module.css'
import EventCard from '@/components/EventCard/EventCard';
import useEventDetails from '@/hooks/useEventDetails';

function Events() {
  const eventDetails = useEventDetails()
  const eventCardsRef = useRef(null)
  const eventsContainerRef = useRef(null) // Ref for intersection observer
  const [isHovered, setIsHovered] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  // const [animationDirection, setAnimationDirection] = useState(1) // 1 for right, -1 for left
  // const [isReturning, setIsReturning] = useState(false) // For high-speed return
  const [hasEntrance, setHasEntrance] = useState(false) // For entrance animation
  const [isMounted, setIsMounted] = useState(false) // For hydration safety
  // const [isPaused, setIsPaused] = useState(false) // For pause at the end
  const [isManualScrolling, setIsManualScrolling] = useState(false) // For arrow button pause

  // Use duplicated events array for infinite scrolling
  const events = [...eventDetails, ...eventDetails, ...eventDetails] // Triple the events for smoother infinite scroll

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Entrance animation effect - triggered when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasEntrance) {
            // Delay the animation slightly for better effect
            setTimeout(() => {
              setHasEntrance(true)
            }, 200)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when only 10% of the element is visible (earlier)
        rootMargin: '0px 0px -50px 0px' // Trigger even earlier - less negative margin
      }
    )

    if (eventsContainerRef.current) {
      observer.observe(eventsContainerRef.current)
    }

    return () => {
      if (eventsContainerRef.current) {
        observer.unobserve(eventsContainerRef.current)
      }
    }
  }, [hasEntrance])

  useEffect(() => {
    const container = eventCardsRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth
      
      // More accurate calculation based on actual container width
      const containerWidth = container.clientWidth
      const totalWidth = container.scrollWidth
      const singleSetWidth = totalWidth / 3 // Since we have 3 copies of events

      setScrollPosition(scrollLeft)

      // Reset scroll position for infinite effect - more precise logic
      if (scrollLeft >= singleSetWidth * 2 - 10) {
        // When near the end of second set, jump to start of first set
        container.scrollLeft = singleSetWidth
      } else if (scrollLeft <= 10) {
        // When near the beginning, jump to start of second set
        container.scrollLeft = singleSetWidth
      }

      // Comment out the return animation logic
      // // Check if we've reached the end (last card fully visible)
      // if (scrollLeft >= maxScroll - 10 && !isReturning && !isPaused) {
      //   setIsPaused(true) // Pause at the end
      //   setTimeout(() => {
      //     setIsPaused(false)
      //     setIsReturning(true) // Start high-speed return
      //     setAnimationDirection(-1) // Change to left direction
      //   }, 2000) // 2 second pause before returning
      // } else if (scrollLeft <= 10 && isReturning) {
      //   setIsReturning(false) // End high-speed return
      //   setAnimationDirection(1) // Change to right direction
      // }
    }

    // Auto-scroll animation for infinite scrolling
    const autoScroll = () => {
      // Don't start auto-scroll until entrance animation is complete and not manually scrolling
      if (!isHovered && !isManualScrolling && container && hasEntrance) {
        container.scrollLeft += 2.5 // Increased speed for infinite scroll
      }

      // Comment out the directional animation logic
      // // Don't start auto-scroll until entrance animation is complete
      // if (!isHovered && container && hasEntrance && !isPaused) {
      //   const currentScroll = container.scrollLeft
      //   const maxScroll = container.scrollWidth - container.clientWidth

      //   if (animationDirection === 1) {
      //     // Moving right (normal speed)
      //     if (currentScroll >= maxScroll - 1) {
      //       // This will be handled by handleScroll function
      //     } else {
      //       container.scrollLeft += 1.5 // Normal speed
      //     }
      //   } else {
      //     // Moving left
      //     if (isReturning) {
      //       // High-speed return to original position
      //       if (currentScroll <= 1) {
      //         setIsReturning(false)
      //         setAnimationDirection(1)
      //       } else {
      //         container.scrollLeft -= 8 // Very high speed for return
      //       }
      //     } else {
      //       // This case shouldn't happen with new logic, but keeping for safety
      //       if (currentScroll <= 1) {
      //         setAnimationDirection(1)
      //       } else {
      //         container.scrollLeft -= 1.5
      //       }
      //     }
      //   }
      // }
    }

    const scrollInterval = setInterval(autoScroll, 25) // Consistent interval for smooth infinite scroll
    container.addEventListener('scroll', handleScroll)

    // Set initial scroll position to middle section (start of second set)
    setTimeout(() => {
      if (hasEntrance && container.scrollLeft <= 10) {
        const totalWidth = container.scrollWidth
        const singleSetWidth = totalWidth / 3
        container.scrollLeft = singleSetWidth
      }
    }, 100) // Small delay to ensure container is properly rendered

    return () => {
      clearInterval(scrollInterval)
      container.removeEventListener('scroll', handleScroll)
    }
  }, [isHovered, isManualScrolling, hasEntrance, eventDetails.length]) // Added isManualScrolling dependency

  const scrollLeft = () => {
    if (eventCardsRef.current) {
      setIsManualScrolling(true)
      eventCardsRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      })
      // Resume auto-scroll after animation completes
      setTimeout(() => {
        setIsManualScrolling(false)
      }, 500)
    }
  }
  const scrollRight = () => {
    if (eventCardsRef.current) {
      setIsManualScrolling(true)
      eventCardsRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      })
      // Resume auto-scroll after animation completes
      setTimeout(() => {
        setIsManualScrolling(false)
      }, 500)
    }
  }

  return (
    <div ref={eventsContainerRef} className='min-h-screen flex flex-col justify-center items-center relative pb-8'>
      <div className='w-full flex flex-col items-center relative z-10 px-4'>
        <h1 
          className={`text-[60px] md:text-[120px] text-[#36B9C5] mb-2 md:mb-4 text-center ${isMounted ? styles['pirata-one-regular'] : ''}`}
          suppressHydrationWarning
        >
          Events
        </h1>

        <div className='eventsContainer flex items-center gap-2 md:gap-4 w-full justify-center max-w-7xl'>
          {/* Left Arrow - Hidden on mobile */}
          <div
            onClick={scrollLeft}
            className='hidden md:block border-2 border-white/40 py-2 px-3 cursor-pointer hover:border-cyan-400 transition-colors'>
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
              <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>

          {/* Events Container */}
          <div className='relative w-full max-w-[90vw] md:max-w-[75vw] overflow-hidden min-w-[320px] md:min-w-[600px]'>
            {/* Left gradient overlay */}
            <div className='absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-slate-900/90 via-slate-800/40 to-transparent z-10 pointer-events-none'></div>

            {/* Right gradient overlay */}
            <div className='absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-slate-900/90 via-slate-800/40 to-transparent z-10 pointer-events-none'></div>

            <div
              ref={eventCardsRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                scrollbarWidth: 'none',
              }}
              className={`eventCards flex gap-3 md:gap-5 overflow-x-auto overflow-y-visible flex-shrink-0 py-4 md:py-8 px-2 md:px-4 min-h-[320px] md:min-h-[450px] transition-transform duration-1000 ease-out ${hasEntrance ? 'translate-x-0' : '-translate-x-full'}`}
            >
              {events.map((event, index) => (
                <div 
                  key={`${event.name}-${index}`} 
                  className={`flex-shrink-0 transition-all duration-1000 ease-out ${hasEntrance ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <EventCard name={event.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <div
            onClick={scrollRight}
            className='hidden md:block border-2 border-white/40 py-2 px-3 cursor-pointer hover:border-cyan-400 transition-colors'>
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
              <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events