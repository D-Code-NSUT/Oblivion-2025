
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
      title: "Platinum Sponsor",
      name: "OpenAI",
      image: "/oblivion.png",
      link: "https://openai.com",
      custom: "",
    },
    {
      title: "Main Event Partner",
      name: "Microsoft Research",
      image: "/oblivion.png",
      link: "https://microsoft.com",
      custom: "",
    },
  ],

  second: [
    {
      title: "Gold Sponsor",
      name: "Vercel",
      image: "/oblivion.png",
      link: "https://vercel.com",
      custom: "",
    },
    {
      title: "Silver Partner",
      name: "Supabase",
      image: "/oblivion.png",
      link: "https://supabase.com",
      custom: "",
    },
    {
      title: "Tech Partner",
      name: "Notion Labs",
      image: "/oblivion.png",
      link: "https://notion.so",
      custom: "",
    },
    
  ],

  third: [
    
  ],

  last: [
    {
      name: "Github",
      image: "/oblivion.png",
      link: "https://github.com",
      custom: "",
    },
    {
      name: "Adobe",
      image: "/oblivion.png",
      link: "https://adobe.com",
      custom: "",
    },
    {
      name: "Dropbox",
      image: "/oblivion.png",
      link: "https://dropbox.com",
      custom: "",
    },
    {
      name: "Zapier",
      image: "/oblivion.png",
      link: "https://zapier.com",
      custom: "",
    },
    {
      name: "Intercom",
      image: "/oblivion.png",
      link: "https://intercom.com",
      custom: "",
    },
    {
      name: "Freshworks",
      image: "/oblivion.png",
      link: "https://freshworks.com",
      custom: "",
    },
  ],
};

