import Link from 'next/link';

export default function Inquiries() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Inquiries</h1>
      <p className="mb-4">
        For any questions, collaborations, or business inqueries please email me at{' '}
        <a
          href="mailto:ernesamuel72@gmail.com"
          className="text-blue-600 hover:underline"
        >
          ernesamuel72@gmail.com
        </a>.
      </p>
      <p>
        Prefer LinkedIn? <Link href="https://www.linkedin.com/in/samuel-erne"><a className="text-blue-600 hover:underline">Connect with me there.</a></Link>
      </p>
    </main>
  );
}
