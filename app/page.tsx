// app/page.jsx
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { getAllProjects } from "../lib/projects";

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <>
      {<>
      <Hero
        heading="Samuel Erne"
        subheading="Physics student, developer"
        ctaText="View Projects"
        ctaLink="#projects"
      />

      <section id="projects" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}                // use slug as the key—more reliable than title
              title={p.title}
              description={p.description}
              image={p.image}
              url={`/projects/${p.slug}`} // ← here you define href explicitly
            />
          ))}

        </div>
      </section>
    </>}
    </>
  );
}
