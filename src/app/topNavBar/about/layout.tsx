import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About JobGlob - Leading Job Portal in UAE & Gulf Region',
  description: 'JobGlob is the premier job portal connecting talented professionals with top employers across UAE, Dubai, and the Gulf region. Discover your next career opportunity.',
  keywords: ['UAE jobs', 'Dubai careers', 'Gulf jobs', 'job portal UAE', 'employment Dubai', 'JobGlob about'],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
