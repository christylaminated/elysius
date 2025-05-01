import './globals.css';
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata = {
  title: 'Elysius - Advanced Sleep Recovery',
  description: 'Discover the hidden sleep disruption behind your anxiety, brain fog, and burnout with Elysius.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
