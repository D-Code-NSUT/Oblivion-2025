import { Instagram } from "lucide-react";

export interface speakerData {
    name: string,
    image: string,
    background?: string,
    linkedin: string,
    instagram: string,
    designation: string,
    intro: string,
}
// Sample data for speakers
    // {
    //     name: "bhhbbhh bhbh bhbhbh",
    //     image: "/speakerPhoto/john_doe.jpg",
    //     linkedin: "https://www.linkedin.com/in/johndoe",
    //     instagram: "https://www.instagram.com/johndoe",
    //     designation: "Software Engineer at XYZ",
    //     intro: "John Doe is a software engineerin React and Node.js, and has a passion for building scalable applications."
    // }, {
    //     name: "John Doe",
    //     image: "/speakerPhoto/john_doe.jpg",
    //     linkedin: "https://www.linkedin.com/in/johndoe",
    //     instagram: "https://www.instagram.com/johndoe",
    //     designation: "Software Engineer at XYZ",
    //     intro: "John Doe is a software engineer with over 10 years of experience in web development. He specializes in React and Node.js, and has a passion for building scalable applications."
    // },
export const speakersData:Array<speakerData> = [
    {
        name: "Savio DMello",
        image: "/Speakers/Nvidia/Speaker.jpe",
        background: "/Speakers/Nvidia/Nvidia background.png",
        linkedin: "https://www.linkedin.com/in/savio-dmello-a7a17318/",
        instagram: "#",
        designation: "Manager, Enterprise Business Intelligence",
        intro: "IT professional with 20 years of experience in Business Intelligence, Financial Forecasting, Financial consolidation, Artificial Intelligence, Machine learning and Application Security.",
    },
    {
        name: "Abhishek Parashar",
        image: "/Speakers/Nvidia/Speaker.jpe",
        background: "/Speakers/Instagram/Insta background.png",
        linkedin: "https://www.linkedin.com/in/abhishek-parashar-ap/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/indian_cyber_club?utm_source=ig_web_button_share_sheet&igsh=Z3BnZjE3cDh4YXpw",
        designation: "Founder @ Cyberz Technologies | Building @ Indian Cyber Club | Red Teaming | Cybercrime Investigator | Cybersecurity Educator",
        intro: "I am passionate about making cybersecurity accessible, practical, and impactful — both for individuals and businesses.",
    },
    {
        name: "ALI NAWAZ HAIDER RIZVI",
        image: "/Speakers/Nvidia/Speaker.jpe",
        background: "/Speakers/Amazon/Amazon background.png",
        linkedin: "#",
        instagram: "#",
        designation: "Software Engineer 2 at Amazon",
        intro: "He’s a former instructor with strong skills and brand value; we can finalize him, but the college must avoid online marketing due to Amazon’s policies.",
    },
    
]