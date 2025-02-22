import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - JobGlob UAE & Gulf Jobs Portal',
  description: 'Read our terms and conditions for using JobGlob job portal services. Understand your rights and obligations as a user of our platform.',
  keywords: ['terms and conditions', 'user agreement', 'legal terms', 'JobGlob terms', 'service conditions'],
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
