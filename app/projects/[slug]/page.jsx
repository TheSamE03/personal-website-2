// app/projects/[slug]/page.jsx
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  getAllProjects,
  getProjectBySlug,
} from "../../../lib/projects";

export async function generateStaticParams() {
  return getAllProjects().map((proj) => ({
    slug: proj.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <article className="prose dark:prose-invert mx-auto py-16">
      <h1>{project.title}</h1>
      <p className="text-lg">{project.description}</p>

      <div className="relative w-full h-64 my-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="space-y-4">
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: project.details }}
        />

        <div>
          <h2>Tech Stack</h2>
          <ul className="list-disc list-inside">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4 mt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Live
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}
