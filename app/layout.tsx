import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Products from '@/components/Products'

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
      <body className={inter.className}>
        <Navbar />
        <Products/>
        <Footer />
      </body>
    </html>
  )
}