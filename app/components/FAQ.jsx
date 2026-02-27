'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I add Hubix to my server?',
    a: 'Click the "Add to Discord" button, select your server, and authorize. Hubix will be ready to use immediately with slash commands — no configuration needed to start.',
  },
  {
    q: 'Is the free plan really free?',
    a: 'Yes! The free plan includes basic features like anti-spam, 1 giveaway, basic tickets, and invite tracking. No credit card required, no time limit.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept PayPal and Litecoin (LTC). For PayPal payments, contact us through our Discord server. For LTC, send payment to our address and open a ticket with the transaction ID.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Absolutely. You can change your plan at any time. When upgrading, you get instant access to new features. When downgrading, your current period will complete first.',
  },
  {
    q: 'What happens when my subscription expires?',
    a: 'Your server automatically switches to the Free plan. No data is deleted — if you resubscribe, everything will be restored to how it was.',
  },
  {
    q: 'How does the license key system work?',
    a: 'Server owners can receive or purchase license keys. Use the /redeem command in your server to activate a plan. Keys are one-time use and tied to a specific plan and duration.',
  },
  {
    q: 'Does Hubix support multiple languages?',
    a: 'The bot interface is in English, but the AutoMod bad words filter covers 7 languages out of the box, including English, Turkish, German, French, Spanish, Portuguese, and Russian.',
  },
  {
    q: 'How is my data handled?',
    a: 'We only store data necessary for bot functionality (settings, tickets, orders, etc.). We never sell data, and you can request full data deletion at any time by contacting us.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-dark-700/30 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-white pr-8 group-hover:text-hubix-300 transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-dark-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-hubix-400' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-dark-300 text-sm leading-relaxed pr-12">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-hubix-400 tracking-wider uppercase mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
            Frequently Asked{' '}
            <span className="gradient-text-static">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider" />
    </section>
  )
}