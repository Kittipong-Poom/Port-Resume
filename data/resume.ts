export const education = [
  {
    id: 1,
    title: "Mae Fah Luang University",
    degree: "Bachelor's Degree",
    year: "2021 - 2025",
    gpax: "GPAX: 3.19",
    description:
      "School of Information Technology, Major in Software Engineering",
  },
];

export const skills = [
  {
    id: 1,
    title: "Nuxt.js (Intermediate)",
  },
  {
    id: 2,
    title: "NodeJs(ExpressJS) (Intermediate)",
  },
  {
    id: 3,
    title: "TailwindCSS (Intermediate)",
  },
  {
    id: 4,
    title: "Next.js (Basic)",
  },
  {
    id: 5,
    title: "TypeScript (Basic)",
  },
  {
    id: 6,
    title: "MySQL (Basic)",
  },
  {
    id: 7,
    title: "Authenticate (Superbase) (Basic)",
  },
  {
    id: 8,
    title: "Docker (Basic)",
  },
  {
    id: 9,
    title: "Vercel (Basic)",
  },
];

export const internWorkExperience = [
  {
    id: 1,
    title: "Internship",
    position: "Frontend Developer",
    company: "Radius Co., Ltd.",
    year: "Jan 2024 - Apr 2024",
    description: `Developed The Front-End for an HRIS (Human Resource 
      Information System) to manage employee information 
      within the organization. Built and Implemented User 
      Interfaces Using Nuxt.js With TypeScript, Ensuring Efficient 
      and Scalable Solutions.`,
  },
];

export const projects = [
  {
    id: 1,
    title: "Ambulance Service",
    position: "Fullstack Developer",
    date: "May 2023 - Oct 2024",
    images: "/images/projects/ambulance.png",
    description: `Developed a web application to 
    support emergency ambulance units and collect annual patient data.
    The application was built using Nuxt.js 
    with Vuetify and TailwindCSS for the frontend, and Node.js 
    (Express.js) with MySQL for the backend.`,
    github: "https://github.com/Kittipong-Poom/Nuxtjs-Ambulance-Service",
    link: "https://my-newambulance.web.app/",
  },
  {
    id: 2,
    title: "FIGURESS E-COMMERCE",
    position: "Frontend Developer",
    date: "June 2024 - August 2024",
    images: "/images/projects/e-commerce-nextjs.png",
    description: `Developed a trading web application using Next.js, integrating Sanity.io for content management and Stripe for online payments, including a credit card checkout page.`,
    github: "https://github.com/Kittipong-Poom/e-commerce-nextjs",
    link: "https://e-commerce-nextjs-pi-henna.vercel.app/",
  },
  {
    id: 3,
    title: "NATURE TRIP",
    position: "Frontend Developer",
    date: "February 2025 - April 2025",
    images: "/images/projects/natrure-trip.png",
    description: `Built a nature tourism recommendation platform using Next.js, TailwindCSS, TypeScript, Shadcn, and Supabase for authentication. Features include user reviews and accommodation booking.`,
    github: "https://github.com/Kittipong-Poom/TravelTrips-NextJs",
    link: "https://travel-trips-ten.vercel.app/",
  },
  {
    id: 4,
    title: "HRIS(Human Resource Information System)",
    position: "Frontend Developer",
    date: "internship 6 January 2025 - 30 April 2025",
    images: "/images/projects/hris3.png",
    description: `Developed the front-end of an HRIS (Human Resource Information System) to manage organizational employee data.
Implemented scalable and efficient user interfaces using Nuxt.js with TypeScript.
Collaborated with the UX/UI team to translate design prototypes into responsive, visually appealing web pages.`,
    imageGroups: {
      userManual: Array.from(
        { length: 21 },
        (_, i) => `/images/projects/manual/manual${i}.png`
      ),
      wi: Array.from(
        { length: 9 },
        (_, i) => `/images/projects/wi/wi${i + 1}.png`
      ),

      announcement: Array.from(
        { length: 14 },
        (_, i) => `/images/projects/announcement/ann${i + 1}.png`
      ),
      permission: Array.from(
        { length: 36 },
        (_, i) => `/images/projects/permission/per${i + 1}.png`
      ),
    },
  },
  {
    id: 5,
    title: "Line Bot Message API",
    position: "Backend Developer",
    images: "/images/projects/flow_line.png",
    description: `I developed an AI automation workflow on n8n using Docker, 
    integrating a LINE Message API to function as a 
    chatbot with long-term memory capabilities. All 
    user messages are stored in a Google Sheet, enabling 
    the AI to reference past interactions and maintain personalized, 
    context-aware conversations over time.`,
  },
  {
    id: 6,
    title: "AI Generated Video",
    position: "Backend Developer",
    images: "/images/projects/video_flow.png",
    description: `Developed “AI Video Flow” using n8n on Docker no-code automation pipeline that 
    transforms an idea into a complete video. The workflow 
    automates story generation, image prompt creation, and image-to-video rendering, all seamlessly 
    integrated within n8n.`,
  },
];
