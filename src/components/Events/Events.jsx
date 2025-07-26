import React, { useRef } from 'react'
import styles from './Events.module.css'
import EventCard from '@/components/EventCard/EventCard';

function Events() {
  const eventDetails = [
    {
      name: "Hackathon"
    },
    {
      name: "Ideathon"
    },
    {
      name: "AI Ideathon"
    },
    {
      name: "CP Contest"
    },
    {
      name: "ML Hackathon"
    },
    {
      name: "Useless Hackathon"
    }
  ]

  const eventCardsRef = useRef(null)

  const scrollLeft = () => {
    if (eventCardsRef.current) {
      eventCardsRef.current.scrollLeft -= 270
    }
  }
  const scrollRight = () => {
    if (eventCardsRef.current) {
      eventCardsRef.current.scrollLeft += 270
    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className={`${styles['pirata-one-regular']} text-[120px] text-[#36B9C5]`}>Events</h1>

      <div className='eventsContainer flex items-center gap-4'>
        <div
          onClick={scrollLeft}
          className='border-2 border-white/40 py-2 px-3 cursor-pointer hover:border-cyan-400 transition-colors'>
          <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
            <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>

        <div
          ref={eventCardsRef}
          style={{
            scrollbarWidth: 'none',
          }}
          className="eventCards flex  gap-5 max-w-[75vw]  overflow-x-auto overflow-y-visible flex-shrink-0 scroll-smooth py-8 px-4">
          {eventDetails.map((event,index) => (
            <EventCard key={index} name = {event.name}/>
          ))}

        </div>

        <div
          onClick={scrollRight}
          className='border-2 border-white/40 py-2 px-3 cursor-pointer hover:border-cyan-400 transition-colors'>
          <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Events