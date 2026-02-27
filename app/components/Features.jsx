'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Shield, Ticket, Gift, Users, ShoppingBag,
  ScrollText, Zap, Bot, Lock, BarChart3,
  Palette, Star
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Advanced AutoMod',
    description: '15 intelligent filters with anti-evasion, leet speak detection, and unicode confusable blocking. Supports 7 languages out of the box.',
    color: '#5865F2',
    gradient: 'from-hubix-500/20 to-hubix-600/5',
    tags: ['Anti-Spam', 'Bad Words', 'Phishing'],
  },
  {
    icon: Ticket,
    title: 'Smart Tickets',
    description: 'Multi-category ticket system with claiming, priority levels, and full HTML transcript generation. Staff never misses a request.',
    color: '#00d4ff',
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    tags: ['Categories', 'Transcripts', 'Priority'],
  },
  {
    icon: Gift,
    title: 'Giveaway System',
    description: 'Create engaging giveaways with role requirements, multiple winners, reroll support, and beautiful embed announcements.',
    color: '#a855f7',
    gradient: 'from-purple-500/20 to-purple-600/5',
    tags: ['Multi-Winner', 'Role Gate', 'Reroll'],
  },
  {
    icon: Users,
    title: 'Invite Tracking',
    description: 'Track every invite with detailed stats, leaderboards, join/leave logging, and find out who invited whom.',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    tags: ['Leaderboard', 'Stats', 'Logging'],
  },
  {
    icon: ShoppingBag,
    title: 'Complete Shop System',
    description: 'Panel-based ordering with product management, payment selection, auto-created order channels, and customer profiles.',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-amber-600/5',
    tags: ['Products', 'Orders', 'Payments'],
  },
  {
    icon: Star,
    title: 'Review System',
    description: 'Collect customer reviews with star ratings, dedicated review channels, and live review count in channel names.',
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-pink-600/5',
    tags: ['Ratings', 'Reviews', 'Social Proof'],
  },
  {
    icon: ScrollText,
    title: 'Audit Logging',
    description: 'Comprehensive event logging for messages, members, roles, channels, bans, and voice activity. Never miss what happens.',
    color: '#6366f1',
    gradient: 'from-indigo-500/20 to-indigo-600/5',
    tags: ['Messages', 'Members', 'Voice'],
  },
  {
    icon: Bot,
    title: 'Auto Role',
    description: 'Automatically assign roles to new members as they join. Simple setup, reliable execution.',
    color: '#14b8a6',
    gradient: 'from-teal-500/20 to-teal-600/5',
    tags: ['Onboarding', 'Roles', 'Auto'],
  },
  {
    icon: Palette,
    title: 'Bot Customization',
    description: 'Personalize Hubix with a custom nickname and server avatar. Make it truly yours.',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 to-rose-600/5',
    tags: ['Nickname', 'Avatar', 'Branding'],
  },
  {
    icon: Zap,
    title: 'Embed Builder',
    description: 'Create and edit beautiful embed messages with custom colors, images, thumbnails, and fields — all through an intuitive modal.',
    color: '#eab308',
    gradient: 'from-yellow-500/20 to-yellow-600/5',
    tags: ['Custom', 'Colors', 'Images'],
  },
  {
    icon: Lock,
    title: 'License System',
    description: 'Generate and manage license keys for premium features. Redeem, track, and control access with ease.',
    color: '#8b5cf6',
    gradient: 'from-violet-500/20 to-violet-600/5',
    tags: ['Keys', 'Plans', 'Access'],
  },
  {
    icon: BarChart3,
    title: 'Server Utilities',
    description: 'Essential tools like server info, user info, avatar, banner, ping, and channel nuke. Everything at your fingertips.',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    tags: ['Info', 'Avatar', 'Tools'],
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="glass-card rounded-2xl p-6 group"
    >
      {/* Icon */}
      <div
        className={`feature-icon bg-gradient-to-br ${feature.gradient} mb-5`}
        style={{ border: `1px solid ${feature.color}20` }}
      >
        <feature.icon className="w-6 h-6 relative z-10" style={{ color: feature.color }} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-hubix-300 transition-colors">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-dark-300 text-sm leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {feature.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-lg font-medium"
            style={{
              background: `${feature.color}10`,
              color: feature.color,
              border: `1px solid ${feature.color}15`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Features() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="features" className="relative py-24 sm:py-32">
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
            Packed with Power
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
            Everything You Need,{' '}
            <span className="gradient-text-static">Nothing You Don&apos;t</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-lg">
            From moderation to monetization — Hubix handles it all so you can focus on building your community.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider" />
    </section>
  )
}