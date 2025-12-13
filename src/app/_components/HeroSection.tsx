'use client';

import Link from 'next/link';
import Image from 'next/image';
import CoverflowCarousel from './CoverflowCarousel';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  carouselImages: Array<{ src: string; alt: string }>;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  carouselImages,
}: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{title}</h1>
            <p id="hero-subtitle">{subtitle}</p>
            <Link href={ctaLink} className="btn btn--red">
              {ctaText}
            </Link>
            <div className="hero-reviews">
              <div className="hero-stars">
                <span itemScope itemType="https://schema.org/AggregateRating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="ratingCount" content="29" />
                  <meta itemProp="reviewCount" content="29" />
                  <meta itemProp="name" content="Ruby Gore Tattoo Artist Reviews" />
                  ★ ★ ★ ★ ★
                </span>
              </div>
              <div className="hero-testimonial-images">
                <Image
                  src="/images/testimonials/andrea.png"
                  alt="Andrea"
                  className="testimonial-image"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/testimonials/alexa.png"
                  alt="Alexa"
                  className="testimonial-image"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/testimonials/kathleen.png"
                  alt="Kathleen"
                  className="testimonial-image"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className="carousel">
            <CoverflowCarousel images={carouselImages} />
          </div>
        </div>
      </div>
    </section>
  );
}

