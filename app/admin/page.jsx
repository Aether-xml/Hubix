'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lock, Eye, EyeOff, LogOut, Server, Users, Crown,
  CreditCard, Key, TrendingUp, Shield, AlertTriangle,
  Copy, CheckCheck, Plus, Trash2, RefreshCw
} from 'lucide-react'

const ADMIN_PASS = 'mF8@Q!Z7#Rk2$A9^PQ'

// ── Login Screen ─────────────────────────────────

function LoginScreen({ onLogin }) {
  const [pass, setPass] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      if (pass === ADMIN_PASS) {
        sessionStorage.setItem('hubix_admin', 'true')
        onLogin()
      } else {
        setError(true)
        setLoading(false)
        setTimeout(() => setError(false), 2000)
      }
    }, 600)
  }

  return (
    <div className="min-h-[100svh] flex items-center justify-center p-5 bg-[#0b0d10]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 text-[#5865F2]" />
          </div>
          <h1 className="text-xl font-display font-bold text-[#eaecf2]">Admin Panel</h1>
          <p className="text-sm text-[#6b7084] mt-1">Enter password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
              className={`w-full bg-[#12141a] border ${error ? 'border-red-500/50' : 'border-[#1e2130]'} rounded-xl px-4 py-3 text-sm text-[#eaecf2] placeholder-[#3a3d4d] focus:outline-none focus:border-[#5865F2]/50 transition-colors pr-10`}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7084] hover:text-[#eaecf2] transition-colors"
            >
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs text-red-400 flex items-center gap-1.5"
              >
                <AlertTriangle className="w-3 h-3" />
                Invalid password
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={!pass || loading}
            className="w-full btn btn-primary !py-3 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              'Authenticate'
            )}
          </button>
        </form>

        <p className="text-[11px] text-[#3a3d4d] text-center mt-6">
          Hubix Admin • Authorized personnel only
        </p>
      </motion.div>
    </div>
  )
}

// ── Stat Card ────────────────────────────────────

function StatCard({ icon: Icon, label, value, color, sub }) {
  return (
    <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: `${color}12`, border: `1px solid ${color}18` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        {sub && <span className="text-[11px] text-[#6b7084]">{sub}</span>}
      </div>
      <p className="text-2xl font-display font-bold text-[#eaecf2]">{value}</p>
      <p className="text-xs text-[#6b7084] mt-0.5">{label}</p>
    </div>
  )
}

// ── Subscription Row ─────────────────────────────

