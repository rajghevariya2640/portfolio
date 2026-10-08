export const profile = {
  name: "Raj Ghevariya",
  role: "Senior Web Designer & Front-End UI Engineer",
  pitch:
    "Crafting high-performance, mobile-first web experiences and scalable UI components with 3.5+ years of expertise.",
  location: "Surat, Gujarat, India",
  email: "rajghevariya40@gmail.com",
  phone: "+91 8200729165",
  languages: ["English", "Hindi", "Gujarati"],
  cv: "/Raj-Ghevariya-CV.pdf",
  bio: "Senior Web Designer with 3.5+ years of experience building high-quality, scalable web interfaces using modern utility frameworks like Tailwind CSS, React components, and dynamic UI libraries.",
};

export const experience = [
  {
    company: "Tagline Infotech LLP",
    title: "Sr. Web Designer",
    period: "Aug 2023 – Present",
    points: [
      "Architected responsive, high-performance web interfaces using Tailwind CSS, Bootstrap, and HTML5/CSS3.",
      "Designed dynamic, reusable UI component systems integrated into React architectures.",
      "Implemented mobile-first layouts with strict cross-browser compatibility.",
    ],
  },
  {
    company: "Ajasys Technologies",
    title: "Jr. Web Designer",
    period: "Jan 2023 – Jul 2023",
    points: [
      "Built and maintained production-grade web interfaces for scalable applications.",
      "Collaborated with backend teams to integrate custom PHP templates and front-end layouts.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Saurashtra University",
  period: "2021–2024",
  gpa: "7.95/10",
};

export const skills = [
  { group: "Core Front-End", items: ["HTML5", "CSS3", "SCSS/SASS", "JavaScript", "jQuery"] },
  {
    group: "UI Frameworks & Styling",
    items: ["Tailwind CSS", "Bootstrap", "React Bootstrap", "Material UI", "ShadCN UI", "ANTD", "FlowBite", "Chakra UI"],
  },
  { group: "Animation & Motion", items: ["Framer Motion", "GSAP"] },
  { group: "Component Architecture", items: ["React Components", "Project Management"] },
];

export const projects: { name: string; url: string; tags: string[]; image?: string; fullPage?: { src: string; width: number; height: number } }[] = [
  { name: "Vasana AI", url: "https://vasana.ai/", tags: ["AI Interface", "Modern Web Design", "Responsive UI"] },
  { name: "SmartConvo", url: "https://smartconvo.io/", tags: ["SaaS Dashboard", "Conversational AI UI"] },
  { name: "Pooki Game", url: "https://pookigame.com/", tags: ["Interactive Gaming UI", "Web Design"], fullPage: { src: "/projects/pooki-game-full.jpg", width: 1920, height: 11288 } },
  { name: "DataVizz", url: "https://datavizz.in/", tags: ["Data Analytics", "Interactive UI Components"], fullPage: { src: "/projects/datavizz-full.png", width: 1920, height: 6776 } },
  { name: "The Data Privacy Cloud", url: "https://thedataprivacy.cloud/", tags: ["Cloud Tech", "Enterprise Web Interface"], fullPage: { src: "/projects/data-privacy-cloud-full.png", width: 1920, height: 7619 } },
];
