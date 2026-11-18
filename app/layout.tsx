import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cluster Technology - Engineering Samples for the Connected World",
  description: "Cluster Technology, founded by Haven Carty, assembles and quality-assures engineering samples for teams researching and designing connected devices.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background">{children}</body>
    </html>
  )
}
