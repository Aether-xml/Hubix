export default function Footer() {
  const cols = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'FAQ', href: '#faq' },
    ],
    Community: [
      { name: 'Discord', href: 'https://discord.gg/UBqbzEXXcQ', ext: true },
      { name: 'Add Bot', href: 'https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot', ext: true },
    ],
    Legal: [
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
    ],
  }

  return (
    <footer className="border-t border-[#1e2130]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#5865F2] flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-display font-bold text-[#eaecf2]">Hubix</span>
            </div>
            <p className="text-xs text-[#6b7084] leading-relaxed max-w-[200px]">
              The all-in-one Discord bot for your community.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-[#eaecf2] uppercase tracking-wider mb-3">{title}</h4>
              <ul className="space-y-2">
                {items.map(l => (
                  <li key={l.name}>
                    <a
                      href={l.href}
                      target={l.ext ? '_blank' : undefined}
                      rel={l.ext ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[#6b7084] hover:text-[#5865F2] transition-colors"
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[#1e2130] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[#6b7084]">© {new Date().getFullYear()} Hubix. All rights reserved.</p>
          <p className="text-[11px] text-[#3a3d4d]">Not affiliated with Discord Inc.</p>
        </div>
      </div>
    </footer>
  )
}
