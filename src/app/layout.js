import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './hooks/useTheme';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Jenish Maru | Software Engineer',
  description: 'Full-stack Software Engineer specializing in Node.js, React.js, and modern web technologies. Building scalable backend solutions and intuitive user interfaces.',
  keywords: 'Jenish Maru, Software Engineer, Full-Stack Developer, Node.js, React.js, Next.js, MongoDB, PostgreSQL',
  authors: [{ name: 'Jenish Maru' }],
  creator: 'Jenish Maru',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/jenish7',
    title: 'Jenish Maru | Software Engineer',
    description: 'Full-stack Software Engineer specializing in Node.js, React.js, and modern web technologies.',
    siteName: 'Jenish Maru Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jenish Maru | Software Engineer',
    description: 'Full-stack Software Engineer specializing in Node.js, React.js, and modern web technologies.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
