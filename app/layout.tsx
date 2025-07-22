import type React from "react"
import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "Portafolio | Rubén Lezama",
  description: "Full-stack Developer Portfolio",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="bg-[#16131F] text-white font-mono">{children}</body>
    </html>
  )
}
