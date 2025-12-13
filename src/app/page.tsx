import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from './_components/HeroSection';
import LogoGrid from './_components/LogoGrid';
import Testimonials from './_components/Testimonials';
import FaqAccordion from './_components/FaqAccordion';
import CtaSection from './_components/CtaSection';

export const metadata: Metadata = {
  title: 'The Ruby Gore - Portland Floral Tattoo Artist | Custom Tattoo Design',
  description: 'Custom floral tattoo artist in Portland, Oregon. Specializing in custom tattoo design, scar cover-ups, trauma-informed care, botanical and nature-inspired designs.',
};

const carouselImages = [
  { src: '/images/portfolio/proofs/portland-flower-tattoo-artist-peony-foxglove.jpeg', alt: 'Portland Flower Tattoo Artist Peony Foxglove' },
  { src: '/images/portfolio/proofs/color-floral-robin-chest-vegan-tattoo.jpg', alt: 'Color Floral Robin Chest Vegan Tattoo' },
  { src: '/images/portfolio/proofs/color-sunflower-sleeve-vegan-tattoo.jpg', alt: 'Color Sunflower Sleeve Vegan Tattoo' },
  { src: '/images/portfolio/proofs/color-texas-horned-lizard-vegan-tattoo.jpg', alt: 'Color Texas Horned Lizard Vegan Tattoo' },
  { src: '/images/portfolio/proofs/dotwork-botanical-scar-coverup-vegan-tattoo.jpg', alt: 'Dotwork Botanical Scar Coverup Vegan Tattoo' },
  { src: '/images/portfolio/proofs/dotwork-floral-bats-vegan-tattoo.jpg', alt: 'Dotwork Floral Bats Vegan Tattoo' },
  { src: '/images/portfolio/proofs/dotwork-forearm-flower-head-vegan-tattoo.jpg', alt: 'Dotwork Forearm Flower Head Vegan Tattoo' },
  { src: '/images/portfolio/proofs/dotwork-forearm-woman-rose-vegan-tattoo.jpg', alt: 'Dotwork Forearm Woman Rose Vegan Tattoo' },
  { src: '/images/portfolio/proofs/dotwork-moon-girls-shoulder-vegan-tattoo.jpg', alt: 'Dotwork Moon Girls Shoulder Vegan Tattoo' },
  { src: '/images/portfolio/proofs/floral-dotwork-vegan-peony-forearm-tattoo.jpg', alt: 'Floral Dotwork Vegan Peony Forearm Tattoo' },
  { src: '/images/portfolio/proofs/floral-dotwork-japanese-knot-vegan-tattoo.jpg', alt: 'Floral Dotwork Japanese Knot Vegan Tattoo' },
];

const testimonials = [
  {
    text: '"After living with chronic pain and trauma, I wanted to tell my story through tattoos. <span class="highlight">Ruby was the perfect fit — she developed amazing pieces through my input and storytelling.</span> I now have two full sleeves and a chest piece by her. 130 hours later, I can guarantee you an amazing experience and beautiful art."',
    author: 'Per H.',
    avatar: '/images/testimonials/per.png',
  },
  {
    text: '"<span class="highlight">This experience went above and beyond what I ever could have expected... Ruby handled a memorial tattoo with the utmost care and compassion</span>, while comprehensively navigating the complexities that come with covering up self-harm scars. This is an experience I will deeply cherish."',
    author: 'Meryl G.',
    avatar: '/images/testimonials/meryl.png',
  },
  {
    text: '"<span class="highlight">What sets Ruby apart is not just her incredible work, it\'s the way she creates such a great experience and warm atmosphere.</span> Whether you have a million questions or emotional reasons behind your tattoo, she approaches sessions with patience and understanding. I can\'t recommend her enough."',
    author: 'Drew E.',
    avatar: '/images/testimonials/drew.png',
  },
];

