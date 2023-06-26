import { Metadata } from 'next';
import '../assets/global.scss';
import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Joel Souza',
  description: 'Digital garden of Joel Souza',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className={`${roboto.className} ${montserrat.variable}`}>
          {children}
        </main>
      </body>
    </html>
  )
}
