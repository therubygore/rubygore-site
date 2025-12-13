import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '../_components/PageHero';
import CtaSection from '../_components/CtaSection';

export const metadata: Metadata = {
  title: 'Pricing - The Ruby Gore | Transparent Tattoo Pricing',
  description: 'Transparent pricing for custom tattoo artwork. Learn about session lengths, deposits, and pricing tiers.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero title="Pricing" subtitle="Transparent pricing for custom tattoo artwork" tight />

      <div className="pricing-section">
        <div className="container">
          <div className="pricing-overview">
            <div className="pricing-highlights">
              <div className="highlight-item">
                <div className="text-title">Booking Deposit</div>
                <p className="price">$200</p>
                <p>Applied to final cost</p>
              </div>
              <div className="highlight-item">
                <div className="text-title">Session Length</div>
                <p className="price">4-6 Hrs</p>
                <p>One client per day</p>
              </div>
              <div className="highlight-item">
                <div className="text-title">Custom Artwork</div>
                <p className="price">100%</p>
                <p>Tailor-made for you</p>
              </div>
            </div>

            <div className="pricing-info">
              <p>
                Sessions can typically last anywhere between 4-6 hours and hourly pricing is calculated at the
                end of each day = time spent tattooing x $200 hourly rate.
              </p>

              <p>
                Booking fees are factored into the total cost of a tattoo and come off the cost of the tattoo
                at the final session. For more information on how booking fees work, please see our{' '}
                <Link href="/booking-policies">Policies</Link> page.
              </p>

              <h3>Factors that determine how long a tattoo takes include:</h3>
              <ul>
                <li>size</li>
                <li>complexity</li>
                <li>placement</li>
              </ul>

              <h3>Factors that tend to increase tattoo time:</h3>
              <ul>
                <li>color or black-fill</li>
                <li>fine-line and delicate detail</li>
                <li>delicate skin (scars, stretch marks, etc.)</li>
              </ul>

              <h3>Factors that are difficult to account for that may increase time estimate:</h3>
              <ul>
                <li>changes to initial design or placement</li>
                <li>pain tolerance and ability to sit still</li>
              </ul>
            </div>
          </div>

          <div className="pricing-tiers">
            <div className="pricing-tier">
              <h2>SINGLE SESSION PROJECTS</h2>
              <p className="tier-description">Perfect for small standalone pieces or starting your collection</p>
              <p className="tier-range">(4-6 hours: $800-$1,200)</p>

              <div className="tier-options">
                <div className="option-card">
                  <Image
                    src="/images/portfolio/pig-tattoo-portland-oregon-ruby-gore_orig.webp"
                    alt="Signature Dotwork"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                  <h3>Signature Dotwork</h3>
                  <p className="price">Starting at: $800</p>
                  <p>Small to medium botanicals, single moths, small animals</p>
                  <p>
                    <strong>Common placements:</strong> Forearm, wrist, lower bicep, inner bicep, ankle, lower
                    calf
                  </p>
                </div>

                <div className="option-card">
                  <Image
                    src="/images/portfolio/lizard-tattoo-portland-oregon-ruby-gore-1_orig.webp"
                    alt="Combo + Color"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                  <h3>Combo + Color</h3>
                  <p className="price">Starting at: $1000</p>
                  <p>Similar sizes and subject matter, with slightly longer sessions depending on saturation</p>
                  <p>May require second session or touch up</p>
                </div>
              </div>
            </div>

            <div className="pricing-tier">
              <h2>MULTI-SESSION PIECES</h2>
              <p className="tier-description">Medium to large scale pieces completed over multiple sessions</p>
              <p className="tier-range">(12-20 hours: $2,400 - $4,000)</p>

              <div className="tier-options">
                <div className="option-card">
                  <Image
                    src="/images/portfolio/chickadee-tattoo-portland-oregon-ruby-goredccf.webp"
                    alt="Signature Dotwork"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                  <h3>Signature Dotwork</h3>
                  <p className="price">Starting at: $2,400 • 12-18 hrs</p>
                  <p>Complex floral compositions, birds with full wing spans</p>
                  <p>
                    <strong>Common placements:</strong> Half sleeves, large shoulder + thigh pieces, chest
                    pieces, ribs, full calf/shin
                  </p>
                </div>

                <div className="option-card">
                  <Image
                    src="/images/portfolio/bat-tattoo-portland-oregon-ruby-gore.webp"
                    alt="Combo + Color"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                  <h3>Combo + Color</h3>
                  <p className="price">Starting at: $2,800 • 15-20 hrs</p>
                  <p>Includes similar scale projects</p>
                  <p>
                    Combination of dotwork and strategically placed color or rich color layering/full color
                    saturation on smaller pieces
                  </p>
                </div>
              </div>
            </div>

            <div className="pricing-tier">
              <h2>EVOLVING PROJECTS</h2>
              <p className="tier-description">Larger scale work that develops over time</p>
              <p className="tier-range">(20+ hours: Starting at $4,000)</p>

              <div className="tier-options">
                <div className="option-card">
                  <Image
                    src="/images/portfolio/lion-tattoo-portland-oregon-ruby-gore_orig.jpg"
                    alt="Signature Dotwork"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                  <h3>Signature Dotwork</h3>
                  <p className="price">Starting at: $4,000 • 20+ hrs</p>
                  <p>Portraits, detailed scenes</p>
                  <p>
                    <strong>Common placements:</strong> Full back, full torso, full arm/leg sleeve, connected
                    multi-area pieces
                  </p>
                </div>

                <div className="option-card">
                  <Image
                    src="/images/portfolio/sunflower-tattoo-portland-oregon-ruby-gore_orig.webp"
                    alt="Combo + Color"
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                  <h3>Combo + Color</h3>
                  <p className="price">Starting at: $4,200 • 22+ hrs</p>
                  <p>Includes similar scale projects</p>
                  <p>
                    Combination of dotwork and strategically placed color or rich color layering/full color
                    saturation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title="Ready to take the next step in your tattoo journey?"
        description="Let's create something unique together"
        buttonText="I'M READY!"
        buttonLink="/contact"
      />
    </>
  );
}

