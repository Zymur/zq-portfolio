import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Zymur C. Quisado | Software Developer',
  description: 'Portfolio of Zymur C. Quisado — independent developer, project manager and BS Information Technology student. Explore web and mobile projects, technical skills, and achievements.',
  icons: { icon: '/logo.png' },
  openGraph: { title: 'Zymur C. Quisado | Portfolio', description: 'Software development, product thinking, and practical engineering.' }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>; }
