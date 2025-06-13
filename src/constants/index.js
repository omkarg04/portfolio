import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import udacityomkar from "../assets/udacityomkar.jpg";



export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023",
    picture: udacityomkar,
    role: "Next Gen Tech Booster Scholarship",
    company: "Udacity, sponsored by Bertelsmann.",
    description: `Received a 100% scholarship for the "AI Programming with Python" Nanodegree offered by Udacity. During this program, I gained a solid foundation in key artificial intelligence concepts, including Python programming, NumPy, pandas, Matplotlib, linear algebra, and neural networks. Successfully completed hands-on projects involving data analysis and building simple neural networks, which strengthened my understanding of AI development workflows and real-world problem-solving using Python.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss"],
  },
  
];

export const CONTACT = {
  phoneNo: "+91 7756096222 ",
  email: "gaikwadoa554@gmail.com",
};
