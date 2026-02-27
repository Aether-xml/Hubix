'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-hubix-500/[0.08] rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accent-purple/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 gradient-border"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hubix-500/10 border border-hubix-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-hubix-400" />
            <span className="text-sm font-medium text-hubix-300">Free to get started</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
            Ready to Transform{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">Your Server?</span>
          </h2>

          <p className="text-dark-300 text-lg max-w-xl mx-auto mb-8">
            Join hundreds of communities already using Hubix.
            Set up in seconds, powerful from day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base flex items-center gap-3 !px-8 !py-4 group"
            >
              Add Hubix Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://discord.gg/UBqbzEXXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base flex items-center gap-2 !px-8 !py-4"
            >
              Join Our Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}