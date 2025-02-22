import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - JobGlob UAE & Gulf Jobs Portal',
  description: 'Get in touch with JobGlob support team. We are here to help you with your job search and recruitment needs in UAE and Gulf region.',
  keywords: ['contact JobGlob', 'support', 'help desk', 'customer service', 'UAE jobs contact'],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
