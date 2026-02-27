'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'How do I add Hubix?', a: 'Click "Add to Discord", pick your server, authorize. Hubix is ready instantly with slash commands.' },
  { q: 'Is the free plan really free?', a: 'Yes. No credit card, no time limit. Basic features are free forever.' },
  { q: 'What payments do you accept?', a: 'PayPal and Litecoin (LTC). Contact us on Discord to complete PayPal. For LTC, send to our address and open a ticket with your TX ID.' },
  { q: 'Can I change my plan?', a: 'Yes, upgrade or downgrade anytime. Upgrades are instant, downgrades complete your current period first.' },
  { q: 'What happens when my sub expires?', a: 'You revert to the Free plan. No data is deleted — resubscribe and everything restores.' },
  { q: 'How do license keys work?', a: 'Use /redeem in your server to activate a key. Keys are one-time use, tied to a plan and duration.' },
  { q: 'Does Hubix support multiple languages?', a: 'Interface is English, but AutoMod bad words cover 7 languages including English, Turkish, German, French, Spanish, Portuguese, and Russian.' },
  { q: 'How is my data handled?', a: 'We only store what\'s needed for bot functionality. We never sell data. Request full deletion anytime.' },
]

function Item({ faq, i }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      className="border-b border-[#1e2130] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm font-medium text-[#eaecf2] pr-6 group-hover:text-[#5865F2] transition-colors">
          {faq.q}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#6b7084] shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-[#5865F2]' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-[#6b7084] leading-relaxed pr-8">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-5 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="section-label">FAQ</p>
          <h2 className="section-title text-[clamp(1.5rem,4vw,2.5rem)]">
            Common questions
          </h2>
        </motion.div>

        <div className="card p-5 sm:p-6">
          {faqs.map((faq, i) => (
            <Item key={i} faq={faq} i={i} />
          ))}
        </div>
      </div>

      <div className="divider mt-20 sm:mt-28" />
    </section>
  )
}
