// lib/projects.js
export const projects = [
  {
    slug: "project-one",
    title: "RAG AI Model",
    description: "Locally hosted AI models with built-in PDF parsing. ",
    details: `
      This project is an evolving process I have been working on for several months in my spare time. 
      There are many applications for this, namely in assisting with maintenance tasks. 
      This is how I learned about machine learning and parsing data. As it stands, the project can assist in tasks 
      proportional to the host computer's power. Assuming the necessary hardware is present (16+ GB VRAM), the user 
      should have no problem querying advanced maintenance/repair procedures from a manual up to several thousand 
      pages in the database, and receive a detailed breakdown with little to no hallucination. 
      At this time, the code has not been integrated into a GitHub repository, but I would be happy to send 
      .py files and documentation upon request. Find my LinkedIn on this webpage footer, or my email under 
      my resume tab. 
    `,
    image: "/images/projects/proj1.png",
    liveUrl: "https://your-live-site.com",
    repoUrl: "https://github.com/TheSamE03",
    tech: ["Ollama", "Docker", "Python", "LangChain", "ChromaDB"],
  },
  {
    slug: "project-two",
    title: "Electron Diffusion Simulation",
    description: "Simulated diffusion of charge density in a 2D lattice structure",
    details: `
      This project is part of ongoing research on the topic of charge carrier devices (CCDs). This project 
      includes the use of Wolfram Mathematica, OriginPro, and Python software to generate, visualize, and analyze 
      simulations. I created code using numerical methods to solve the non-linear second-order differential equation
      related to diffusion. This is in the form of Fick's Law with a variable diffusion coefficient. This project
      has allowed me to do much research on the mathematical methods used in the simulation, as well as practice
      data analysis and work on code to be shared with a team for collaborative effort. Please feel free to utilize the 
      code from the GitHub repository, linked below, for any related work in diffusion. There are several available 
      boundary/initial conditions, as well as instructions for optimization for use on lower power machines. I have 
      authored this code myself and consider it open-source. 
    `,
    image: "/images/projects/proj2.png",
    repoUrl: "https://github.com/TheSamE03/nonlinear-diffusion",
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
    liveUrl: "www.samuelerne.com",
    repoUrl: "https://github.com/TheSamE03/personal-website-2",
    tech: ["React", "Chakra UI", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Markdown"],
  },
  
  {
    slug: "project-four",
    title: "MATLAB Rocket Motion",
    description: "Rocket motion simulation and dynamic braking control",
    details: `
      This project is part of my work on rocket guidance and control systems. 
      The code in the project allows calculating a dynamic drag coefficient based on
      target apogee and braking distance. The code also simulates the rocket's motion
      under the influence of gravity and drag forces. The simulation results are visualized
      in MATLAB's Simulink.  
    `,
    image: "/images/projects/proj4.png",
    liveUrl: "www.samuelerne.com",
    repoUrl: "https://github.com/TheSamE03/Matlab-Rocket-Dynamics",
    tech: ["MATLAB", "Simulink"],
  },
  // …add more projects
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
