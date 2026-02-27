'use client'

import { Bot, Heart } from 'lucide-react'

const links = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ],
  Community: [
    { name: 'Discord Server', href: 'https://discord.gg/UBqbzEXXcQ', external: true },
    { name: 'Add Bot', href: 'https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot', external: true },
  ],
  Legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hubix-500 to-accent-purple flex items-center justify-center shadow-lg shadow-hubix-500/25">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Hub<span className="gradient-text-static">ix</span>
              </span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed max-w-sm mb-4">
              The all-in-one Discord bot for moderation, tickets, giveaways, invite tracking, and complete shop management.
            </p>
            <div className="flex items-center gap-1 text-dark-500 text-xs">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              <span>for Discord communities</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-dark-400 hover:text-hubix-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-dark-700/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">
            © {new Date().getFullYear()} Hubix. All rights reserved.
          </p>
          <p className="text-xs text-dark-600">
            Not affiliated with Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}