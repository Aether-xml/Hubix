'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bot, ExternalLink } from 'lucide-react'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isOpen)
    return () => document.body.classList.remove('mobile-menu-open')
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-hubix-500/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hubix-500 to-accent-purple flex items-center justify-center shadow-lg shadow-hubix-500/25 group-hover:shadow-hubix-500/40 transition-shadow duration-300">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-hubix-500 to-accent-purple rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Hub<span className="gradient-text-static">ix</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-hubix-500 group-hover:w-2/3 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://discord.gg/UBqbzEXXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm flex items-center gap-2 !py-2.5 !px-5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
                </svg>
                Discord
              </a>
              <a
                href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm flex items-center gap-2 !py-2.5 !px-5"
              >
                Add to Server
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-dark-800/50 border border-dark-700/50 text-dark-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-dark-900 border-l border-dark-700/50 shadow-2xl"
            >
              <div className="p-6 pt-20 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="px-4 py-3 rounded-xl text-dark-200 hover:text-white hover:bg-dark-800/50 transition-all font-medium"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <div className="h-px bg-dark-700/50 my-4" />

                <a
                  href="https://discord.gg/UBqbzEXXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center text-sm"
                >
                  Join Discord
                </a>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-sm"
                >
                  Add to Server
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}