'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Shield, Ticket, Gift, Users, ShoppingBag,
  Star, ScrollText, UserPlus, Palette, Zap, Lock, BarChart3,
  Hammer, MessageSquare, Hash, Vote
} from 'lucide-react'

const features = [
  {
    icon: Shield, title: 'AutoMod',
    desc: '15 filters, anti-evasion, leet speak detection. 7 languages built-in.',
    color: '#5865F2',
  },
  {
    icon: Hammer, title: 'Moderation',
    desc: 'Kick, ban, timeout, clear, lock/unlock, slowmode, nuke — all with full logging.',
    color: '#ed4245',
  },
  {
    icon: Ticket, title: 'Tickets',
    desc: 'Categories, claiming, priority levels, HTML transcripts.',
    color: '#3b82f6',
  },
  {
    icon: Gift, title: 'Giveaways',
    desc: 'Role requirements, multiple winners, reroll, timed endings.',
    color: '#8b5cf6',
  },
  {
    icon: ShoppingBag, title: 'Shop & Orders',
    desc: 'Full order system with products, payments, delivery & customer profiles — a feature most bots don\'t have.',
    color: '#f59e0b',
    unique: true,
  },
  {
    icon: Star, title: 'Reviews',
    desc: 'Star ratings, review channel, live counter in channel name.',
    color: '#f43f5e',
  },
  {
    icon: Users, title: 'Invite Tracking',
    desc: 'Detailed stats, leaderboards, who-invited-who, leave tracking.',
    color: '#10b981',
  },
  {
    icon: ScrollText, title: 'Audit Logging',
    desc: 'Messages, members, roles, channels, bans, voice — everything.',
    color: '#6366f1',
  },
  {
    icon: Vote, title: 'Polls',
    desc: 'Create interactive polls with up to 5 options and emoji reactions.',
    color: '#0ea5e9',
  },
  {
    icon: Hash, title: 'Prefix Commands',
    desc: 'Enable optional prefix commands alongside slash commands. Custom prefix per server.',
    color: '#f97316',
  },
  {
    icon: UserPlus, title: 'Auto Role',
    desc: 'Assign roles automatically when new members join.',
    color: '#14b8a6',
  },
  {
    icon: Zap, title: 'Embed Builder',
    desc: 'Create and edit embeds with colors, images, fields via modal.',
    color: '#eab308',
  },
  {
    icon: Palette, title: 'Customization',
    desc: 'Custom bot nickname and server avatar for your community.',
    color: '#ec4899',
  },
  {
    icon: Lock, title: 'License Keys',
    desc: 'Generate, distribute, and manage premium access keys.',
    color: '#a855f7',
  },
  {
    icon: MessageSquare, title: 'Role Management',
    desc: 'Add or remove roles from users with a single command.',
    color: '#64748b',
  },
  {
    icon: BarChart3, title: 'Utilities',
    desc: 'Server info, user info, avatar, banner, ping, nuke, and more.',
    color: '#06b6d4',
  },
]

function Card({ feature, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.04 }}
      className={`card p-5 sm:p-6 group ${feature.unique ? 'ring-1 ring-[#f59e0b]/20 bg-[#f59e0b]/[0.03]' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${feature.color}12`, border: `1px solid ${feature.color}18` }}
        >
          <feature.icon className="w-[18px] h-[18px]" style={{ color: feature.color }} />
        </div>
        {feature.unique && (
          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-0.5 rounded-full border border-[#f59e0b]/20">
            Unique
          </span>
        )}
      </div>
      <h3 className="text-[15px] font-semibold text-[#eaecf2] mb-1.5 group-hover:text-[#5865F2] transition-colors">
        {feature.title}
      </h3>
      <p className="text-sm text-[#6b7084] leading-relaxed">
        {feature.desc}
      </p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label">Features</p>
          <h2 className="section-title text-[clamp(1.5rem,4vw,2.5rem)] mb-3">
            Everything you need,<br className="sm:hidden" /> nothing you don&apos;t
          </h2>
          <p className="section-desc mx-auto text-sm sm:text-base">
            From moderation to monetization — one bot handles it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <Card key={f.title} feature={f} i={i} />
          ))}
        </div>
      </div>

      <div className="divider mt-20 sm:mt-28" />
    </section>
  )
}
