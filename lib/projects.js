// lib/projects.js
export const projects = [
  {
    slug: "project-one",
    title: "RAG AI Model",
    description: "Locally hosted AI models with built in PDF parsing. ",
    details: `
      This project is an evolving process I have been working on for several months in my spare time. 
      There are a number of applications for this, namely in assistance with maintainence tasks. 
      This is how I learned about machine learning and parsing data. I did not use github for this, as 
      I am learning about repositories and their benefits at the time of writing. I have intentions to use it in 
      the future. As it stands, the project is capable of assisting in tasks proportional to the power of the 
      host computer. Assuming the necessary hardware is present, (16+GB VRAM) the user should have no problem querying 
      advanced maintainence/repair procedures from a manual up to several thousand pages in the database, and recieve
      a detailed breakdown with little to no hallucination.  
    `,
    image: "/images/projects/proj1.png",
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/TheSamE03/project-one",
    tech: ["Ollama", "Docker", "Python", "LangChain", "ChromaDB"],
  },
  {
    slug: "project-two",
    title: "Electron Diffusion Simulation",
    description: "Simulated diffusion of charge density in a 2D lattice structure",
    details: `
      This project is part of ongoing research on the topic of charge carrier devices (CCDs). This project 
      includes the use of Wolfram Mathematica, OriginPro, and Python software to generate, visualize, and analyze 
      simulations. I created code using numerical methods to solve the non-linear second order differential equaion
      related to the diffusion. This is in the form of Fick's Law with a variable diffusion coefficient. This project
      has allowed me to do much research on the mathematical methods used in the simulation, as well as practice
      data analysis and work on code to be shared with a team for collaborative effort. 
    `,
    image: "/images/projects/proj2.png",
    repoUrl: "https://github.com/TheSamE03/project-two",
    tech: ["OriginPro", "Python", "Mathematica", "NumPy", "SciPy"],
  },

  {
    slug: "project-three",
    title: "This Website",
    description: "Personal website coded from scratch with no prior experience",
    details: `
      This website was part of my efforts to diversify my knowledge of different programming concepts and host 
      all of my current and future projects. I have used several different programming languages and tried a few 
      other forms of the same website before landing on the one you're viewing right now. I am confident in my 
      ability to reproduce similar quality/style websites in a reasonable timeline (this one took 2 days). I will
      be maintaining this with updates as I complete new projects and add to current ones. 
    `,
    image: "/images/projects/proj3.png",
    repoUrl: "https://github.com/TheSamE03/project-three",
    tech: ["React", "Chakra UI", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Markdown"],
  },
  // …add more projects
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
