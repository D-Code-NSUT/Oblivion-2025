
export interface SponsorData {
    title?: string;
    name:string;
    image: string;
    link?: string;
    custom:string;
}
/* 
    Title is neccesary for top and 2nd, if not given title:"titleSponsor"
    title will *not* be displayed for 3rd and last.
    custom will have exclusive styles for priority 1 and 2, like some animation colors, etc.
*/ 
export const sponsorsData = {
  top: [
    {
      title: "Title Sponsor",
      name: "Red Bull",
      image: "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1756396632/red-bull_omtpbx.png",
      link: "https://redbull.com/in-en",
      custom: "",
    },
    {
      title: "Co–Title Sponsor",
      name: "Yosemite Crew",
      image: "/sponserPhoto/yosemite.svg",
      link: "https://openai.com",
      custom: "",
    },
  ],
  
  second: [
    {
      title: "Associate Sponsor",
      name: "CampusX",
      image: "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1756399547/Campusx_white_logo_logo_loyl9a.jpg",
      link: "https://openai.com",
    custom: "small",
    },
    {
      title: "Associate Sponsor",
      name: "Geek Room",
      image: "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1756401930/ed736366-39c2-42d2-8a5e-b055578f1a4c.png",
      link: "https://openai.com",
      custom: "",
    },
  ],
  
  third: [
    {
      title: "Gold Sponsor",
      name: "AccioJob",
      image: "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1756399551/acciojob_logo_s9wpmm.jpg",
      link: "https://openai.com",
      custom: "",
    },
    {
      title: "Media Partner",
      name: "DU India",
      image: "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1756401730/Du_India_1_qmr9s7.jpg",
      link: "https://openai.com",
    custom: "small",
    },
  ],

  last: [
  ],
};

