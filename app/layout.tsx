import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Resume Generator',
  description: 'Generate a beautiful resume built with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}

