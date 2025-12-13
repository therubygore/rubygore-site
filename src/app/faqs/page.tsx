import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import FaqAccordion from '../_components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQs - The Ruby Gore | Tattoo Booking Questions',
  description: 'Frequently asked questions about booking, pricing, and preparing for your tattoo session with Ruby Gore.',
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking, pricing, and preparing for your session"
      />

      <section className="faq-section faq-page">
        <div className="container">
          <div className="faq-content">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}

