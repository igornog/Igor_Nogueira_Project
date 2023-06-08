"use client"

import '../globals.css';
import { MedievalSharp } from 'next/font/google'

const medievalSharp = MedievalSharp({
  weight: "400",
  subsets: ['latin'],
})
export default function CharactersLayout({
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
