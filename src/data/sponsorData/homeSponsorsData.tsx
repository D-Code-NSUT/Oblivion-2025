
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
    {
      title: "Diamond",
      name: "Google",
      image: "/oblivion.png",
      link: "https://google.com",
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
    {
      title: "Innovation Sponsor",
      name: "Stripe Payments",
      image: "/oblivion.png",
      link: "https://stripe.com",
      custom: "",
    },
    {
      title: "Media Partner",
      name: "Hashnode",
      image: "/oblivion.png",
      link: "https://hashnode.com",
      custom: "",
    },
  ],

  third: [
    {
      name: "Tailwind Labs",
      image: "/oblivion.png",
      link: "https://tailwindcss.com",
      custom: "",
    },
    {
      name: "Render",
      image: "/oblivion.png",
      link: "https://render.com",
      custom: "",
    },
    {
      name: "Clerk Auth",
      image: "/oblivion.png",
      link: "https://clerk.dev",
      custom: "",
    },
    {
      name: "Auth0",
      image: "/oblivion.png",
      link: "https://auth0.com",
      custom: "",
    },
    {
      name: "DigitalOcean",
      image: "/oblivion.png",
      link: "https://digitalocean.com",
      custom: "",
    },
    {
      name: "Linear",
      image: "/oblivion.png",
      link: "https://linear.app",
      custom: "",
    },
    {
      name: "Sentry",
      image: "/oblivion.png",
      link: "https://sentry.io",
      custom: "",
    },
  ],

  last: [
    {
      name: "Figma",
      image: "/oblivion.png",
      link: "https://figma.com",
      custom: "",
    },
    {
      name: "Cloudflare",
      image: "/oblivion.png",
      link: "https://cloudflare.com",
      custom: "",
    },
    {
      name: "Postman",
      image: "/oblivion.png",
      link: "https://postman.com",
      custom: "",
    },
    {
      name: "Canva",
      image: "/oblivion.png",
      link: "https://canva.com",
      custom: "",
    },
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

