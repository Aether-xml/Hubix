'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Ticket, Gift, Users, Sparkles, Zap } from 'lucide-react'

const floatingIcons = [
  { Icon: Shield, color: '#5865F2', x: '10%', y: '20%', delay: 0 },
  { Icon: Ticket, color: '#00d4ff', x: '85%', y: '15%', delay: 0.5 },
  { Icon: Gift, color: '#a855f7', x: '5%', y: '70%', delay: 1 },
  { Icon: Users, color: '#10b981', x: '90%', y: '65%', delay: 1.5 },
  { Icon: Zap, color: '#f59e0b', x: '75%', y: '80%', delay: 2 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hubix-500/[0.07] rounded-full blur-[120px]" />
        {/* Secondary orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-purple/[0.05] rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent-cyan/[0.04] rounded-full blur-[100px] animate-morph" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, color, x, y, delay }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.8, duration: 0.5 }}
          >
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm animate-float`}
              style={{
                background: `${color}15`,
                border: `1px solid ${color}25`,
                animationDelay: `${delay}s`
              }}
            >
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hubix-500/10 border border-hubix-500/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-hubix-400" />
          <span className="text-sm font-medium text-hubix-300">
            Trusted by 100+ Discord Communities
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-title text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.08] mb-6 tracking-tight"
        >
          One Bot.{' '}
          <span className="gradient-text">
            Everything
          </span>
          <br />
          Your Server Needs.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
        >
          Advanced moderation, smart tickets, giveaways, invite tracking, 
          and a complete shop system — all powered by{' '}
          <span className="text-hubix-400 font-semibold">Hubix</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base flex items-center gap-3 !px-8 !py-4 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
            </svg>
            Add to Discord
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#features"
            className="btn-secondary text-base flex items-center gap-2 !px-8 !py-4"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '<50ms', label: 'Response' },
            { value: '24/7', label: 'Online' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white font-display">{value}</div>
              <div className="text-sm text-dark-400 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}