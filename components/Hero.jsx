export function Hero({ heading, subheading, ctaText, ctaLink }) {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-extrabold mb-4">{heading}</h1>
      <p className="text-xl mb-8">{subheading}</p>
      <a href={ctaLink} className="btn btn-primary">
        {ctaText}
      </a>
    </section>
  );
}
