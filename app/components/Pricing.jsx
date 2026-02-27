'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, X, Copy, CheckCheck } from 'lucide-react'

const LTC = 'LfPghWtEBhyWda643o5c7DDt7WAs43VGzY'

const plans = [
  {
    name: 'Free', price: 0, color: '#6b7084',
    desc: 'Get started for free',
    features: [
      [true, '1 active giveaway'],
      [true, 'Anti-spam only'],
      [true, '1 ticket category'],
      [true, 'Basic invite tracking'],
      [true, 'Utilities'],
      [false, 'Shop system'],
      [false, 'Reviews'],
      [false, 'Full AutoMod'],
      [false, 'Logging'],
    ],
  },
  {
    name: 'Basic', price: 8, color: '#3b82f6',
    desc: 'For growing servers',
    features: [
      [true, '3 active giveaways'],
      [true, 'Extended AutoMod'],
      [true, '3 ticket categories'],
      [true, 'Invite leaderboard'],
      [true, 'Shop (5 products)'],
      [true, 'Embed builder'],
      [true, 'Auto role'],
      [false, 'Reviews & transcripts'],
      [false, 'Bot customization'],
    ],
  },
  {
    name: 'Premium', price: 15, color: '#8b5cf6', popular: true,
    desc: 'Most popular choice',
    features: [
      [true, 'Unlimited giveaways'],
      [true, 'Full AutoMod (15 filters)'],
      [true, 'Unlimited tickets'],
      [true, 'Complete invite tracking'],
      [true, 'Unlimited products'],
      [true, 'Review system'],
      [true, 'Transcripts'],
      [true, 'Full audit logging'],
      [true, 'Bot nickname'],
    ],
  },
  {
    name: 'Business', price: 25, color: '#f59e0b',
    desc: 'For serious operations',
    features: [
      [true, 'Everything in Premium'],
      [true, 'Up to 3 servers'],
      [true, 'Bot custom avatar'],
      [true, 'Priority support'],
      [true, 'Early feature access'],
      [true, 'Dedicated support'],
      [true, 'Advanced analytics'],
      [true, 'Custom integrations'],
      [true, 'SLA guarantee'],
    ],
  },
]

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={copy} className="shrink-0 text-xs text-[#6b7084] hover:text-white transition-colors flex items-center gap-1 bg-[#0b0d10]/60 px-2.5 py-1 rounded-md">
      {copied ? <CheckCheck className="w-3 h-3 text-[#10b981]" /> : <Copy className="w-3 h-3" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function PayModal({ plan, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="relative bg-[#12141a] border border-[#1e2130] rounded-2xl p-6 max-w-sm w-full shadow-2xl"
      >
        <h3 className="text-lg font-display font-bold text-[#eaecf2] mb-1">
          Get {plan.name}
        </h3>
        <p className="text-sm text-[#6b7084] mb-6">${plan.price}/month</p>

        {/* PayPal */}
        <a
          href="https://discord.gg/UBqbzEXXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.92-.789h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.774-4.47z"/>
          </svg>
          Pay with PayPal
        </a>
        <p className="text-[11px] text-[#6b7084] mt-2 text-center">Contact us on Discord to complete</p>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#1e2130]" />
          <span className="text-[11px] text-[#6b7084] uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-[#1e2130]" />
        </div>

        {/* LTC */}
        <div className="bg-[#0b0d10] border border-[#1e2130] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-5 h-5 rounded-full bg-[#345d9d] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">Ł</span>
            </div>
            <span className="text-sm font-semibold text-[#eaecf2]">Litecoin</span>
          </div>
          <div className="flex items-center gap-2 bg-[#12141a] rounded-lg p-2.5">
            <code className="text-[11px] text-[#6b7084] break-all flex-1 font-mono leading-relaxed">
              {LTC}
            </code>
            <CopyBtn text={LTC} />
          </div>
          <p className="text-[11px] text-[#6b7084] mt-2.5 leading-relaxed">
            Send <span className="text-[#eaecf2] font-medium">${plan.price}</span> in LTC, then open a ticket on{' '}
            <a href="https://discord.gg/UBqbzEXXcQ" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:underline">Discord</a> with TX ID.
          </p>
        </div>

        <button onClick={onClose} className="w-full mt-4 py-2 text-sm text-[#6b7084] hover:text-white transition-colors">
          Cancel
        </button>
      </motion.div>
    </motion.div>
  )
}

function PlanCard({ plan, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [showPay, setShowPay] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: i * 0.08 }}
        className={`relative rounded-2xl p-5 sm:p-6 flex flex-col ${
          plan.popular
            ? 'bg-[#5865F2]/[0.07] border-2 border-[#5865F2]/25'
            : 'card'
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="text-[11px] font-bold bg-[#5865F2] text-white px-3 py-1 rounded-full">
              POPULAR
            </span>
          </div>
        )}

        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ background: plan.color }} />
            <span className="text-sm font-semibold text-[#eaecf2]">{plan.name}</span>
          </div>
          <p className="text-xs text-[#6b7084]">{plan.desc}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl font-display font-extrabold text-[#eaecf2]">
            {plan.price === 0 ? 'Free' : `$${plan.price}`}
          </span>
          {plan.price > 0 && <span className="text-sm text-[#6b7084] ml-1">/mo</span>}
        </div>

        {/* Features */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {plan.features.map(([ok, text], j) => (
            <li key={j} className="flex items-start gap-2.5">
              {ok
                ? <Check className="w-4 h-4 text-[#10b981] mt-0.5 shrink-0" />
                : <X className="w-4 h-4 text-[#2b2d31] mt-0.5 shrink-0" />
              }
              <span className={`text-sm leading-snug ${ok ? 'text-[#c4c9d4]' : 'text-[#3a3d4d]'}`}>
                {text}
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
            className="btn btn-ghost !text-sm text-center"
          >
            Add for Free
          </a>
        ) : (
          <button
            onClick={() => setShowPay(true)}
            className={`btn !text-sm ${plan.popular ? 'btn-primary' : 'btn-ghost'}`}
          >
            Get {plan.name}
          </button>
        )}
      </motion.div>

      <AnimatePresence>
        {showPay && <PayModal plan={plan} onClose={() => setShowPay(false)} />}
      </AnimatePresence>
    </>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label">Pricing</p>
          <h2 className="section-title text-[clamp(1.5rem,4vw,2.5rem)] mb-3">
            Simple, transparent pricing
          </h2>
          <p className="section-desc mx-auto text-sm sm:text-base">
            Start free. Upgrade when you&apos;re ready. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
          {plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} i={i} />
          ))}
        </div>

        {/* Payment badges */}
        <div className="flex items-center justify-center gap-5 mt-10 text-[#6b7084]">
          <div className="flex items-center gap-1.5 text-xs">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.92-.789h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.774-4.47z"/></svg>
            PayPal
          </div>
          <div className="w-px h-3 bg-[#1e2130]" />
          <div className="flex items-center gap-1.5 text-xs">
            <div className="w-4 h-4 bg-[#345d9d] rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">Ł</span>
            </div>
            Litecoin
          </div>
        </div>
      </div>

      <div className="divider mt-20 sm:mt-28" />
    </section>
  )
}
