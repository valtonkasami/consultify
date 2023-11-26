import Image from 'next/image'
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/index'

export const metadata: Metadata = {
  title: 'Consultify',
  description: 'We are a client-focused agency dedicated to delivering satisfaction through creativity and hard work.',
  icons: {
    icon: 'clarity.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className='bg-black'>{children}</body>
    </html>
  )
}
