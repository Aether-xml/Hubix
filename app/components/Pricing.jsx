'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, X, Crown, Zap, Star, Gem, Copy, CheckCheck, ExternalLink } from 'lucide-react'

const LTC_ADDRESS = 'LfPghWtEBhyWda643o5c7DDt7WAs43VGzY'

const plans = [
  {
    name: 'Free',
    price: 0,
    icon: Zap,
    color: '#636770',
    description: 'Perfect for trying out Hubix',
    features: [
      { text: '1 active giveaway', included: true },
      { text: 'Anti-spam filter only', included: true },
      { text: '1 ticket category, 2 open', included: true },
      { text: 'Basic invite tracking', included: true },
      { text: 'Server info & utilities', included: true },
      { text: 'Shop system', included: false },
      { text: 'Review system', included: false },
      { text: 'Full AutoMod', included: false },
      { text: 'Audit logging', included: false },
      { text: 'Bot customization', included: false },
    ],
  },
  {
    name: 'Basic',
    price: 8,
    icon: Star,
    color: '#00d4ff',
    description: 'For growing communities',
    features: [
      { text: '3 active giveaways', included: true },
      { text: 'Anti-spam + invite + links + words', included: true },
      { text: '3 ticket categories, 5 open', included: true },
      { text: 'Invite leaderboard', included: true },
      { text: 'Shop system (5 products)', included: true },
      { text: 'Embed builder', included: true },
      { text: 'Auto role', included: true },
      { text: 'Review system', included: false },
      { text: 'Transcripts', included: false },
      { text: 'Bot customization', included: false },
    ],
  },
  {
    name: 'Premium',
    price: 15,
    icon: Crown,
    color: '#a855f7',
    popular: true,
    description: 'The most popular choice',
    features: [
      { text: 'Unlimited giveaways', included: true },
      { text: 'Full AutoMod (15 filters)', included: true },
      { text: 'Unlimited tickets', included: true },
      { text: 'Full invite tracking', included: true },
      { text: 'Unlimited products', included: true },
      { text: 'Review system', included: true },
      { text: 'Ticket transcripts', included: true },
      { text: 'Full audit logging', included: true },
      { text: 'Bot nickname', included: true },
      { text: 'Priority support', included: true },
    ],
  },
  {
    name: 'Business',
    price: 25,
    icon: Gem,
    color: '#f59e0b',
    description: 'For serious operations',
    features: [
      { text: 'Everything in Premium', included: true },
      { text: 'Multi-server (up to 3)', included: true },
      { text: 'Bot custom avatar', included: true },
      { text: 'Custom bot nickname', included: true },
      { text: 'Priority ticket support', included: true },
      { text: 'Early access to features', included: true },
      { text: 'Dedicated support channel', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'SLA guarantee', included: true },
    ],
  },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs text-dark-400 hover:text-white transition-colors bg-dark-800/50 px-3 py-1.5 rounded-lg border border-dark-700/50 hover:border-dark-600/50"
    >
      {copied ? <CheckCheck className="w-3.5 h-3.5 text-accent-green" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

function PaymentModal({ plan, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-dark-900 border border-dark-700/50 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
      >
        <h3 className="text-xl font-display font-bold text-white mb-2">
          Purchase {plan.name} Plan
        </h3>
        <p className="text-dark-400 text-sm mb-6">
          ${plan.price}/month — Choose your payment method
        </p>

        {/* PayPal */}
        <div className="mb-4">
          <a
            href="https://discord.gg/UBqbzEXXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold py-3.5 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-[#0070ba]/25"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.92-.789h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.774-4.47z"/>
            </svg>
            Pay with PayPal
          </a>
          <p className="text-xs text-dark-500 mt-2 text-center">
            Contact us on Discord to complete PayPal payment
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-dark-700/50" />
          <span className="text-xs text-dark-500 uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-dark-700/50" />
        </div>

        {/* LTC */}
        <div className="bg-dark-800/50 border border-dark-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-[#345d9d] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">Ł</span>
            </div>
            <span className="text-sm font-semibold text-white">Litecoin (LTC)</span>
          </div>

          <div className="bg-dark-900/80 rounded-lg p-3 mb-3 flex items-center justify-between gap-2">
            <code className="text-xs text-dark-300 break-all font-mono leading-relaxed">
              {LTC_ADDRESS}
            </code>
            <CopyButton text={LTC_ADDRESS} />
          </div>

          <p className="text-xs text-dark-500">
            Send exactly <span className="text-white font-semibold">${plan.price}</span> worth of LTC, then open a ticket on our{' '}
            <a href="https://discord.gg/UBqbzEXXcQ" target="_blank" rel="noopener noreferrer" className="text-hubix-400 hover:underline">
              Discord
            </a>{' '}
            with the transaction ID.
          </p>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-full mt-5 py-2.5 text-sm text-dark-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </motion.div>
    </motion.div>
  )
}

function PricingCard({ plan, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [showPayment, setShowPayment] = useState(false)
  const Icon = plan.icon

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
          plan.popular
            ? 'pricing-popular lg:scale-105 lg:-my-4'
            : 'glass-card'
        }`}
      >
        {/* Popular Badge */}
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-hubix-500 to-accent-purple text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-hubix-500/25">
              MOST POPULAR
            </span>
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}25` }}
            >
              <Icon className="w-5 h-5" style={{ color: plan.color }} />
            </div>
            <h3 className="text-xl font-display font-bold text-white">{plan.name}</h3>
          </div>
          <p className="text-sm text-dark-400">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-display font-extrabold text-white">
              {plan.price === 0 ? 'Free' : `$${plan.price}`}
            </span>
            {plan.price > 0 && (
              <span className="text-dark-400 text-sm">/month</span>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="w-4.5 h-4.5 text-accent-green mt-0.5 shrink-0" />
              ) : (
                <X className="w-4.5 h-4.5 text-dark-600 mt-0.5 shrink-0" />
              )}
              <span className={`text-sm ${feature.included ? 'text-dark-200' : 'text-dark-500'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        {plan.price === 0 ? (
          <a
            href="https://discord.com/oauth2/authorize?client_id=1476729193466429620&permissions=8&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center text-sm w-full flex items-center justify-center gap-2"
          >
            Add for Free
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <button
            onClick={() => setShowPayment(true)}
            className={`text-center text-sm w-full flex items-center justify-center gap-2 ${
              plan.popular ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            Get {plan.name}
          </button>
        )}
      </motion.div>

      <AnimatePresence>
        {showPayment && (
          <PaymentModal plan={plan} onClose={() => setShowPayment(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function Pricing() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hubix-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-hubix-400 tracking-wider uppercase mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
            Pick Your{' '}
            <span className="gradient-text-static">Perfect Plan</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-lg">
            Start free, upgrade when you need more. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-dark-500 mb-3">Accepted Payment Methods</p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-dark-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.92-.789h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.774-4.47z"/>
              </svg>
              <span className="text-sm font-medium">PayPal</span>
            </div>
            <div className="w-px h-4 bg-dark-700" />
            <div className="flex items-center gap-2 text-dark-400">
              <div className="w-5 h-5 bg-[#345d9d] rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">Ł</span>
              </div>
              <span className="text-sm font-medium">Litecoin</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider" />
    </section>
  )
}