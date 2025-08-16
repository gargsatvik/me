import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Satvik Garg — Full-Stack Student Developer',
  description: 'Satvik Garg — BSc Computer Science (Year 1, First-Class). Full-stack student developer and event logistics lead. Projects: SCCP, PromptClash, AI Gym Buddy, Health App.',
  openGraph: {
    title: 'Satvik Garg — Full-Stack Student Developer',
    description: 'BSc Computer Science (Year 1, First-Class). Full-stack student developer and event logistics lead.',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
