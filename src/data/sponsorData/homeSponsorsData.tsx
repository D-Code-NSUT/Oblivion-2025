
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
      title: "Title Sponser Of Hackathon",
      name: "Yosemite Crew",
      image: "/sponserPhoto/yosemite.svg",
      link: "https://openai.com",
      custom: "",
    },
  ],

  second: [
 
  ],

  third: [
   
  ],

  last: [
    
  ],
};

