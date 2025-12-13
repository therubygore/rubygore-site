import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '../_components/PageHero';
import CtaSection from '../_components/CtaSection';

export const metadata: Metadata = {
  title: 'About Ruby Gore - Portland Tattoo Artist | The Ruby Gore',
  description: 'Portland-based tattoo artist specializing in trauma-informed, custom artwork. Learn about Ruby\'s approach to creating unique tattoo experiences.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Ruby Gore"
        subtitle="Portland-based tattoo artist specializing in trauma-informed, custom artwork"
      />

      <div className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Creating Unique Experiences</h2>
              <p>
                A Portland based tattoo artist, Ruby strives to create an incredibly unique experience for each
                of her clients. By choosing to work with only one person a day, it gives her the opportunity to
                craft beautiful, form fitting custom tattoos, carefully designed to accentuate the natural
                curves of the body.
              </p>

              <p>
                Ruby&apos;s dedication to providing an unforgettable experience, alongside her rapidly growing
                reputation for specializing in scar cover-ups, highlights her commitment to fostering a safe and
                inclusive space. Her approach is deeply rooted in trauma awareness and accessibility, further
                amplified by her work with a nonprofit to raise awareness and support within the community.
              </p>

              <p>
                Navigating her own journey of self-acceptance as a neurodivergent, Ruby aims to help reduce
                stigma associated with mental health and neurological differences by working to improve
                education around accessibility and how to integrate a trauma aware approach into personal care
                practices.
              </p>
            </div>

            <div className="about-image">
              <Image
                src="/images/headshots/ruby-gore-vegan-tattoo-artist_orig.webp"
                alt="Ruby Gore - Vegan Tattoo Artist"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </>
  );
}

