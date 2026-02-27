'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '<50ms', label: 'Latency' },
  { value: '24/7', label: 'Online' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16">
      {/* Subtle bg glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[400px] bg-[#5865F2]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-[#8b5cf6]/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center w-full py-16 sm:py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge bg-[#5865F2]/10 text-[#7289da] border border-[#5865F2]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5865F2] animate-pulse" />
            Now serving 100+ communities
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title text-[clamp(2rem,6vw,3.5rem)] mt-8 mb-5"
        >
          The only bot your
          <br />
          <span className="gradient-text">server will ever need</span>
        </motion.h1>

        {/* Desc */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#6b7084] text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Moderation, tickets, giveaways, invite tracking, and a complete
          shop system — all in one place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a
            href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !px-7 !py-3.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
            </svg>
            Add to Discord
          </a>
          <a href="#features" className="btn btn-ghost !px-7 !py-3.5">
            See Features
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 max-w-xs mx-auto"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold font-display text-[#eaecf2]">{value}</div>
              <div className="text-xs text-[#6b7084] mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
