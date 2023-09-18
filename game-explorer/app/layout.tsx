import '../styles/globals.css';
import type { Metadata } from 'next';
import { Footer, NavBar } from '../components';

export const metadata: Metadata = {
  title: 'GameExplorer',
  description:
    'A dynamic website that allows users to explore and provide feedback to videogames.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
