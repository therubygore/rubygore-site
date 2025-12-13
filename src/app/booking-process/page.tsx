import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';
import CtaSection from '../_components/CtaSection';

export const metadata: Metadata = {
  title: 'Booking Process - The Ruby Gore | How to Book Your Tattoo',
  description: 'Learn how to book your unique tattoo experience with Ruby Gore. From consultation to your final session.',
};

export default function BookingProcessPage() {
  const tocItems = [
    { href: '#approach', label: 'Our Approach' },
    { href: '#specialties', label: 'Specialties' },
    { href: '#concepts', label: 'Concepts' },
    { href: '#artwork', label: 'Artwork & Inspiration' },
    { href: '#deposits', label: 'Deposits' },
    { href: '#waitlist', label: 'Waitlist' },
    { href: '#consultations', label: 'Consultations & Booking' },
    { href: '#experience', label: 'Experience' },
    { href: '#health-safety', label: 'Health & Safety' },
    { href: '#questions', label: 'Questions' },
  ];

  return (
    <>
      <PageHero
        title="Booking Process"
        subtitle="How to book your unique tattoo experience with Ruby"
      />

      <TocLayout tocItems={tocItems}>
        <section id="approach">
          <h2 className="text-title">Our Approach</h2>
          <p>Ruby prides herself in providing a unique and unforgettable day for each client that is far from a traditional tattoo experience. To achieve this, there are a few things that we do a little differently to ensure we create a one of a kind experience crafted just for you.</p>
        </section>

        <section id="specialties">
          <h2 className="text-title">Specialties</h2>
          <p>As a huge advocate for mental health, Ruby is extremely passionate about and proficient in taking on scar cover-ups. To help raise awareness year-round, Ruby&apos;s <a href="/survivor-tattoo-project">Survivor Project: Out of the Darkness</a> was born. A monthly raffle offering one free tattoo or scar cover-up to survivors of self-harm, abuse, assault, and violence.</p>
          <p>Ruby is not currently taking on cover-ups of tattoos unless they are either part of her Survivor Project or for an abuse survivor. Please be sure to link clear photos of the current tattoo as well as your new tattoo concept (flexibility is a must) when submitting your request.</p>
        </section>

        <section id="concepts">
          <h2 className="text-title">Concepts</h2>
          <p>Ruby specializes in a naturalist/scientific illustrative style in black and grey dotwork as well as color. She is looking to tattoo pieces that inspire her creatively and contribute to a strong artistic portfolio. She strives to create beautiful, meaningful work for each of her clients and appreciates a measure of artistic freedom that will allow her to do so.</p>
          <p>She is interested in creating unique pieces that include (but not limited to) the following subjects:</p>
          <p>Portraits, lady faces, surreal collages, unique flowers or botanical arrangements, pieces telling a story preferably including subject matter such as reptiles, amphibians, bugs, fruit, vegetables, animals, skulls, astronomy, oddities, anything creepy, spooky or macabre.</p>
        </section>

        <section id="artwork">
          <h2 className="text-title">Artwork &amp; Inspiration</h2>
          <p>Please note that drawings are not sent ahead of appointments. All artwork is done the week of and will be reviewed either at your consultation or first session. Because of this, we strongly encourage an open minded approach coupled with a clear description of the elements you would like included and as much reference material as possible when submitting your project proposal so that Ruby can bring your vision to life.</p>
          <p>That being said, it is important for clients to understand that the reference material they are providing is to only be used as a guide to direct Ruby visually. Ruby does not copy other artist&apos;s work. All pieces drawn are custom, one of a kind and in Ruby&apos;s style.</p>
          <p>Each tattoo is made to measure and executed with the highest attention to detail. To ensure that your artwork is perfectly tailored, we will review your design and do a final fitting on the morning of your appointment before getting started. <em>Please keep in mind that this approach isn&apos;t for everyone, but is the secret ingredient to allowing Ruby to create a truly beautiful and unique piece for you.</em></p>
        </section>

        <section id="deposits">
          <h2 className="text-title">Deposits</h2>
          <p>Once your tattoo concept and project proposal have been approved, you will receive a confirmation letter providing directions on how to place your deposit. To secure your place in line on the waitlist, a $200 USD deposit is required. After your deposit has been received, you will receive a waitlist confirmation letter as well as a link to our appointment guide which will provide you with all of the information necessary to prepare for your appointments.</p>
          <p>Note that all deposits are a non-refundable fee, however may be transferable with proper communication. If you have not had your first session yet and are interested in learning more about our policy on transferring deposits, please reach out to us via email for more information and to discuss options that may be available to you. We strongly recommend reviewing our <a href="/booking-policies">deposit and booking fee policies</a> to make sure that our process is a good fit for you.</p>
          <p>At your final session, you will be given the opportunity to either cash your deposit out and apply it to the final cost of your tattoo, or keep your deposit on record to ensure your ability to book in the future regardless of whether Ruby&apos;s books are opened or closed.</p>
        </section>

        <section id="waitlist">
          <h2 className="text-title">Waitlist</h2>
          <p>With our new waitlist system, your place is secured in chronological order based on the date your booking fee was submitted. Unlike our old booking system, your booking fee will never expire. To allow clients who have ongoing pieces that require multiple sessions to book every few weeks, appointments are scheduled 1-2 months at a time.</p>
          <p>Because of this, and the possibility that a client may decide to expand upon their original tattoo concept, wait times are roughly estimated to the best of our ability but are not guaranteed. If you are on the waitlist with a booking fee on file and would like to know how far down the list you are, please feel free to email us and we will do our best to give you an estimated time frame. <em>If you are interested in getting in sooner, we recommend joining our last minute cancellation list.</em></p>
        </section>

        <section id="consultations">
          <h2 className="text-title">Consultations &amp; Booking</h2>
          <p>Clients are invited into the studio prior to their first tattoo appointment to participate in an immersive design process, where they will work one-on-one with Ruby to create their custom fitted artwork in a far from traditional experience. We will reach out to you about a month in advance with the booking platform link and our Appointment Guide which will provide you with all of the necessary information to select dates and prepare you for your upcoming appointments.</p>
          <p><em>We recommend booking both appointments at the same time and selecting a date for your one-on-one consultation that&apos;s about a week prior to your appointment. If you are not local or unable to attend your consultation in person, video consultations are also available.</em></p>
          <p>If you would like to schedule a consultation with Ruby prior to booking, please be sure to make a note either when submitting your project proposal or after receiving your waitlist confirmation letter. In the event that your appointment needs to be rescheduled, you will be given as much notice as humanly possible. If you are traveling, insurance is strongly encouraged as a safeguard against unforeseen circumstances or last minute schedule changes.</p>
        </section>

        <section id="experience">
          <h2 className="text-title">Experience</h2>
          <p>We only book one person per day, so 100% of the attention is on you and your tattoo. This allows ample time prior to beginning to discuss changes, to ensure that your tattoo fits your body nicely, that it is designed the way you want it, and to make sure that any possible changes will translate properly on skin.</p>
          <p>To help relieve any pressure or feeling of being rushed, please plan on spending the entire day at the studio regardless of how big or small your tattoo is. This helps Ruby to not feel rushed so that she can focus on creating a one of a kind piece for you that both of you are proud of.</p>
          <p>Please keep in mind that Ruby will only ever tattoo at her very best as she respects your body and the permanence and art of tattooing. If she feels that you need to come back to finish your tattoo for whatever reason please respect her decision and boundaries.</p>
          <p>Your day with Ruby will include:</p>
          <ul>
            <li>Original artwork designed to fit your body</li>
            <li>A one-on-one fine tuning consultation prior to your appointment</li>
            <li>A relaxed environment focused only on you with no rush, as we only book one person a day</li>
            <li>100% Vegan procedure and aftercare products</li>
            <li>Specialized numbing products that help most clients to sit comfortably during shading and color (applied after the initial linework)</li>
            <li>Ample time after your appointment to ask any final questions, review aftercare and snap a professional photograph of your new piece</li>
            <li>Free touch-ups</li>
          </ul>
        </section>

        <section id="health-safety">
          <h2 className="text-title">Health &amp; Safety</h2>
          <p>Rest assured that your health and safety are always our highest priority, and we have long been providing safe services before COVID came about. We have since made some changes to our <a href="/enhanced-cleaning">safety protocols and guidelines</a> to keep you extra safe during these unprecedented times.</p>
        </section>

        <section id="questions">
          <h2 className="text-title">Questions</h2>
          <p>If you have questions about our process before submitting your request form, please make sure that you&apos;ve read through our Booking Process as well as our other resources (found in the website navigation or by using the search bar in the top right) to get answers to your questions faster, as well as help us cut down on emails. We really appreciate it! :)</p>
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

