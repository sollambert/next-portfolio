import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import HamburgerMenu from '@/components/HamburgerMenu';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Solomon Lambert',
  description: 'Solomon Lambert\'s development portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main
          className="mb-auto h-full"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}