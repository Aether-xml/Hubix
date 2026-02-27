'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center card p-8 sm:p-12"
          style={{ border: '1px solid rgba(88,101,242,0.15)', background: 'linear-gradient(135deg, rgba(88,101,242,0.06) 0%, rgba(12,14,20,1) 100%)' }}
        >
          <h2 className="section-title text-[clamp(1.5rem,4vw,2.25rem)] mb-3">
            Ready to get started?
          </h2>
          <p className="text-[#6b7084] text-sm sm:text-base max-w-md mx-auto mb-8">
            Set up in seconds, powerful from day one.
            Join hundreds of communities using Hubix.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-7 !py-3.5 group"
            >
              Add Hubix
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://discord.gg/UBqbzEXXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-7 !py-3.5"
            >
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
