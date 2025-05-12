export default function Resume() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Resume (Abbreviated)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="list-disc list-inside">
          <li>Ohio University, B.S. Physics (Dec 2025)</li>
          <li>Minors: Astronomy, Mathematics</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Experience & Skills</h2>
        <ul className="list-disc list-inside">
          <li>Machine-learning model development & backtesting (Python, TensorFlow)</li>
          <li>Scientific computing (NumPy, SciPy, Matplotlib, Mathematica)</li>
          <li>Web development (Next.js, React, Tailwind, Vercel)</li>
          <li>Army National Guard weapons mechanic; graduated top of class at Ordnance School</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: <a href="mailto:ernesamuel72@gmail.com" className="text-blue-600 hover:underline">ernesamuel72@gmail.com</a></p>
      </section>
    </main>
  );
}