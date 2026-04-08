import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import udacityomkar from "../assets/udacityomkar.jpg";



export const HERO_CONTENT = `Hi, I’m Omkar 👋
A passionate Full-Stack Developer

I build modern, responsive, and user-friendly web applications using React, Node.js, and Tailwind CSS. I enjoy turning ideas into real-world products and continuously learning new technologies.

Currently exploring AI integration and enhancing my skills in Python.
`;

export const ABOUT_TEXT = `I am a final-year B.Tech student majoring in Computer Science and Engineering at Vellore Institute of Technology, Bhopal. My passion for technology and coding has been a key driver of my academic journey.
I have a strong foundation in frontend development, with proficiency in HTML, CSS, JavaScript, React.js, Tailwind CSS, Framer Motion, and Shadcn UI. I am also familiar with backend development using Node.js. Currently, I am exploring AI integration concepts and have advanced proficiency in Python.

Beyond academics, I am an all-round sports enthusiast with a keen interest in basketball, football, cricket, and chess. I am eager to continue learning, building impactful projects, and growing both professionally and personally.`;

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
