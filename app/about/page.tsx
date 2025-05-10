// app/about/page.jsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="prose dark:prose-invert mx-auto py-16">
      <h1>About Me</h1>

      {/* New image section */}
      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
        <Image
          src="/images/about/me.jpg"
          alt="Photo of me"
          width={192}
          height={192}
          className="object-cover"
        />
      </div>

      <p>
        I’m a Physics major at Ohio University, graduating December 2025. I build
        AI models with RAG pipelines, and code frontend UIs. I also create numerical simulations in 
        python related to my physics studies and research. I use multiple operating systems for my work and enjoy learning new distrobutions or 
        usecases. 
      </p>
      <p>
        In my free time, I work on small scale robotics and learning different programming languages. 
      </p>
      {/* …rest of your content… */}
    </div>
  );
}

