import './globals.css';
import { MedievalSharp } from 'next/font/google'

const medievalSharp = MedievalSharp({
  weight: "400",
  subsets: ['latin'],
})

export const metadata = {
  title: 'LotR',
  description: 'Lord of the Rings',
}

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={medievalSharp.className}>
          {children}
        </body>
    </html>
  )
}
