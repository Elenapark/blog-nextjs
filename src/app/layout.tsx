import './globals.css';
import Header from '@/components/Header';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Elena's Blog ✨",
  description: 'Thanks for visiting my blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <Header />
        <section className="max-w-7xl mx-auto">{children}</section>
      </body>
    </html>
  );
}
