import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - JobGlob UAE & Gulf Jobs Portal',
  description: 'Read our privacy policy to understand how JobGlob handles and protects your personal information while using our job portal services.',
  keywords: ['privacy policy', 'data protection', 'user privacy', 'JobGlob privacy', 'UAE jobs privacy'],
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
