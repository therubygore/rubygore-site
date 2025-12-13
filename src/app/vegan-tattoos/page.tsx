import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';
import CtaSection from '../_components/CtaSection';

export const metadata: Metadata = {
  title: 'Vegan Tattoos - The Ruby Gore | Cruelty-Free Tattooing',
  description: 'Completely cruelty-free tattooing with plant-based inks and products in Portland, Oregon',
};

export default function VeganTattoosPage() {
  const tocItems = [
    { href: '#cruelty-free', label: 'Cruelty Free Inside and Out' },
    { href: '#what-are-vegan-tattoos', label: 'What Are Vegan Tattoos?' },
    { href: '#can-tattoos-be-vegan', label: 'Can Tattoos Be Vegan?' },
    { href: '#vegan-tattoo-products', label: 'Vegan Tattoo Products' },
    { href: '#vegan-product-partners', label: 'Our Vegan Product Partners' },
  ];

  return (
    <>
      <PageHero
        title="Vegan Tattoos"
        subtitle="Completely cruelty-free tattooing with plant-based inks and products"
      />

      <TocLayout tocItems={tocItems}>
        <section id="cruelty-free">
          <h2 className="text-title">Cruelty Free Inside and Out</h2>
          <p>At Black Thorne Tattoo, we&apos;re committed to providing completely vegan and cruelty-free tattooing experiences. From the inks we use to the aftercare products we recommend, every aspect of your tattoo journey is designed to align with ethical and sustainable values.</p>
        </section>

        <section id="what-are-vegan-tattoos">
          <h2 className="text-title">What Are Vegan Tattoos?</h2>
          <p>Tattoos are becoming increasingly more popular as a form of art and self-expression. This, along with a Vegan lifestyle becoming more and more common, may have led you to hear of the term &quot;Vegan Tattooing&quot;. But what does it really mean?</p>
          
          <p>You might think that since you&apos;re the one getting the tattoo, there&apos;s no cruelty involved, (except maybe towards yourself...) but just like many cosmetic and personal products, there are ingredients and processes you may not know. You probably don&apos;t hear the word &quot;ink&quot; and associate it with animal products, but unfortunately that is the case with a lot of inks. A lot of people are unaware of the ingredients in inks because the FDA does not investigate these products unless a complaint is filed.</p>
        </section>

        <section id="can-tattoos-be-vegan">
          <h2 className="text-title">Can Tattoos Be Vegan?</h2>
          <p>Here are just a few of the possible things you could be getting buzzed into your skin:</p>
          <ul>
            <li>Bone char can be in some black inks</li>
            <li>Shellac can be used as a binding agent - resin secreted by the female lac bug</li>
            <li>Inks are often stabilized with glycerin or gelatin which are made from animal fat and connective tissues of animals</li>
          </ul>
          
          <p>Many tattoo inks also contain mercury and other heavy metals. While this may be common, that doesn&apos;t mean you can&apos;t get a tattoo! Just make sure you are going to artists, like Ruby Gore, who use Vegan ink brands that use plant-based products like Allegory Ink, Eternal Ink and more.</p>
        </section>

        <section id="vegan-tattoo-products">
          <h2 className="text-title">Vegan Tattoo Products</h2>
          <p>Another product to be aware of when getting tattooed is the stencil paper. Some stencil papers contain lanolin which is made from sheep&apos;s wool. A brand that is known for their Vegan stencil products is Stencil Anchored. If a Vegan brand is not available, consider asking if your artist can freehand the design!</p>
          
          <p>Finally, it is important to be aware of soap and aftercare. For example, SecondSkin Tattoo Aftercare is certified Vegan and organic. They have a variety of products offered such as their adhesive bandages, foaming wash, tattoo cream, etc. Not only will you heal your tattoo with the best products, but you&apos;ll sleep better at night knowing an animal was not harmed to make these products.</p>
        </section>

        <section id="vegan-product-partners">
          <h2 className="text-title">Our Vegan Product Partners</h2>
          <p>Below you will find all of the brands that we use during each tattoo procedure and trust to create Vegan and cruelty free tattoos, and yes, even our razors are cruelty free!</p>
          
          <div className="product-grid">
            <div className="product-card option-card">
              <img src="/images/vegan-products/secondskin-tac-vegan-tattoo.jpg" alt="SecondSkin Tattoo Aftercare Kit" loading="lazy" />
              <div className="text-title">SecondSkin</div>
              <p>Tattoo Aftercare Kit</p>
            </div>
            
            <div className="product-card option-card">
              <img src="/images/vegan-products/drbronners-baby-vegan-tattoo-toronto.jpg" alt="Dr Bronners Liquid Unscented Soap" loading="lazy" />
              <div className="text-title">Dr Bronners</div>
              <p>Liquid Unscented Soap</p>
            </div>
            
            <div className="product-card option-card">
              <img src="/images/vegan-products/eternal-tattoo-vegan-ink-toronto.jpg" alt="Eternal Ink Color Tattoo Ink" loading="lazy" />
              <div className="text-title">Eternal Ink</div>
              <p>Color Tattoo Ink</p>
            </div>
            
            <div className="product-card option-card">
              <img src="/images/vegan-products/allegory-vegan-tattoo-ink-toronto.jpg" alt="Allegory Ink Black Tattoo Ink" loading="lazy" />
              <div className="text-title">Allegory Ink</div>
              <p>Black Tattoo Ink</p>
            </div>
            
            <div className="product-card option-card">
              <img src="/images/vegan-products/stencil-anchored-vegan-tattoo-toronto.jpg" alt="Anchored Stencil Cream" loading="lazy" />
              <div className="text-title">Anchored</div>
              <p>Stencil Cream</p>
            </div>
            
            <div className="product-card option-card">
              <img src="/images/vegan-products/spirit-vegan-tattoo-stencil-toronto.jpg" alt="Spirit Stencil Paper" loading="lazy" />
              <div className="text-title">Spirit</div>
              <p>Stencil Paper</p>
            </div>
          </div>
        </section>
      </TocLayout>

      <CtaSection
        title="Ready to experience vegan tattooing?"
        description="Contact us to schedule your consultation."
        buttonText="Book Your Consultation"
        buttonLink="/apply-now"
      />
    </>
  );
}

