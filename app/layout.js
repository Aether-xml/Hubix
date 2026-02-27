import './globals.css'

export const metadata = {
  title: 'Hubix — The All-in-One Discord Bot',
  description: 'Moderation, tickets, giveaways, invite tracking, and shop system. Everything your Discord server needs.',
  themeColor: '#5865F2',
  openGraph: {
    title: 'Hubix — The All-in-One Discord Bot',
    description: 'Everything your Discord server needs in one bot.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
