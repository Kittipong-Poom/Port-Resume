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
    title: "Next.js",
  },
  {
    id: 5,
    title: "TypeScript ",
  },
  {
    id: 6,
    title: "MySQL ",
  },
  {
    id: 8,
    title: "n8n AI Automation (Workflow Basic)",
  },
  {
    id: 9,
    title: "Docker (Basic)",
  },
];

export const internWorkExperience = [
  {
    id: 1,
    title: "Work Experience",
    position: "Fullstack Developer",
    company: "Affinitech Co.,LTD",
    year: "June 2025 - Present",
    description: `Developed blood bank and medical laboratory management systems supporting end-to-end workflows from donor registration to result delivery for hospitals.
      Designed and analyzed database structures to ensure efficient, reliable system operations.
      Provided client training on system usage and basic troubleshooting to ensure smooth adoption.
      Collaborated with clients to gather and define requirements for system enhancements and new features.`,
  },
  {
    id: 2,
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
    title: "AMBULANCE SERVICE",
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
    images: "/images/projects/nature-trip.png",
    description: `Built a nature tourism recommendation platform using Next.js, TailwindCSS, TypeScript, Shadcn, and Supabase for authentication. Features include user reviews and accommodation booking.`,
    github: "https://github.com/Kittipong-Poom/TravelTrips-NextJs",
    link: "https://travel-trips-ten.vercel.app/",
  },
  {
    id: 4,
    title: "HRIS (Human Resource Information System)",
    position: "Frontend Developer",
    date: "Internship 6 January 2025 - 30 April 2025",
    images: "/images/projects/hris4.png",
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
    title: "LINE BOT MESSAGE API",
    position: "Backend Developer",
    images: "/images/projects/flow_line2.png",
    description: `Built an AI chatbot workflow on n8n (Docker) using the LINE Messaging API, 
    with long-term memory by logging user messages to Google Sheets.
    Integrated Google Drive API to store images with timestamps and synced metadata 
    to Sheets for context-aware tracking and reference.`,
  },
  {
    id: 6,
    title: "AI GENERATED VIDEO",
    position: "Backend Developer",
    images: "/images/projects/video_flow1.png",
    description: `Developed “AI Video Flow” using n8n on Docker no-code automation pipeline that 
    transforms an idea into a complete video. The workflow 
    automates story generation, image prompt creation, and image-to-video rendering, all seamlessly 
    integrated within n8n.`,
  },
  {
    id: 7,
    title: "Blood Bank Management System",
    position: "Fullstack Developer",
    images: "/images/projects/dashboard1.jpeg",
    description: `Designed and analyzed a blood bank management system to support 
    laboratory staff in managing blood donation records, patient 
    information, and blood inventory, with the objective of improving 
    operational efficiency and data accuracy.`,
  },
  {
    id: 8,
    title: "Blood Bank Mobile Web Application",
    position: "Fullstack Developer",
    images: "/images/projects/mobile-blood.png",
    description: `Designed and developed a mobile-responsive blood bank web system to support 
    hospital operations, enhancing accuracy, safety, and usability for 
    medical staff, with support for barcode scanning via mobile device cameras.`,
  },
  {
    id: 9,
    title: "Blood Donor Registration Form",
    position: "Fullstack Developer",
    images: "/images/projects/donation/donation.png",
    description: `Designed and developed a blood donor registration web form using Google Apps Script, 
    supporting donor data entry, identity verification 
    through facial photo capture, health screening questionnaires, and electronic signature submission.`,
    imageGroups: {
      donation: Array.from(
        { length: 3 },
        (_, i) => `/images/projects/donation/donation${i + 1}.png`
      ),
    },
  },
];
