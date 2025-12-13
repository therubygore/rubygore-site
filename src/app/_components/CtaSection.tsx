import Link from 'next/link';

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  compact?: boolean;
}

export default function CtaSection({
  title = "Ready to start your<br>tattoo journey?",
  description = "Book your consultation and let's create something<br>beautiful together.",
  buttonText = "→ Book Your Session",
  buttonLink = "/apply-now",
  compact = false,
}: CtaSectionProps) {
  return (
    <section className={`cta-section ${compact ? 'cta-section--compact' : ''}`}>
      <div className="container">
        <div
          id="cta-title"
          className="text-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p id="cta-description" dangerouslySetInnerHTML={{ __html: description }} />
        <Link href={buttonLink} className="btn btn--red-light" id="cta-button">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

