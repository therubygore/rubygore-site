import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';
import CtaSection from '../_components/CtaSection';

export const metadata: Metadata = {
  title: 'Survivor Tattoo Project - The Ruby Gore | Mental Health Awareness',
  description: 'Free scar cover-up tattoos for mental health awareness. Supporting survivors of self-harm, abuse, and violence through meaningful art.',
};

export default function SurvivorTattooProjectPage() {
  const tocItems = [
    { href: '#about-project', label: 'About the Project' },
    { href: '#more-than-tattoo', label: 'More Than Just a Tattoo' },
    { href: '#transformations', label: 'Survivor Tattoo Transformations' },
    { href: '#power-of-tattoos', label: 'The Power of Mental Health Awareness Tattoos' },
    { href: '#mission', label: 'Our Mission' },
    { href: '#impact', label: 'Our Impact' },
    { href: '#status-update', label: 'Project Status Update' },
  ];

  return (
    <>
      <PageHero
        title="Survivor Tattoo Project"
        subtitle="Free scar cover-up tattoos for mental health awareness"
      />

      <TocLayout tocItems={tocItems}>
        <section id="about-project">
          <h2 className="text-title">About the Project</h2>
          <p>Ruby specializes in creating meaningful survivor tattoos and professional scar cover-up designs. As a mental health awareness advocate, she creates mental health tattoos and transformative artwork for those who have experienced self harm, abuse and violence. Each survivor tattoo is thoughtfully designed to help heal that part of their life, leaving clients with something beautiful and a reminder of their strength.</p>
        </section>

        <section id="more-than-tattoo">
          <h2 className="text-title">More Than Just a Tattoo</h2>
          <p>Every survivor tattoo tells a unique story of resilience. Whether covering scars or creating new symbolic artwork, these pieces represent healing, growth, and triumph. As a trauma-informed tattoo artist, Ruby understands that each survivor tattoo journey is deeply personal.</p>
        </section>

        <section id="transformations">
          <h2 className="text-title">Survivor Tattoo Transformations</h2>
          <p>Below you&apos;ll find examples of survivor tattoo projects and scar cover up work that Ruby has created. For more examples of her scar cover up tattoo designs, visit her Portfolio.</p>
          
          <div className="transformation-gallery">
            <div className="transformation-item">
              <img src="/images/portfolio/proofs/img-0006.jpg" alt="Left thigh - before" loading="lazy" />
              <p className="caption">Left thigh - before</p>
            </div>
            <div className="transformation-item">
              <img src="/images/portfolio/proofs/img-0015.jpg" alt="Left thigh - fresh lines" loading="lazy" />
              <p className="caption">Left thigh - fresh lines</p>
            </div>
            <div className="transformation-item">
              <img src="/images/portfolio/proofs/img-0010.jpg" alt="Left thigh - healed lines" loading="lazy" />
              <p className="caption">Left thigh - healed lines</p>
            </div>
            <div className="transformation-item">
              <img src="/images/portfolio/proofs/dotwork-botanical-scar-coverup-vegan-tattoo.jpg" alt="Left thigh - freshly completed" loading="lazy" />
              <p className="caption">Left thigh - freshly completed</p>
            </div>
            <div className="transformation-item">
              <img src="/images/portfolio/proofs/img-4806.jpg" alt="Left thigh - healed 2 years" loading="lazy" />
              <p className="caption">Left thigh - healed 2 years</p>
            </div>
            <div className="transformation-item">
              <img src="/images/portfolio/proofs/img-4790.jpg" alt="Right thigh - before" loading="lazy" />
              <p className="caption">Right thigh - before</p>
            </div>
            <div className="transformation-item">
              <img src="/images/portfolio/proofs/img-4799.jpg" alt="Right thigh - fresh lines (1st part)" loading="lazy" />
              <p className="caption">Right thigh - fresh lines (1st part)</p>
            </div>
            <div className="transformation-item">
              <img src="/images/portfolio/proofs/img-7822.jpg" alt="Right thigh - final elements lined, and healed. Fresh shading (3rd session)" loading="lazy" />
              <p className="caption">Right thigh - final elements lined, and healed. Fresh shading (3rd session)</p>
            </div>
          </div>
          
          <p style={{ marginTop: 'var(--spacing-xl)' }}><em>Please Note: Example scar cover-up photos have been shared with the client&apos;s full permission. Rest assured, any media (digital or traditional) will not be shared without your consent before, after or during any part of the process.</em></p>
        </section>

        <section id="power-of-tattoos">
          <h2 className="text-title">The Power of Mental Health Awareness Tattoos</h2>
          <p>Every piece created through our project, whether a survivor tattoo or mental health awareness tattoo, carries deep personal meaning. These designs serve as daily reminders of strength, growth, and the importance of mental health. Through thoughtful imagery and symbolism, each mental health tattoo becomes part of the wearer&apos;s healing journey.</p>
        </section>

        <section id="mission">
          <h2 className="text-title">Our Mission</h2>
          <p>The Survivor Tattoo Project: Out of the Darkness was created to raise mental health awareness and inspire body positivity year round. Once a month, Ruby gifts a free survivor tattoo or scar cover-up to those who have experienced self harm, abuse or violence. All tips and donations support our mission to:</p>
          <ul>
            <li>Advocate against regulations that would ban tattooing over scar tissue</li>
            <li>Fight censorship of self-harm awareness content</li>
            <li>Support local mental health awareness foundations</li>
          </ul>
        </section>

        <section id="impact">
          <h2 className="text-title">Our Impact</h2>
          <p>Each survivor tattoo creates ripples of change in our community. Through art and understanding, we&apos;re building a supportive space for healing and transformation. For those seeking transformation outside of the project, Ruby offers scar cover up tattoo services through regular bookings.</p>
        </section>

        <section id="status-update">
          <h2 className="text-title">Project Status Update</h2>
          <p><strong>We&apos;re Back!</strong> After relocating to the West Coast and opening our new studio—which took longer than we&apos;d hoped—we&apos;re excited to announce that the Survivor Tattoo Project will be reopening for applications very soon.</p>
          <p>We&apos;re currently finalizing our new streamlined application process to ensure it&apos;s as accessible and survivor-focused as possible. Whether you&apos;re seeking a scar cover-up or meaningful survivor tattoo, we&apos;re here to help you reclaim your story.</p>
          <p>Subscribe to our newsletter to be the first to know when applications officially open, plus receive project updates, mental health resources, and stories of transformation from our community.</p>
          <p>Your story matters, and we want to be ready to help you tell it.</p>
        </section>
      </TocLayout>

      <CtaSection
        title="Stay Updated"
        description="Subscribe to our newsletter to be notified when applications open"
        buttonText="SUBSCRIBE"
        buttonLink="#newsletter"
      />
    </>
  );
}

