import type { Metadata } from 'next'
import '@/app/globals.css'

import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
