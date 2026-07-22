import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import udacityomkar from "../assets/udacityomkar.jpg";


export const HERO_CONTENT = `Hi, I am Omkar 
A Computer Science undergraduate specializing in Applied AI Engineering
I build full-stack, LLM-powered applications using Python, React, and FastAPI — integrating generative AI APIs like Gemini into production-style workflows. I design REST and WebSocket APIs and ship end-to-end AI products spanning backend architecture, NLP pipelines, and frontend interfaces.
Currently working as a Frontend Developer, shipping UI for live web applications.
`;

export const ABOUT_TEXT = `I am a final-year B.Tech student majoring in Computer Science and Engineering at Vellore Institute of Technology, graduating in July 2026 with a CGPA of 8.34/10.
I specialize in Applied AI Engineering — building full-stack, LLM-powered applications with Python, React.js, and FastAPI, and integrating generative AI APIs like Gemini into real, production-style workflows. My work spans NLP pipelines, speech recognition (ASR), REST and WebSocket API design, and responsive frontend interfaces built with Tailwind CSS, Framer Motion, and shadcn/ui.
I recently worked as a Frontend Developer Intern at TechBird IT Services, where I built the frontend for a Travel Expense Management Module in React.js, handling expense submission, tracking, and multi-stage approval flows while integrating with backend REST APIs.
Beyond code, I've solved 450+ DSA problems on LeetCode (top 15% globally) and was selected among the top 1% of applicants for Udacity's AI Programming with Python Nanodegree. I'm an all-round sports enthusiast with a keen interest in basketball, football, cricket, and chess, and I'm always looking to build impactful projects while growing both professionally and personally.`;


export const EXPERIENCES = [
  {
    year: "2024",
    picture: udacityomkar,
    role: "Next Gen Tech Booster Scholarship",
    company: "Udacity, sponsored by Bertelsmann.",
    description: `Received a 100% scholarship for the "AI Programming with Python" Nanodegree offered by Udacity. During this program, I gained a solid foundation in key artificial intelligence concepts, including Python programming, NumPy, pandas, Matplotlib, linear algebra, and neural networks. Successfully completed hands-on projects involving data analysis and building simple neural networks, which strengthened my understanding of AI development workflows and real-world problem-solving using Python.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },

];

export const PROJECTS = [
  {
    title: "AuraTravel",
    image: project1,
    description:
  "An AI-powered travel planner that generates personalized trips and itineraries. Helps users plan destinations, schedules, and experiences seamlessly.",
    technologies:  ["React", "Firebase","Gemini API", "Tailwind CSS", "Shadcn UI", ],
    link: "https://github.com/omkarg04/AuraTravel",
  },
  {
    title: "Uplift - AI Emotional Health Companion",
    image: project2,
    description:
      "AI–powered emotional support application that interacts with users and provides supportive responses based on their emotional state",
    technologies: [ "React.js", "AWS PartyRock", "Generative AI", "Prompt Engineering"],
    link :"https://partyrock.aws/u/iomkar04/u7zZylGVQ/Uplift:-Your-Emotional-Companion",
  },
  {
    title: "Stress Monitoring System",
    image: project3,
    description:
      " A real-time health monitoring system that collects physiological data including heart rate, SpO2, and body temperature using IoT sensors.",
    technologies: [ "React","Javascript" ,"Tailwindcss" ,"ESP32", "MAX30102", "DS18B20"],
    link: "https://github.com/omkarg04/Stress-Care-Frontend",
  },
  
];

export const CONTACT = {
  phoneNo: "+91 7756096222 ",
  email: "gaikwadoa554@gmail.com",
};
