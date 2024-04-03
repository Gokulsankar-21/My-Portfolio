import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gokul Dev | Modern Developer',
  description: 'Gokulsankar Thangaraj is a modern full-stack developer and having hands-on experience with Reactjs, Nextjs in Modern Web Development and latest & greatest Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Home Page */}
        {children}
      </body>
    </html>
  )
}

/**
 * slogo for me - 
 * i am always working with project, 
 * I am always learning with new technology
 */

/**
 * one single page - athu than portfolio ku cool and great for me
 * 
 * ithu byteGrad - excellent and cool ah soldraru
 * na itha epdi expose panna poren nu - enaku idea ila 
 * ivaru kita - trendy and catchy learning ah kahtukalam -  modern dev ah na iruka mudyum
 */