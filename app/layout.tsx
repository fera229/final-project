import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../components/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Diabuddy',
  description: 'Manage your diabetes with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full flex flex-col`}
      >
        <Header />
        <div className="flex-grow flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