function SubRow({ guild }) {
  const planColors = {
    free: '#6b7084',
    basic: '#3b82f6',
    premium: '#8b5cf6',
    business: '#f59e0b',
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-[#1e2130] last:border-0">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-[#1e2130] flex items-center justify-center shrink-0">
          <Server className="w-4 h-4 text-[#6b7084]" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#eaecf2] truncate">{guild.name}</p>
          <p className="text-[11px] text-[#6b7084] font-mono">{guild.id}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase"
          style={{
            color: planColors[guild.plan] || '#6b7084',
            background: `${planColors[guild.plan] || '#6b7084'}15`,
            border: `1px solid ${planColors[guild.plan] || '#6b7084'}25`,
          }}
        >
          {guild.plan}
        </span>
        {guild.expires && (
          <span className="text-[11px] text-[#6b7084]">{guild.expires}</span>
        )}
      </div>
    </div>
  )
}

// ── License Key Row ──────────────────────────────

function KeyRow({ k }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(k.key)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-[#1e2130] last:border-0">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <code className="text-xs text-[#c4c9d4] font-mono truncate">{k.key}</code>
          <button onClick={copy} className="shrink-0 text-[#6b7084] hover:text-white transition-colors">
            {copied ? <CheckCheck className="w-3 h-3 text-[#10b981]" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>
        <p className="text-[11px] text-[#6b7084] mt-0.5">
          {k.plan} • {k.days}d • {k.redeemed ? `Redeemed` : 'Available'}
        </p>
      </div>
      <div
        className={`w-2 h-2 rounded-full shrink-0 ${k.redeemed ? 'bg-[#6b7084]' : 'bg-[#10b981]'}`}
      />
    </div>
  )
}

// ── Dashboard ────────────────────────────────────

function Dashboard({ onLogout }) {
  // Demo data — replace with real API calls when bot API is ready
  const stats = {
    servers: 2,
    users: 10,
    activeSubscriptions: 0,
    revenue: 0,
    keysAvailable: 0,
    keysUsed: 0,
  }

  const subscriptions = [
    { name: 'Demo Server 1', id: '123456789012345678', plan: 'free', expires: null },
    { name: 'Demo Server 2', id: '987654321098765432', plan: 'free', expires: null },
  ]

  const licenseKeys = []

  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'subscriptions', label: 'Subscriptions' },
    { id: 'keys', label: 'License Keys' },
    { id: 'logs', label: 'Logs' },
  ]

  return (
    <div className="min-h-[100svh] bg-[#0b0d10]">
      {/* Top Bar */}
      <div className="border-b border-[#1e2130] bg-[#0b0d10]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#5865F2] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-display font-bold text-[#eaecf2]">Hubix</span>
            <span className="text-[11px] bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 px-2 py-0.5 rounded-full font-semibold">
              ADMIN
            </span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-sm text-[#6b7084] hover:text-[#f43f5e] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6">
        {/* Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto pb-1 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#5865F2]/10 text-[#5865F2] border border-[#5865F2]/20'
                  : 'text-[#6b7084] hover:text-[#c4c9d4] hover:bg-[#12141a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <StatCard icon={Server} label="Total Servers" value={stats.servers} color="#5865F2" />
              <StatCard icon={Users} label="Total Users" value={stats.users} color="#3b82f6" />
              <StatCard icon={Crown} label="Active Subs" value={stats.activeSubscriptions} color="#8b5cf6" />
              <StatCard icon={CreditCard} label="Revenue" value={`$${stats.revenue}`} color="#10b981" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Quick Actions */}
              <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
                <h3 className="text-sm font-semibold text-[#eaecf2] mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="flex items-center gap-2 px-4 py-3 bg-[#0b0d10] border border-[#1e2130] rounded-lg text-sm text-[#c4c9d4] hover:border-[#5865F2]/30 hover:text-[#5865F2] transition-colors text-left">
                    <Key className="w-4 h-4 shrink-0" />
                    Generate Key
                  </button>
                  <button className="flex items-center gap-2 px-4 py-3 bg-[#0b0d10] border border-[#1e2130] rounded-lg text-sm text-[#c4c9d4] hover:border-[#5865F2]/30 hover:text-[#5865F2] transition-colors text-left">
                    <Crown className="w-4 h-4 shrink-0" />
                    Manage Plans
                  </button>
                  <button className="flex items-center gap-2 px-4 py-3 bg-[#0b0d10] border border-[#1e2130] rounded-lg text-sm text-[#c4c9d4] hover:border-[#5865F2]/30 hover:text-[#5865F2] transition-colors text-left">
                    <Shield className="w-4 h-4 shrink-0" />
                    Bot Status
                  </button>
                  <button className="flex items-center gap-2 px-4 py-3 bg-[#0b0d10] border border-[#1e2130] rounded-lg text-sm text-[#c4c9d4] hover:border-[#5865F2]/30 hover:text-[#5865F2] transition-colors text-left">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    Analytics
                  </button>
                </div>
              </div>

              {/* Recent Servers */}
              <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
                <h3 className="text-sm font-semibold text-[#eaecf2] mb-4">Servers</h3>
                {subscriptions.length === 0 ? (
                  <p className="text-sm text-[#6b7084]">No servers yet</p>
                ) : (
                  subscriptions.slice(0, 5).map((g, i) => <SubRow key={i} guild={g} />)
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Subscriptions Tab */}
        {activeTab === 'subscriptions' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-[#eaecf2]">All Subscriptions</h3>
                <span className="text-[11px] text-[#6b7084]">{subscriptions.length} total</span>
              </div>
              {subscriptions.length === 0 ? (
                <p className="text-sm text-[#6b7084] py-8 text-center">No subscriptions found</p>
              ) : (
                subscriptions.map((g, i) => <SubRow key={i} guild={g} />)
              )}
            </div>
          </motion.div>
        )}

        {/* License Keys Tab */}
        {activeTab === 'keys' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              <StatCard icon={Key} label="Available" value={stats.keysAvailable} color="#10b981" />
              <StatCard icon={Key} label="Used" value={stats.keysUsed} color="#6b7084" />
              <StatCard icon={Key} label="Total" value={stats.keysAvailable + stats.keysUsed} color="#5865F2" sub="All time" />
            </div>

            <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-[#eaecf2]">License Keys</h3>
                <button className="flex items-center gap-1.5 text-xs text-[#5865F2] hover:text-[#7289da] transition-colors font-medium">
                  <Plus className="w-3.5 h-3.5" />
                  Generate
                </button>
              </div>
              {licenseKeys.length === 0 ? (
                <div className="py-8 text-center">
                  <Key className="w-8 h-8 text-[#1e2130] mx-auto mb-2" />
                  <p className="text-sm text-[#6b7084]">No license keys yet</p>
                  <p className="text-[11px] text-[#3a3d4d] mt-1">Generate keys using /owner command in Discord</p>
                </div>
              ) : (
                licenseKeys.map((k, i) => <KeyRow key={i} k={k} />)
              )}
            </div>
          </motion.div>
        )}

        {/* Logs Tab */}
        {activeTab === 'logs' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
              <h3 className="text-sm font-semibold text-[#eaecf2] mb-4">Activity Log</h3>
              <div className="py-8 text-center">
                <ScrollText className="w-8 h-8 text-[#1e2130] mx-auto mb-2" />
                <p className="text-sm text-[#6b7084]">No activity yet</p>
                <p className="text-[11px] text-[#3a3d4d] mt-1">Subscription changes and key redemptions will appear here</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[#1e2130] flex items-center justify-between">
          <p className="text-[11px] text-[#3a3d4d]">Hubix Admin Panel v1.0</p>
          <p className="text-[11px] text-[#3a3d4d]">Session: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

// ── Missing import for Logs tab ──────────────────
import { ScrollText } from 'lucide-react'

// ── Main Component ───────────────────────────────

export default function AdminPanel() {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('hubix_admin') === 'true') {
      setAuthed(true)
    }
  }, [])

  const logout = () => {
    sessionStorage.removeItem('hubix_admin')
    setAuthed(false)
  }

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />
  }

  return <Dashboard onLogout={logout} />
}