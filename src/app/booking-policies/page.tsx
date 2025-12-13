import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';

export const metadata: Metadata = {
  title: 'Booking Policies - The Ruby Gore | Important Booking Information',
  description: 'Important information about our booking process and policies. Understand our deposit, cancellation, and rescheduling policies.',
};

export default function BookingPoliciesPage() {
  const tocItems = [
    { href: '#booking-fee-policy', label: 'Booking Fee Policy' },
    { href: '#why-important', label: 'Why Are Booking Fees Important?' },
    { href: '#why-come-off', label: 'Why Do Booking Fees Come Off the Cost of the Tattoo?' },
    { href: '#when-forfeited', label: 'When Booking Fees May Be Forfeited' },
    { href: '#client-responsibilities', label: 'Client Responsibilities' },
    { href: '#health-safety', label: 'Health and Safety' },
    { href: '#additional-info', label: 'Additional Information' },
  ];

  return (
    <>
      <PageHero
        title="Booking Policies"
        subtitle="Important information about our booking process and policies"
      />

      <TocLayout tocItems={tocItems}>
        <section id="booking-fee-policy">
          <h2 className="text-title">Booking Fee Policy</h2>
          <p>Booking fees are <strong>non-refundable</strong> and taken at the beginning of the booking process for each new client and returning clients who have completed work previously.</p>
          <p><strong>All appointments require a booking fee and all booking fees are non-refundable.</strong> Booking fees are factored into the total cost of a tattoo and come off the cost of the tattoo at the client&apos;s final session.</p>
          <p>Booking fees may be transferable if rescheduling with proper communication and/or advanced notice; they are generally forfeit on cancellations and reschedules within 72 hours of the appointment date but are handled on a case by case basis.</p>
        </section>

        <section id="why-important">
          <h2 className="text-title">Why Are Booking Fees Important?</h2>
          <p>What purpose do they serve and why are they non-refundable?</p>
          <ul>
            <li>Secures your spot in line on Ruby&apos;s waitlist</li>
            <li>Helps decrease no call/no shows/cancellations</li>
            <li>Partially covers loss if no call/no shows/cancellations happen</li>
          </ul>
        </section>

        <section id="why-come-off">
          <h2 className="text-title">Why Do Booking Fees Come Off the Cost of the Tattoo?</h2>
          <ul>
            <li>For pieces in progress, booking fees compensate for a portion of the non-tattoo related time and resources already dedicated to a project (i.e., client communications, drawing time, etc.)</li>
            <li>It serves as an incentive for clients to complete their tattoos, ensuring commitment to the process</li>
          </ul>
        </section>

        <section id="when-forfeited">
          <h2 className="text-title">When Booking Fees May Be Forfeited</h2>
          <p>Booking fees may be forfeited under Ruby&apos;s discretion for the following reasons:</p>
          <ul>
            <li>No call/no show</li>
            <li>Showing up more than 1 hour late with no communication</li>
            <li>Showing signs of intoxication</li>
            <li>Disruptive or rude behavior</li>
          </ul>
          <p>No shows will be given the opportunity to place another booking fee to re-secure their waitlist spot.</p>
        </section>

        <section id="client-responsibilities">
          <h2 className="text-title">Client Responsibilities</h2>
          <p>It is the client&apos;s responsibility to <strong>review all information</strong> on our website prior to booking. By placing a booking fee, you the client is agreeing that they have read and understand the information that is clearly stated on our website.</p>
        </section>

        <section id="health-safety">
          <h2 className="text-title">Health and Safety</h2>
          <p>Ruby will not take appointments with anyone who is sick, showing signs of COVID or has recently come into contact with someone infected. If this is the case we are happy to reschedule you. <strong>DO NOT</strong> show up to your appointment if you are ill or are showing any symptoms of illness for the safety of everyone.</p>
        </section>

        <section id="additional-info">
          <h2 className="text-title">Additional Information</h2>
          <p>Hop on over to our <a href="/faqs" style={{ color: '#333', textDecoration: 'underline' }}>frequently asked questions</a> page for more information on what to bring, what not to bring, appointment etiquette and more.</p>
        </section>
      </TocLayout>
    </>
  );
}

