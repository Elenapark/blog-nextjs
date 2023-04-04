import Header from '@/components/Header';
import './globals.css';
import Link from 'next/link';
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
        <section>{children}</section>
      </body>
    </html>
  );
}
