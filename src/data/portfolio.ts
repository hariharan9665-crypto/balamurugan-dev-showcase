import portfolioImg from "@/assets/project-portfolio.jpg";
import smsImg from "@/assets/project-sms.jpg";
import webappImg from "@/assets/project-webapp.jpg";

export const profile = {
  name: "Balamurugan",
  role: "Web Developer",
  education: "B.Tech Information Technology",
  year: "3rd Year",
  college: "Mount Zion College of Engineering and Technology",
  intro:
    "I am a passionate Web Developer and Information Technology student who enjoys building modern, responsive, and user-friendly web applications.",
  about:
    "I am Balamurugan, a 3rd-year B.Tech Information Technology student at Mount Zion College of Engineering and Technology. I am passionate about web development and enjoy creating modern, responsive, and user-friendly websites and web applications. I continuously improve my technical skills by working on projects and exploring new technologies.",
};

export const socials = {
  email: "balamurugan@example.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
};

export const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Web Design"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", items: ["MySQL", "MongoDB", "Supabase"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern responsive personal portfolio website showcasing my skills, projects, education, and experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: portfolioImg,
    github: "https://github.com/username",
    demo: "https://example.com",
  },
  {
    title: "Student Management System",
    description:
      "A web-based application designed to manage student information and academic records efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Database"],
    image: smsImg,
    github: "https://github.com/username",
    demo: "https://example.com",
  },
  {
    title: "Web Application Project",
    description:
      "A responsive web application built to provide a simple and user-friendly digital experience.",
    tech: ["React", "JavaScript", "Node.js"],
    image: webappImg,
    github: "https://github.com/username",
    demo: "https://example.com",
  },
];

export const education = [
  {
    degree: "B.Tech Information Technology",
    school: "Mount Zion College of Engineering and Technology",
    period: "3rd Year",
    detail: "Currently pursuing my degree with a focus on web technologies and software development.",
  },
];

export const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites and web applications.",
  },
  {
    title: "Frontend Development",
    description: "Creating clean, interactive, and user-friendly interfaces.",
  },
  {
    title: "Backend Development",
    description: "Developing APIs and backend systems for web applications.",
  },
  {
    title: "Responsive Design",
    description: "Making websites work beautifully across desktop, tablet, and mobile devices.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
