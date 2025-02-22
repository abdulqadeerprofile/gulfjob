import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Report a Job Ad - JobGlob UAE & Gulf Jobs Portal',
  description: 'Report suspicious job listings or inappropriate content on JobGlob. Help us maintain a safe and reliable job portal for all users.',
  keywords: ['report job', 'suspicious listing', 'job scam report', 'inappropriate content', 'job safety'],
};

export default function JobReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