const benefits = [
  {
    icon: '/images/icons/design.svg',
    title: 'Thoughtfully &<br />Custom Designed',
    subtitle: 'Artwork as unique<br />as your story',
    description: 'Made to measure and designed thoughtfully to reflect your personality, journey, and vision.',
  },
  {
    icon: '/images/icons/nature.svg',
    title: 'Classically Trained<br />Nature Artist',
    subtitle: 'Museum-level technique,<br />inspired by nature',
    description: 'A nature focused fine arts background informs every design, rendered in striking detail.',
  },
  {
    icon: '/images/icons/approach.svg',
    title: 'No Rush<br />Approach',
    subtitle: 'One client per day,<br />all focus is on you',
    description: 'A calm, intentional experience with no distractions means the focus is entirely on you, your art and your experience.',
  },
  {
    icon: '/images/icons/care.svg',
    title: 'Trauma Informed<br />Care',
    subtitle: 'A healing-focused<br />tattoo experience',
    description: 'Specialized training in mental health and trauma helps Ruby to create a safe, respectful and inclusive space.',
  },
  {
    icon: '/images/icons/accessibility.svg',
    title: 'Accessibility<br />Focused',
    subtitle: 'A studio built for<br />all bodies and minds',
    description: 'Ruby\'s personal experience with neurodivergence ensures a safe space to express your needs and boundaries.',
  },
  {
    icon: '/images/icons/specialist.svg',
    title: 'Scar Cover-Up<br />Specialist',
    subtitle: 'Expert artistry for<br />all skin types',
    description: '10 years of experience creating empowering cover-ups for scars, stretch marks, and unique skin textures.',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="A Custom Floral Tattoo Designed Just For You"
        subtitle="Work one-on-one with Ruby to bring the vision of your perfect nature tattoo to life at our Portland tattoo studio, Black Thorne"
        ctaText="Check Out the Experience"
        ctaLink="/apply-now"
        carouselImages={carouselImages}
      />

      <LogoGrid />

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <h2>A Personalized Tattoo Experience from Start to Finish</h2>
            <p className="benefits-subtitle">
              Not all tattoo artists make getting tattooed an exceptional experience – here&apos;s how Ruby does
            </p>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <Image src={benefit.icon} alt="" width={56} height={56} />
                  </div>
                  <p className="text-title" dangerouslySetInnerHTML={{ __html: benefit.title }} />
                  <p className="benefit-title" dangerouslySetInnerHTML={{ __html: benefit.subtitle }} />
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <h3>Meet the Artist</h3>
            <h2>10 Years of Experience in Custom Tattoo Design</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                As a Portland based tattoo artist specializing in custom tattoo design, floral tattoos and scar
                cover-ups, Ruby strives to create an incredibly unique experience for each of her clients.
              </p>
              <p>
                By choosing to work with only one person a day, it gives her the opportunity to craft beautiful,
                form fitting pieces, carefully designed to accentuate the natural curves of each individual&apos;s
                unique body shape.
              </p>
            </div>
            <div className="about-image">
              <Image
                src="/images/headshots/ruby-gore-vegan-tattoo-artist_orig.webp"
                alt="Ruby Gore - Portland Tattoo Artist"
                width={400}
                height={500}
                style={{ width: '100%', borderRadius: '12px' }}
              />
              <div className="about-caption">
                <h4>Ruby Gore</h4>
                <p>Tattoo Artist & Owner of Black Thorne Tattoo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-to-work-section">
        <div className="container">
          <div className="how-to-work-content">
            <div className="how-to-work-text">
              <h2>A Simple, Stress-Free Process</h2>
              <p>
                Not all tattoo artists make getting tattooed an exceptional experience – here&apos;s how Ruby does
              </p>
            </div>

            <div className="how-to-work-image">
              <Image
                src="/images/black-thorne-portland-tattoo.jpg"
                alt="Portland Tattoo Process"
                width={1200}
                height={600}
                style={{ width: '100%', borderRadius: '20px' }}
              />
            </div>

            <div className="how-to-work-steps">
              <div className="step-item">
                <div className="step-icon">
                  <Image src="/images/icons/1.svg" alt="Step 1" width={42} height={42} />
                </div>
                <div className="step-content">
                  <h3>Book a Consultation</h3>
                  <p>Reserve a spot to share your ideas and vision.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-icon">
                  <Image src="/images/icons/2.svg" alt="Step 2" width={42} height={42} />
                </div>
                <div className="step-content">
                  <h3>Design Collaboration</h3>
                  <p>We&apos;ll create a one-of-a-kind tattoo design just for you.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-icon">
                  <Image src="/images/icons/3.svg" alt="Step 3" width={42} height={42} />
                </div>
                <div className="step-content">
                  <h3>Custom Tattoo Fitting</h3>
                  <p>Come relax in a private, comfortable studio while we bring your design to life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-content">
            <h2>Custom Tattoos</h2>
            <p>
              Not all tattoo artists make getting tattooed an exceptional experience – here&apos;s how Ruby does
            </p>

            <div className="portfolio-grid">
              <div className="portfolio-item">
                <Image
                  src="/images/portfolio/proofs/color-floral-robin-chest-vegan-tattoo.jpg"
                  alt="Color Floral Robin Chest Tattoo"
                  width={400}
                  height={400}
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/images/portfolio/proofs/floral-dotwork-skeleton-forearm-vegan-tattoo.jpg"
                  alt="Floral Dotwork Skeleton Forearm Tattoo"
                  width={400}
                  height={400}
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/images/portfolio/proofs/xray-dotwork-flower-vegan-thigh-tattoo.jpg"
                  alt="X-Ray Dotwork Flower Thigh Tattoo"
                  width={400}
                  height={400}
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/images/portfolio/proofs/dotwork-peony-arm-dark-skin-vegan-tattoo.jpg"
                  alt="Dotwork Peony Arm Dark Skin Tattoo"
                  width={400}
                  height={400}
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/images/portfolio/floral/botanical-tattoo-artist-portland-ruby.webp"
                  alt="Botanical Tattoo Artist Portland"
                  width={400}
                  height={400}
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/images/portfolio/floral/botanical-tattoo-portland-oregon-ruby-gore.webp"
                  alt="Botanical Tattoo Portland Oregon"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            <div className="portfolio-cta">
              <Link href="/apply-now" className="btn btn--red">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-content">
            <h2>Transparent Pricing, So You Know What to Expect</h2>
            <p>
              How pricing is structured so you know exactly what to expect and what options are available that
              will allow you to get started without compromising quality.
            </p>

            <div className="pricing-cards">
              <div className="pricing-card">
                <p>Touch-Ups</p>
                <p className="text-title">FREE</p>
                <p>For the first 6 months</p>
              </div>
              <div className="pricing-card">
                <p>Booking Deposit</p>
                <p className="text-title">$200</p>
                <p>Applied to final cost</p>
              </div>
              <div className="pricing-card">
                <p>Pricing Options</p>
                <p className="text-title">Flexible</p>
                <p>To fit your budget</p>
              </div>
            </div>

            <div className="project-types">
              <div className="project-type">
                <div className="project-images">
                  <div className="project-image">
                    <Image
                      src="/images/portfolio/proofs/color-floral-robin-chest-vegan-tattoo.jpg"
                      alt="Single Session Project"
                      width={200}
                      height={300}
                    />
                  </div>
                  <div className="project-image project-image-overlay">
                    <Image
                      src="/images/portfolio/proofs/floral-dotwork-skeleton-forearm-vegan-tattoo.jpg"
                      alt="Single Session Project"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="project-details">
                  <p className="text-title">Single Session Projects</p>
                  <p>Ideal for starting your collection or small standalone pieces.</p>
                  <p>• 4–6 hour session</p>
                  <p>• $800–$1,200</p>
                  <p>
                    <strong>Common placements:</strong> forearm, wrist, lower bicep, inner bicep, ankle, lower
                    calf
                  </p>
                </div>
              </div>

              <div className="project-type project-type-reverse">
                <div className="project-images">
                  <div className="project-image">
                    <Image
                      src="/images/portfolio/proofs/xray-dotwork-flower-vegan-thigh-tattoo.jpg"
                      alt="Multi-Session Project"
                      width={200}
                      height={300}
                    />
                  </div>
                  <div className="project-image project-image-overlay">
                    <Image
                      src="/images/portfolio/proofs/dotwork-peony-arm-dark-skin-vegan-tattoo.jpg"
                      alt="Multi-Session Project"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="project-details">
                  <p className="text-title">Multi-Session Projects</p>
                  <p>Medium to large scale pieces completed over multiple sessions.</p>
                  <p>• 12-20 hours</p>
                  <p>• $2,400 - $4,000</p>
                  <p>
                    <strong>Common placements:</strong> half arm/leg sleeve, chest pieces, ribs, calf/shin
                  </p>
                </div>
              </div>

              <div className="project-type">
                <div className="project-images">
                  <div className="project-image">
                    <Image
                      src="/images/portfolio/floral/botanical-tattoo-artist-portland-ruby.webp"
                      alt="Evolving Project"
                      width={200}
                      height={300}
                    />
                  </div>
                  <div className="project-image project-image-overlay">
                    <Image
                      src="/images/portfolio/floral/botanical-tattoo-portland-oregon-ruby-gore.webp"
                      alt="Evolving Project"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
                <div className="project-details">
                  <p className="text-title">Evolving Projects</p>
                  <p>Ideal for larger scale work that develops over time.</p>
                  <p>• 20+ hours</p>
                  <p>• Starting at around $4,000</p>
                  <p>
                    <strong>Common placements:</strong> back, torso, arm/leg sleeve, connected multi-area pieces
                  </p>
                </div>
              </div>
            </div>

            <div className="flexible-options">
              <h2>Flexible Options to Fit Your Budget</h2>
              <p>
                Ruby&apos;s goal is to collaborate with you to find the perfect solution. Below are some of the
                ways she offers flexibility to make your dream tattoo achievable.
              </p>

              <div className="flexible-grid">
                <div className="flexible-item">
                  <div className="flexible-icon">✓</div>
                  <p>
                    Simplify details by working with an etched style that captures the essence of your vision in
                    a unique vintage style
                  </p>
                </div>
                <div className="flexible-item">
                  <div className="flexible-icon">✓</div>
                  <p>
                    Adjust the size, intricacy or placement of the design to fit comfortably within your current
                    budget
                  </p>
                </div>
                <div className="flexible-item">
                  <div className="flexible-icon">✓</div>
                  <p>
                    Focus on a &quot;core&quot; portion of the tattoo & add more detail later allowing you to
                    get started without compromising quality
                  </p>
                </div>
                <div className="flexible-item">
                  <div className="flexible-icon">✓</div>
                  <p>
                    Break the tattoo into smaller sessions allowing you to spread the cost over time to better
                    fit your current budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-header">
              <h2>Answering Your Questions</h2>
              <p>
                Everything you need to know about booking, pricing, and preparing for your session. If
                you&apos;re wondering about something that&apos;s not here, just ask during your consultation.
              </p>
            </div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} theme="dark" />

      <CtaSection />
    </>
  );
}
