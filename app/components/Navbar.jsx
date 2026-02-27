'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0b0d10]/90 backdrop-blur-md border-b border-[#1e2130]/80'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-[#5865F2] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-display font-bold text-[#eaecf2]">
                Hubix
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="px-3.5 py-2 text-sm text-[#6b7084] hover:text-[#eaecf2] transition-colors rounded-lg"
                >
                  {l.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href="https://discord.gg/UBqbzEXXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !py-2 !px-4 !text-sm"
              >
                Discord
              </a>
              <a
                href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary !py-2 !px-4 !text-sm"
              >
                Add to Server
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[2px] bg-[#6b7084] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block w-5 h-[2px] bg-[#6b7084] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[2px] bg-[#6b7084] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-40 bg-[#12141a] border-b border-[#1e2130] shadow-xl"
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-[#c4c9d4] hover:text-white hover:bg-[#1e2130] rounded-xl transition-colors text-sm font-medium"
                  >
                    {l.name}
                  </a>
                ))}
                <div className="h-px bg-[#1e2130] my-2" />
                <div className="flex flex-col gap-2 pt-1 pb-2">
                  <a
                    href="https://discord.gg/UBqbzEXXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost !text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Join Discord
                  </a>
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary !text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Add to Server
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
