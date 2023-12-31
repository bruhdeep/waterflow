import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Waterflow',
  description: 'Assessment for Waterflow Tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
        <Navbar />
        <main className='pt-10 pb-32'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
