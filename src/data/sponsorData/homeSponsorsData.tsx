
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
    // {
    //   title: "Main Event Partner",
    //   name: "Microsoft Research",
    //   image: "/oblivion.webp",
    //   link: "https://microsoft.com",
    //   custom: "",
    // },
  ],

  second: [
    // {
    //   title: "Gold Sponsor",
    //   name: "Vercel",
    //   image: "/oblivion.webp",
    //   link: "https://vercel.com",
    //   custom: "",
    // },
    // {
    //   title: "Silver Partner",
    //   name: "Supabase",
    //   image: "/oblivion.webp",
    //   link: "https://supabase.com",
    //   custom: "",
    // },
    // {
    //   title: "Tech Partner",
    //   name: "Notion Labs",
    //   image: "/oblivion.webp",
    //   link: "https://notion.so",
    //   custom: "",
    // },
    
  ],

  third: [
   
  ],

  last: [
    
  ],
};

