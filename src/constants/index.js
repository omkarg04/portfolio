import auratravel from "../assets/auratravel.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import udacityomkar from "../assets/udacityomkar.jpg";
import tarvis from "../assets/tarvis.jpg";


export const HERO_CONTENT = `Hi, I am Omkar 
A Computer Science undergraduate specializing in Applied AI Engineering
I build full-stack, LLM-powered applications using Python, React, and FastAPI — integrating generative AI APIs like Gemini into production-style workflows. I design REST and WebSocket APIs and ship end-to-end AI products spanning backend architecture, NLP pipelines, and frontend interfaces.
Currently seeking internship and full-time opportunities to build impactful, real-world AI products.
`;

export const ABOUT_TEXT = `Hey, I'm Omkar — a final-year Computer Science student at VIT, graduating in July 2026. I love building things end-to-end, from clean, intuitive frontends to the AI and backend logic that powers them. Lately I've been deep into generative AI and LLM-powered apps, but at heart I just enjoy solving real problems and shipping stuff people can actually use.
I recently interned as a Frontend Developer at TechBird IT Services, where I got to work on a real product used by real people — which taught me a lot about writing code that plays well with a team, not just code that works.
Outside of coding, I'm big into sports — basketball, football, cricket, and the occasional game of chess. I also spend a fair bit of time on LeetCode, chasing that satisfying feeling of cracking a tough problem. I'm currently looking for internship and full-time opportunities where I can keep learning, keep building, and grow both as an engineer and as a person.`;

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
    title: "Tarvis",
    image: tarvis,
    description:
      "An offline AI voice dictation tool that runs Faster-Whisper locally, enabling hotkey-triggered transcription and auto-typing into any desktop app with zero cloud dependency. Built with two independent audio-capture pipelines — browser-based and OS-level — bridged through async communication, plus a 6-stage NLP pipeline for ASR correction, filler-word removal, and real-time status updates over WebSocket.",
    technologies: ["Python", "FastAPI", "React (Vite)", "Faster-Whisper", "WebSocket"],
    link: "https://github.com/omkarg04/Tarvis",
  },
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
