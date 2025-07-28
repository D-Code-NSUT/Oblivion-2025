import { useEffect, useState } from "react"


function useEventDetails() {
    const [eventData, seteventData] = useState([])

    const eventDetails = [
        {
            name: "Hackathon",
            poster: "/EventPostures/oblivionPoster.jpg",
            date: "ssjhsh",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga placeat suscipit non blanditiis praesentium odit veniam vero doloribus quas!",
            venue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, mollitia!",
            RegistrationLink : ""
        },
        {
            name: "Ideathon",
            poster: "/EventPostures/oblivionPoster.jpg",
            date: "ssjhsh",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga placeat suscipit non blanditiis praesentium odit veniam vero doloribus quas!",
            venue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, mollitia!",
            RegistrationLink : ""
        },
        {
            name: "AI Ideathon",
            poster: "/EventPostures/oblivionPoster.jpg",
            date: "ssjhsh",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga placeat suscipit non blanditiis praesentium odit veniam vero doloribus quas!",
            venue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, mollitia!",
            RegistrationLink : ""
        },
        {
            name: "CP Contest",
            poster: "/EventPostures/oblivionPoster.jpg",
            date: "ssjhsh",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga placeat suscipit non blanditiis praesentium odit veniam vero doloribus quas!",
            venue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, mollitia!",
            RegistrationLink : ""
        },
        {
            name: "ML Hackathon",
            poster: "/EventPostures/oblivionPoster.jpg",
            date: "ssjhsh",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga placeat suscipit non blanditiis praesentium odit veniam vero doloribus quas!",
            venue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, mollitia!",
            RegistrationLink : ""
        },
        {
            name: "Useless Hackathon",
            poster: "/EventPostures/oblivionPoster.jpg",
            date: "ssjhsh",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga placeat suscipit non blanditiis praesentium odit veniam vero doloribus quas!",
            venue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, mollitia!",
            RegistrationLink : ""
        }
    ]

    useEffect(() => {
        seteventData(eventDetails)
    }, [])


    return eventData
}

export default useEventDetails