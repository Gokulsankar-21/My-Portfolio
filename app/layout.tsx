
import Header from '@/components/Header'
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
      <body className={`${inter.className} 
      bg-gray-50 text-gray-950  relative
      `}>
        
          {/* big blurry dots -  trendy design */}

        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full  sm:w-[68.75rem] blur-[10rem] -z-10"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] blur-[10rem] -z-10"></div>
        {/* header */}
        <Header />
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
 * ivaru kita - trendy and catchy learning ah kahtukalam -  modern dev ah na iruka 
 * mudyum 
 * 
 * @backtick
 * backtick - windows + `` this
 */
/**
 * @style_notes
 * mobile and tab size ku etha marri nama dots ah pakkathula right each other ;la set pandrom
 * in large screeen la gap perusa iruku so atheketha maari ella screen kum alignment ah set pandrom - Good Tricks
 */