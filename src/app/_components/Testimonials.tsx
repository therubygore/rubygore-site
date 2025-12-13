import Link from 'next/link';
import Image from 'next/image';

interface Testimonial {
  text: string;
  author: string;
  avatar: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
  theme?: 'light' | 'dark';
  showCta?: boolean;
}

export default function Testimonials({
  title = "What Her Clients Say",
  testimonials,
  theme = 'light',
  showCta = true,
}: TestimonialsProps) {
  return (
    <section className={`testimonials testimonials-component ${theme}-theme`}>
      <div className="container">
        <h2>{title}</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="stars">★ ★ ★ ★ ★</div>
              <div
                className="testimonial-text"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              />
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="author-info">
                  <div>{testimonial.author}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showCta && (
          <div className="testimonials-cta">
            <Link href="/apply-now" className="btn btn--red testimonials-btn">
              → Book Your Session
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

