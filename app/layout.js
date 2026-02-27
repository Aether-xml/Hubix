import './globals.css'

export const metadata = {
  title: 'Hubix — The All-in-One Discord Bot',
  description: 'Powerful moderation, tickets, giveaways, invite tracking, and shop system. Everything your Discord server needs in one bot.',
  keywords: 'discord bot, moderation, tickets, giveaways, invite tracking, automod, shop',
  openGraph: {
    title: 'Hubix — The All-in-One Discord Bot',
    description: 'Powerful moderation, tickets, giveaways, invite tracking, and shop system.',
    type: 'website',
    url: 'https://hubix.bot',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubix — The All-in-One Discord Bot',
    description: 'Everything your Discord server needs in one bot.',
  },
  themeColor: '#5865F2',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg grid-pattern">
        {children}
      </body>
    </html>
  )
}