'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Alex',
    role: 'Server Owner',
    avatar: '🎮',
    rating: 5,
    text: 'Hubix replaced 4 different bots in our server. The AutoMod alone is worth it — caught spam that other bots completely missed.',
    server: 'Gaming Hub',
  },
  {
    name: 'Sarah',
    role: 'Community Manager',
    avatar: '💜',
    rating: 5,
    text: 'The ticket system with transcripts saved us so much time. Our support workflow is 10x faster now.',
    server: 'Creative Studio',
  },
  {
    name: 'Marcus',
    role: 'Store Owner',
    avatar: '🛍️',
    rating: 5,
    text: 'Finally a bot with a proper shop system. Order channels, reviews, customer profiles — it has everything we needed.',
    server: 'Digital Market',
  },
  {
    name: 'Luna',
    role: 'Admin',
    avatar: '🌙',
    rating: 5,
    text: 'The invite tracking is incredibly detailed. Love the leaderboard feature — it really motivates our community to grow.',
    server: 'Moon Society',
  },
  {
    name: 'Jake',
    role: 'Moderator',
    avatar: '⚡',
    rating: 5,
    text: 'Giveaways are so smooth. Role requirements, multiple winners, reroll — everything just works perfectly out of the box.',
    server: 'Tech Lounge',
  },
  {
    name: 'Mia',
    role: 'Server Owner',
    avatar: '🎨',
    rating: 5,
    text: 'We switched from 3 bots to just Hubix. Less clutter, better features, and the support team is incredibly responsive.',
    server: 'Art Community',
  },
]

function ReviewCard({ review, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card rounded-2xl p-6 flex flex-col"
    >
      {/* Quote */}
      <Quote className="w-8 h-8 text-hubix-500/30 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-dark-200 text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-dark-700/30">
        <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-lg">
          {review.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{review.name}</p>
          <p className="text-xs text-dark-400">{review.role} • {review.server}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-hubix-400 tracking-wider uppercase mb-4">
            Loved by Communities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
            What Our Users{' '}
            <span className="gradient-text-static">Say</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it — hear from the communities using Hubix every day.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider" />
    </section>
  )
}