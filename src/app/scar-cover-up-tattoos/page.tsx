import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';
import CtaSection from '../_components/CtaSection';

export const metadata: Metadata = {
  title: 'Scar Cover-up Tattoos - The Ruby Gore | Trauma-Informed Artist',
  description: 'Trauma-informed scar cover-up tattooing in Portland, Oregon. Specializing in covering scars with beautiful, meaningful artwork.',
};

export default function ScarCoverUpTattoosPage() {
  const tocItems = [
    { href: '#can-cover-scars', label: 'Can you cover up scars with tattoos?' },
    { href: '#is-it-painful', label: 'Is tattooing over scars painful?' },
    { href: '#what-happens', label: 'What happens if you tattoo over a scar?' },
    { href: '#stretch-marks', label: 'Can you tattoo over old stretch marks?' },
    { href: '#find-artist', label: 'How do I find a tattoo artist who specializes in scar cover-ups?' },
    { href: '#how-long-wait', label: 'How long do I need wait to cover up a scar with a tattoo?' },
    { href: '#camouflage-vs-cover', label: 'What is the difference between scar camouflage and scar cover-up tattoos?' },
    { href: '#self-harm-scars', label: 'Can I cover my self-harm scars with a tattoo?' },
    { href: '#what-design', label: 'What tattoo should I get to cover scars?' },
    { href: '#cost', label: 'How much do scar cover-up tattoos cost?' },
  ];

  return (
    <>
      <PageHero
        title="Scar Cover-up Tattoos"
        subtitle="Trauma-informed scar cover-up tattooing in Portland"
      />

      <TocLayout tocItems={tocItems}>
        <section id="can-cover-scars">
          <h2 className="text-title">Can you cover up scars with tattoos?</h2>
          <p>Yes, most scars can be covered up with tattoos, though the success depends on several factors including the scar&apos;s age, depth, and texture. Scar tattoo artists such as Ruby specialize in working with different types of scar tissue and can assess whether your scar is suitable for tattooing.</p>
          <p>While some scars may require multiple sessions or special techniques, experienced artists can often achieve remarkable results in concealing or incorporating the scar into the design.</p>
        </section>

        <section id="is-it-painful">
          <h2 className="text-title">Is tattooing over scars painful?</h2>
          <p>Tattooing over scars typically involves a different sensation than tattooing regular skin, but the level of discomfort varies greatly depending on the scar&apos;s age, type, and location.</p>
          <p>While scar tissue can be more sensitive in some cases, many clients report that it&apos;s actually less painful than tattooing normal skin because scar tissue often has reduced nerve endings. However, each person&apos;s experience is unique, and a skilled scar cover-up tattoo artist will work with you to ensure your comfort throughout the process.</p>
        </section>

        <section id="what-happens">
          <h2 className="text-title">What happens if you tattoo over a scar?</h2>
          <p>The scar cover-up tattoo process begins with a detailed consultation where your tattoo artist specializing in scar cover-ups will examine your scar and discuss design options. During the tattoo session, the artist will use specialized techniques developed specifically for scar tissue, which often requires different needle depths and angles than regular tattooing.</p>
          <p>They may need to work more slowly and carefully around the scar tissue, and might use specific color combinations to ensure the best coverage. Some scars may require multiple sessions to achieve optimal results, especially for larger or more complex cover-ups.</p>
        </section>

        <section id="stretch-marks">
          <h2 className="text-title">Can you tattoo over old stretch marks?</h2>
          <p>Yes, stretch marks can be effectively covered with tattoos, though they require specific techniques different from other scar cover-ups. Since stretch marks are a type of scarring that typically appears in patterns, tattoo designs can be strategically planned to work with these patterns rather than against them.</p>
          <p>The best tattoo designs for covering stretch marks often include natural elements like flowers or abstract patterns that can follow the natural flow of the stretch marks. The success of tattooing over stretch marks depends on their age, color, and depth, with older, silver-white stretch marks typically being easier to work with than newer, red ones.</p>
        </section>

        <section id="find-artist">
          <h2 className="text-title">How do I find a tattoo artist who specializes in scar cover-ups?</h2>
          <p>Finding the right scar cover up tattoo artist requires research and patience. Start by searching specifically for &quot;scar tattoo artists&quot; or &quot;tattoo artists specializing in scar cover ups&quot; in your area. Look for artists who have portfolios featuring before-and-after photos of scar cover-up work.</p>
          <p>Many specialists maintain online galleries of their scar cover-up tattoos and may have specific experience with different types of scars. During consultations, don&apos;t hesitate to ask about their experience with scar tissue, their specific techniques, and to see examples of healed work. The best artists will be transparent about what results you can realistically expect and will take time to understand your goals.</p>
        </section>

        <section id="how-long-wait">
          <h2 className="text-title">How long do I need wait to cover up a scar with a tattoo?</h2>
          <p>A scar needs to be fully healed before it can be tattooed over, which typically takes at least one year from the time of injury or surgery. During this period, the scar should complete its maturation process - becoming flat, pale, and stable in texture.</p>
          <p>Signs that your scar is ready include: no changes in color for several months, no tenderness or sensitivity, and a stable, smooth texture. Attempting to tattoo over an unhealed scar can lead to complications and poor results, so patience during the healing process is crucial.</p>
        </section>

        <section id="camouflage-vs-cover">
          <h2 className="text-title">What is the difference between scar camouflage and scar cover-up tattoos?</h2>
          <p>Scar camouflage and scar cover-up tattoos are two distinct approaches to making scars less visible. Scar camouflage is a cosmetic tattooing technique that matches the color of your natural skin tone to help the scar blend in, while scar tattoos are decorative pieces of artwork that cover the scar with a design.</p>
          <p>A scar cover-up tattoo transforms the area into an intentional piece of art, whereas camouflage aims to make the scar appear as close to your natural skin as possible.</p>
        </section>

        <section id="self-harm-scars">
          <h2 className="text-title">Can I cover my self-harm scars with a tattoo?</h2>
          <p>Covering self-harm scars with tattoos is a deeply personal decision that requires both physical and emotional readiness. From a technical standpoint, these scars can be successfully covered by experienced scar tattoo artists who understand the unique challenges of working with this type of scar tissue.</p>
          <p>The healing journey is different for everyone, so it&apos;s important to wait until you feel emotionally ready and your scars are fully healed - typically at least one year old. Many tattoo artists who specialize in covering self-harm scars like Ruby create a safe, understanding environment and can help design meaningful artwork that represents healing and growth.</p>
        </section>

        <section id="what-design">
          <h2 className="text-title">What tattoo should I get to cover scars?</h2>
          <p>Choosing the right design for a scar cover-up tattoo requires careful consideration of the scar&apos;s characteristics and location. Darker, more intricate designs typically work best for hiding scars, as they draw attention to the artwork rather than the underlying tissue.</p>
          <p>Work with your scar tattoo artist to select designs that can incorporate the scar&apos;s texture naturally - for example, floral patterns can use raised scar tissue for dimension, while geometric designs can effectively camouflage irregular scar shapes. Remember that larger designs often work better than smaller ones, as they provide more coverage and allow the artist to work around the scar&apos;s unique properties.</p>
        </section>

        <section id="cost">
          <h2 className="text-title">How much do scar cover-up tattoos cost?</h2>
          <p>Scar cover-up tattoos typically cost more than regular tattoos due to the specialized techniques and experience required. The price varies depending on the scar&apos;s size, complexity, and the number of sessions needed. Most scar cover up tattoo artists charge either by the hour or by the project, with rates ranging from $200-$400 per hour.</p>
          <p>Complex cover-ups might require multiple sessions and special techniques, which can increase the overall cost. It&apos;s best to schedule a consultation with a specialist to get an accurate quote for your specific situation.</p>
        </section>
      </TocLayout>

      <CtaSection
        title="Ready to start your tattoo journey?"
        description="Book your consultation and let's create something beautiful together."
        buttonText="→ Book Your Session"
        buttonLink="/apply-now"
      />
    </>
  );
}

