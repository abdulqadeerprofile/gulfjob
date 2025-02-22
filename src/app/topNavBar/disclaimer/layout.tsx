import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - JobGlob UAE & Gulf Jobs Portal',
  description: 'Important disclaimers and legal information regarding the use of JobGlob job portal services, content accuracy, and third-party links.',
  keywords: ['disclaimer', 'legal notice', 'terms of use', 'JobGlob disclaimer', 'UAE jobs portal disclaimer'],
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
