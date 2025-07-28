import React from 'react'
import Link from 'next/link'
import { useRef,useState, useEffect } from 'react'


function EventDetailsPopup({
  name,
  date,
  description,
  venue,
  RegistrationLink,
  poster
}) {
  const popupRef = useRef(null)
  const [isPopupOpen, setisPopupOpen] = useState(true)

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isPopupOpen])
  

  const closePopup = () => setisPopupOpen(false)

  return (
    <div
      ref={popupRef}
      onClick={closePopup}
      
      className={`${isPopupOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"} flex fixed inset-0 justify-center items-center bg-black/35 backdrop-blur-lg  transition-all duration-300 z-50 `}>
      <div
        onWheel={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        style={{
          scrollbarWidth: 'none',
        }}
        className= {`bg-black flex flex-col items-start p-3 rounded-lg gap-4 max-h-[80vh] w-full max-w-md mx-4 overflow-y-auto scroll-smooth mt-20 ${isPopupOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <h1 className='text-5xl font-semibold font-pirata tracking-wider mt-2 self-center'>HACKATHON</h1>
        <img className='rounded-lg w-full h-[250px] object-cover' src="/EventPosters/oblivionPoster.jpg" alt="" />

        <div className='flex flex-col items-start w-full gap-1'>
          <div className='px-2 text-xl font-bold'>Date : kakjakj</div>
          <div className='px-2 text-xl font-bold text-left'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste ut, sint natus officiis iusto cupiditate a inventore modi provident!</div>
          <div className='px-2 text-xl font-bold text-left'>Venue : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptates.</div>
        </div>

        <button className='bg-red-600 p-2 rounded-lg font-semibold self-center text-lg cursor-pointer'>
            <Link
            href= ""
            >Register</Link>
        </button>

      </div>
    </div>
  )
}

export default EventDetailsPopup