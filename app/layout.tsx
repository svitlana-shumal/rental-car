import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';

const geistSans = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['600'],
});

export const metadata: Metadata = {
  title: 'RentalCar',
  description: 'Welcome to rental car',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {<Header />}
        {children}
      </body>
    </html>
  );
}
