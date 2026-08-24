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

export const stats = [
  { value: "3rd Year", label: "B.Tech IT Student" },
  { value: "10+", label: "Projects Completed" },
  { value: "100%", label: "Responsive Design" },
  { value: "MERN", label: "Full-Stack Ready" },
];

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
    tech: ["HTML", "CSS", "JavaScript", "React"],
    image: portfolioImg,
    github: "https://github.com/username",
    demo: "https://example.com",
  },
  {
    title: "Student Management System",
    description:
      "A web-based application designed to manage student information and academic records efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
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

export const achievements = [
  {
    title: "Web Development Certification",
    issuer: "Online Learning Platform",
    year: "2025",
    description: "Completed comprehensive training in modern frontend and backend web development technologies.",
  },
  {
    title: "Academic Excellence in IT",
    issuer: "Mount Zion College of Engineering & Tech",
    year: "2024 - 2025",
    description: "Maintained top academic performance in Information Technology coursework.",
  },
  {
    title: "College Hackathon Finalist",
    issuer: "Tech Fest 2024",
    year: "2024",
    description: "Developed a functional full-stack prototype within a 24-hour hackathon challenge.",
  },
];

export const testimonials = [
  {
    quote: "Balamurugan displays exceptional dedication to learning modern web standards. His attention to design detail and clean code is outstanding.",
    name: "Faculty Mentor",
    role: "Department of IT",
  },
  {
    quote: "Collaborating with Balamurugan was great. He delivered a clean, fast, and fully responsive website that exceeded our expectations.",
    name: "Project Peer",
    role: "Full-Stack Collaborator",
  },
];

export const faqs = [
  {
    question: "What is your primary tech stack?",
    answer: "I specialize in Frontend and Full-Stack Web Development using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Node.js, Express, MySQL, and MongoDB.",
  },
  {
    question: "Are you available for freelance projects or internships?",
    answer: "Yes! I am open to web development internships, freelance projects, and collaborative technical opportunities.",
  },
  {
    question: "How do you ensure web applications are mobile responsive?",
    answer: "I use modern CSS layout techniques (Flexbox, Grid, container queries, and mobile-first responsive breakpoints) to guarantee seamless experiences across all screen sizes.",
  },
  {
    question: "How can I get in touch with you?",
    answer: "You can reach out directly via the Contact form on this page or send an email to balamurugan@example.com.",
  },
];

export const navLinks = [
  { label: "About Me.", href: "#about" },
  { label: "Services.", href: "#services" },
  { label: "Portfolio.", href: "#projects" },
  { label: "Achievements.", href: "#achievements" },
  { label: "FAQ.", href: "#faq" },
  { label: "Hire Me.", href: "#contact" },
];
