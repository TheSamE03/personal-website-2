// components/ProjectCard.jsx
"use client";              // if you’re using any client-only hooks; otherwise you can omit this
import Link from "next/link";
import Image from "next/image";

export function ProjectCard({ title, description, image, url }) {
  return (
    <Link
      href={url}
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill                          // replaces layout="fill"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
