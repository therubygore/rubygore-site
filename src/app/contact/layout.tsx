import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - The Ruby Gore | Get in Touch',
  description: 'Ready to start your tattoo journey? Get in touch with Ruby Gore to discuss your vision and create something beautiful together.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

