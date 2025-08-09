import React from 'react'
import styles from './EventCard.module.css'
import { useState } from 'react'
import useEventDetails from '@/hooks/useEventDetails';
import EventDetailsPopup from '../EventDetailsPopup/EventDetailsPopup';
import ComingSoonPopUp from '../ComingSoonPopUp/ComingSoonPopUp';

function EventCard({
    name
}) {
    const [isCardHovered, setisCardHovered] = useState(false)
    const [showPopup, setshowPopup] = useState(false)

    const eventDetails = useEventDetails()

    let eventDetail = eventDetails.find((event) => event.name == name)

    // If event detail is not found, don't render the popup
    if (!eventDetail) {
        return null;
    }

    const viewDetails = () => setshowPopup(true)
    const closePopup = () => setshowPopup(false)

    // Debug logging
    console.log('EventCard:', name, 'backgroundImage:', eventDetail.backgroundImage)
    console.log('Full background style:', eventDetail.backgroundImage 
        ? `url(${eventDetail.backgroundImage}) center/cover no-repeat` 
        : 'white')

    return (
        <>

            <div
                onMouseEnter={() => setisCardHovered(true)}
                onMouseLeave={() => setisCardHovered(false)}
                className={`card flex flex-col items-center justify-center gap-1 w-[180px] md:w-[250px] h-[280px] md:h-[400px] relative hover:shadow-[0_0_40px_rgba(0,191,255,0.9),0_0_80px_rgba(0,191,255,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden flex-shrink-0 rounded-lg ${!eventDetail.backgroundImage ? 'bg-white' : ''}`}
                style={{
                    background: eventDetail.backgroundImage 
                        ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${eventDetail.backgroundImage}) center/contain no-repeat` 
                        : 'white',
                    minHeight: '280px'
                }}
            >
                <h1 className={`${styles.baskervville} ${eventDetail.backgroundImage ? 'text-white' : 'text-black'} text-[28px] md:text-[40px] relative z-10`}>{name}</h1>

                {/* Custom hexagonal View Details button with Tailwind */}
                <div className={`${isCardHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out absolute bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 z-20`}>
                    <button
                        onClick={viewDetails}
                        className='relative bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 border-none p-0 cursor-pointer transition-all duration-300 w-[140px] md:w-[200px] h-[36px] md:h-[48px] overflow-hidden shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,191,255,0.8)] active:scale-95'
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
                            View Details
                        </span>
                    </button>
                </div>
            </div>

            {/* Always render popup for preloading - control visibility internally */}
            {eventDetail.state ? (
                showPopup && (
                    <ComingSoonPopUp 
                        name={eventDetail.name}
                        closePopUpFunction={closePopup}
                    />
                )
            ) : (
                <EventDetailsPopup
                    name={eventDetail.name}
                    date={eventDetail.date}
                    description={eventDetail.description}
                    venue={eventDetail.venue}
                    RegistrationLink={eventDetail.RegistrationLink}
                    poster={eventDetail.poster}
                    closePopUpFunction={closePopup}
                    isVisible={showPopup}
                />
            )}
        </>
    )
}

export default EventCard