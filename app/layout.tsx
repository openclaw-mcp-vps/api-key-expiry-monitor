import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Expiry Monitor — Get alerts before API keys expire',
  description: 'Monitor API key expiration dates across multiple services, send proactive alerts, and track usage patterns to predict renewal needs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3cf8a7c7-5091-4618-bca2-8d9102b8aa19"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
