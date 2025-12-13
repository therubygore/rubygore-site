interface PageHeroProps {
  title: string;
  subtitle?: string;
  tight?: boolean;
}

export default function PageHero({ title, subtitle, tight = false }: PageHeroProps) {
  return (
    <section className={`page-hero ${tight ? 'page-hero--tight' : ''}`}>
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

