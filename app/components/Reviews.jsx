'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  { name: 'Alex', role: 'Server Owner', text: 'Hubix replaced 4 different bots. The AutoMod alone is worth it — caught spam other bots missed completely.' },
  { name: 'Sarah', role: 'Community Manager', text: 'The ticket system with transcripts saved us so much time. Support workflow is 10x faster now.' },
  { name: 'Marcus', role: 'Store Owner', text: 'Finally a bot with a proper shop system. Order channels, reviews, profiles — it has everything.' },
  { name: 'Luna', role: 'Admin', text: 'Invite tracking is incredibly detailed. The leaderboard feature really motivates our community to grow.' },
  { name: 'Jake', role: 'Moderator', text: 'Giveaways are so smooth. Role requirements, multiple winners, reroll — everything works perfectly.' },
  { name: 'Mia', role: 'Server Owner', text: 'Switched from 3 bots to just Hubix. Less clutter, better features, and the support is amazing.' },
]

function ReviewCard({ r, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      className="card p-5 sm:p-6 flex flex-col"
    >
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-sm text-[#c4c9d4] leading-relaxed flex-1 mb-4">
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-[#1e2130]">
        <div className="w-8 h-8 rounded-full bg-[#1e2130] flex items-center justify-center text-xs font-bold text-[#5865F2]">
          {r.name[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-[#eaecf2]">{r.name}</p>
          <p className="text-[11px] text-[#6b7084]">{r.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label">Reviews</p>
          <h2 className="section-title text-[clamp(1.5rem,4vw,2.5rem)] mb-3">
            Trusted by communities
          </h2>
          <p className="section-desc mx-auto text-sm sm:text-base">
            Hear from the people using Hubix every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>
      </div>

      <div className="divider mt-20 sm:mt-28" />
    </section>
  )
}
