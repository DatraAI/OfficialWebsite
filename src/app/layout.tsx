import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Datra - Turn Your Knowledge Into an AI Assistant",
  description: "Upload 300 Q&As or past conversations, and Datra turns your expertise into a smart chatbot trained just for your business.",
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
} 