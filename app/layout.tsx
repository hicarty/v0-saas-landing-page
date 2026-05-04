import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cluster Technology - Cloud to Embedded Smart Solutions",
  description: "Bridging Azure cloud infrastructure with Platform.io embedded systems. End-to-end IoT solutions for smart offices and property management.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background">{children}</body>
    </html>
  )
}
