'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lock, Eye, EyeOff, LogOut, Server, Users, Crown,
  CreditCard, Key, AlertTriangle, Copy, CheckCheck,
  Plus, Trash2, RefreshCw, X, Activity, ScrollText,
  Check, Wifi, WifiOff, Clock, ChevronDown
} from 'lucide-react'

// ═══════════════════════════════════════════════════
//  API HELPER
// ═══════════════════════════════════════════════════

async function api(path, opts = {}) {
  const pass = sessionStorage.getItem('hubix_ap')
  const res = await fetch(`/api/admin/${path}`, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${pass}`,
      ...opts.headers,
    },
  })
  if (res.status === 401) throw new Error('UNAUTHORIZED')
  if (res.status === 502) throw new Error('BOT_OFFLINE')
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.error || `Error ${res.status}`)
  }
  return res.json()
}

const PLAN_COLORS = {
  free: '#6b7084',
  basic: '#3b82f6',
  premium: '#8b5cf6',
  business: '#f59e0b',
}

// ═══════════════════════════════════════════════════
//  LOGIN
// ═══════════════════════════════════════════════════

function Login({ onLogin }) {
  const [pass, setPass] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!pass) return
    setLoading(true)
    setError('')

    try {
      sessionStorage.setItem('hubix_ap', pass)
      await api('health')
      onLogin()
    } catch (err) {
      sessionStorage.removeItem('hubix_ap')
      if (err.message === 'UNAUTHORIZED') setError('Invalid password')
      else if (err.message === 'BOT_OFFLINE') setError('Bot is offline')
      else setError('Connection failed')
      setLoading(false)
    }
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
          <p className="text-sm text-[#6b7084] mt-1">Authorized access only</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
              className={`w-full bg-[#12141a] border ${error ? 'border-red-500/50' : 'border-[#1e2130]'} rounded-xl px-4 py-3 text-sm text-[#eaecf2] placeholder-[#3a3d4d] focus:outline-none focus:border-[#5865F2]/50 transition-colors pr-10`}
              autoFocus
            />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7084] hover:text-[#eaecf2]">
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs text-red-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3 h-3" /> {error}
              </motion.p>
            )}
          </AnimatePresence>

          <button type="submit" disabled={!pass || loading} className="w-full btn btn-primary !py-3 disabled:opacity-40">
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Authenticate'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

// ═══════════════════════════════════════════════════
//  SMALL COMPONENTS
// ═══════════════════════════════════════════════════

function Stat({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-4">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${color}12`, border: `1px solid ${color}18` }}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <p className="text-2xl font-display font-bold text-[#eaecf2]">{value ?? '—'}</p>
      <p className="text-xs text-[#6b7084] mt-0.5">{label}</p>
    </div>
  )
}

function PlanBadge({ plan }) {
  return (
    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase" style={{
      color: PLAN_COLORS[plan] || '#6b7084',
      background: `${PLAN_COLORS[plan] || '#6b7084'}15`,
      border: `1px solid ${PLAN_COLORS[plan] || '#6b7084'}25`,
    }}>
      {plan}
    </span>
  )
}

function CopyBtn({ text, small }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={copy} className={`shrink-0 text-[#6b7084] hover:text-white transition-colors flex items-center gap-1 ${small ? '' : 'bg-[#0b0d10]/60 px-2 py-1 rounded-md'}`}>
      {copied ? <CheckCheck className="w-3 h-3 text-[#10b981]" /> : <Copy className="w-3 h-3" />}
      {!small && <span className="text-[11px]">{copied ? 'Copied' : 'Copy'}</span>}
    </button>
  )
}

function EmptyState({ icon: Icon, title, desc }) {
  return (
    <div className="py-10 text-center">
      <Icon className="w-8 h-8 text-[#1e2130] mx-auto mb-2" />
      <p className="text-sm text-[#6b7084]">{title}</p>
      {desc && <p className="text-[11px] text-[#3a3d4d] mt-1">{desc}</p>}
    </div>
  )
}

function TabBtn({ active, label, onClick }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
      active ? 'bg-[#5865F2]/10 text-[#5865F2] border border-[#5865F2]/20' : 'text-[#6b7084] hover:text-[#c4c9d4] hover:bg-[#12141a]'
    }`}>
      {label}
    </button>
  )
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-xs text-[#6b7084] mb-1.5">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-[#0b0d10] border border-[#1e2130] rounded-lg px-3 py-2.5 text-sm text-[#eaecf2] focus:outline-none focus:border-[#5865F2]/50 appearance-none cursor-pointer">
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  )
}

function InputField({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div>
      <label className="block text-xs text-[#6b7084] mb-1.5">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-[#0b0d10] border border-[#1e2130] rounded-lg px-3 py-2.5 text-sm text-[#eaecf2] placeholder-[#3a3d4d] focus:outline-none focus:border-[#5865F2]/50" />
    </div>
  )
}

// ═══════════════════════════════════════════════════
//  MANAGE SUBSCRIPTION MODAL
// ═══════════════════════════════════════════════════

function ManageSubModal({ sub, onClose, onDone }) {
  const [action, setAction] = useState('update')
  const [plan, setPlan] = useState(sub.plan)
  const [days, setDays] = useState('30')
  const [amount, setAmount] = useState('0')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [confirmRevoke, setConfirmRevoke] = useState(false)

  const execute = async () => {
    setLoading(true)
    setError('')
    try {
      if (action === 'update') {
        await api('subscriptions/update', {
          method: 'POST',
          body: JSON.stringify({ guild_id: sub.guild_id, plan, days: parseInt(days) || null, amount: parseFloat(amount) || 0, notes: notes || undefined }),
        })
      } else if (action === 'extend') {
        await api('subscriptions/extend', {
          method: 'POST',
          body: JSON.stringify({ guild_id: sub.guild_id, days: parseInt(days), amount: parseFloat(amount) || 0, notes: notes || undefined }),
        })
      } else if (action === 'revoke') {
        await api('subscriptions/revoke', {
          method: 'POST',
          body: JSON.stringify({ guild_id: sub.guild_id, notes: notes || undefined }),
        })
      }
      onDone()
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()} className="relative bg-[#12141a] border border-[#1e2130] rounded-2xl p-6 max-w-md w-full shadow-2xl max-h-[90svh] overflow-y-auto">

        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-display font-bold text-[#eaecf2]">Manage Subscription</h3>
          <button onClick={onClose} className="text-[#6b7084] hover:text-white"><X className="w-4 h-4" /></button>
        </div>
        <p className="text-sm text-[#6b7084] mb-5">{sub.guild_name} • <PlanBadge plan={sub.plan} /></p>

        {/* Action Tabs */}
        <div className="flex gap-1 mb-5 bg-[#0b0d10] rounded-lg p-1">
          {['update', 'extend', 'revoke'].map(a => (
            <button key={a} onClick={() => { setAction(a); setConfirmRevoke(false) }}
              className={`flex-1 py-2 rounded-md text-xs font-medium transition-colors capitalize ${action === a ? (a === 'revoke' ? 'bg-red-500/10 text-red-400' : 'bg-[#5865F2]/10 text-[#5865F2]') : 'text-[#6b7084] hover:text-[#c4c9d4]'}`}>
              {a}
            </button>
          ))}
        </div>

        {/* Update Plan */}
        {action === 'update' && (
          <div className="space-y-3">
            <SelectField label="Plan" value={plan} onChange={setPlan} options={[
              { value: 'free', label: 'Free' },
              { value: 'basic', label: 'Basic ($8/mo)' },
              { value: 'premium', label: 'Premium ($15/mo)' },
              { value: 'business', label: 'Business ($25/mo)' },
            ]} />
            <SelectField label="Duration" value={days} onChange={setDays} options={[
              { value: '7', label: '7 days' },
              { value: '14', label: '14 days' },
              { value: '30', label: '30 days' },
              { value: '60', label: '60 days' },
              { value: '90', label: '90 days' },
              { value: '180', label: '180 days' },
              { value: '365', label: '365 days' },
            ]} />
            <InputField label="Amount ($)" value={amount} onChange={setAmount} type="number" placeholder="0" />
            <InputField label="Notes" value={notes} onChange={setNotes} placeholder="Optional" />
          </div>
        )}

        {/* Extend */}
        {action === 'extend' && (
          <div className="space-y-3">
            <p className="text-xs text-[#6b7084]">Current expiry: <span className="text-[#c4c9d4]">{sub.expires_at || 'Never'}</span></p>
            <SelectField label="Extend by" value={days} onChange={setDays} options={[
              { value: '7', label: '7 days' },
              { value: '14', label: '14 days' },
              { value: '30', label: '30 days' },
              { value: '60', label: '60 days' },
              { value: '90', label: '90 days' },
            ]} />
            <InputField label="Amount ($)" value={amount} onChange={setAmount} type="number" placeholder="0" />
            <InputField label="Notes" value={notes} onChange={setNotes} placeholder="Optional" />
          </div>
        )}

        {/* Revoke */}
        {action === 'revoke' && (
          <div className="space-y-3">
            <div className="bg-red-500/5 border border-red-500/15 rounded-lg p-3">
              <p className="text-sm text-red-400 font-medium">This will reset to Free plan</p>
              <p className="text-xs text-[#6b7084] mt-1">The server will lose access to all paid features immediately.</p>
            </div>
            <InputField label="Reason" value={notes} onChange={setNotes} placeholder="Optional" />
          </div>
        )}

        {error && <p className="text-xs text-red-400 mt-3 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> {error}</p>}

        <div className="mt-5 flex gap-2">
          <button onClick={onClose} className="flex-1 btn btn-ghost !py-2.5 !text-sm">Cancel</button>
          {action === 'revoke' ? (
            !confirmRevoke ? (
              <button onClick={() => setConfirmRevoke(true)} className="flex-1 btn !py-2.5 !text-sm bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20">
                Revoke
              </button>
            ) : (
              <button onClick={execute} disabled={loading} className="flex-1 btn !py-2.5 !text-sm bg-red-500 text-white hover:bg-red-600 disabled:opacity-50">
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Confirm Revoke'}
              </button>
            )
          ) : (
            <button onClick={execute} disabled={loading} className="flex-1 btn btn-primary !py-2.5 !text-sm disabled:opacity-50">
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : action === 'update' ? 'Set Plan' : 'Extend'}
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════
//  GENERATE KEYS MODAL
// ═══════════════════════════════════════════════════

function GenerateKeyModal({ onClose, onDone }) {
  const [plan, setPlan] = useState('basic')
  const [days, setDays] = useState('30')
  const [count, setCount] = useState('1')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(null)
  const [error, setError] = useState('')

  const generate = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await api('keys/generate', {
        method: 'POST',
        body: JSON.stringify({ plan, days: parseInt(days), count: parseInt(count), notes: notes || undefined }),
      })
      setGenerated(data.keys)
    } catch (e) {
      setError(e.message)
    }
    setLoading(false)
  }

  const copyAll = async () => {
    if (generated) {
      await navigator.clipboard.writeText(generated.join('\n'))
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()} className="relative bg-[#12141a] border border-[#1e2130] rounded-2xl p-6 max-w-md w-full shadow-2xl max-h-[90svh] overflow-y-auto">

        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-display font-bold text-[#eaecf2]">Generate License Keys</h3>
          <button onClick={() => { if (generated) onDone(); onClose() }} className="text-[#6b7084] hover:text-white"><X className="w-4 h-4" /></button>
        </div>

        {!generated ? (
          <>
            <div className="space-y-3">
              <SelectField label="Plan" value={plan} onChange={setPlan} options={[
                { value: 'basic', label: 'Basic ($8/mo)' },
                { value: 'premium', label: 'Premium ($15/mo)' },
                { value: 'business', label: 'Business ($25/mo)' },
              ]} />
              <SelectField label="Duration" value={days} onChange={setDays} options={[
                { value: '7', label: '7 days' },
                { value: '14', label: '14 days' },
                { value: '30', label: '30 days' },
                { value: '60', label: '60 days' },
                { value: '90', label: '90 days' },
                { value: '180', label: '180 days' },
                { value: '365', label: '365 days' },
              ]} />
              <SelectField label="Count" value={count} onChange={setCount} options={
                Array.from({ length: 10 }, (_, i) => ({ value: String(i + 1), label: `${i + 1} key${i > 0 ? 's' : ''}` }))
              } />
              <InputField label="Notes" value={notes} onChange={setNotes} placeholder="Optional" />
            </div>

            {error && <p className="text-xs text-red-400 mt-3 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> {error}</p>}

            <div className="mt-5 flex gap-2">
              <button onClick={onClose} className="flex-1 btn btn-ghost !py-2.5 !text-sm">Cancel</button>
              <button onClick={generate} disabled={loading} className="flex-1 btn btn-primary !py-2.5 !text-sm disabled:opacity-50">
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : `Generate ${count} Key${parseInt(count) > 1 ? 's' : ''}`}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="bg-[#10b981]/5 border border-[#10b981]/15 rounded-lg p-3 mb-4">
              <p className="text-sm text-[#10b981] font-medium flex items-center gap-1.5">
                <Check className="w-4 h-4" /> {generated.length} key{generated.length > 1 ? 's' : ''} generated
              </p>
            </div>

            <div className="space-y-2 mb-4">
              {generated.map((key, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#0b0d10] rounded-lg px-3 py-2.5">
                  <code className="text-xs text-[#c4c9d4] font-mono flex-1 break-all">{key}</code>
                  <CopyBtn text={key} small />
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              {generated.length > 1 && (
                <button onClick={copyAll} className="flex-1 btn btn-ghost !py-2.5 !text-sm">
                  <Copy className="w-3.5 h-3.5" /> Copy All
                </button>
              )}
              <button onClick={() => { onDone(); onClose() }} className="flex-1 btn btn-primary !py-2.5 !text-sm">Done</button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════════════════

function Dashboard({ onLogout }) {
  const [tab, setTab] = useState('overview')
  const [connected, setConnected] = useState(null)

  // Data states
  const [stats, setStats] = useState(null)
  const [guilds, setGuilds] = useState(null)
  const [subs, setSubs] = useState(null)
  const [keys, setKeys] = useState(null)
  const [logs, setLogs] = useState(null)
  const [loading, setLoading] = useState({})
  const [toast, setToast] = useState(null)

  // Modals
  const [manageSub, setManageSub] = useState(null)
  const [showGenKey, setShowGenKey] = useState(false)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const load = useCallback(async (key, fetcher) => {
    setLoading(p => ({ ...p, [key]: true }))
    try {
      const data = await fetcher()
      setConnected(true)
      return data
    } catch (e) {
      if (e.message === 'BOT_OFFLINE') setConnected(false)
      else if (e.message === 'UNAUTHORIZED') onLogout()
      throw e
    } finally {
      setLoading(p => ({ ...p, [key]: false }))
    }
  }, [onLogout])

  // Initial load
  useEffect(() => {
    loadOverview()
  }, []) // eslint-disable-line

  const loadOverview = async () => {
    try {
      const [s, g] = await Promise.all([
        load('stats', () => api('stats')),
        load('guilds', () => api('guilds')),
      ])
      setStats(s)
      setGuilds(g.guilds)
    } catch {} // eslint-disable-line
  }

  const loadSubs = async () => {
    try {
      const data = await load('subs', () => api('subscriptions'))
      setSubs(data.subscriptions)
    } catch {} // eslint-disable-line
  }

  const loadKeys = async () => {
    try {
      const data = await load('keys', () => api('keys'))
      setKeys(data.keys)
    } catch {} // eslint-disable-line
  }

  const loadLogs = async () => {
    try {
      const data = await load('logs', () => api('logs?limit=50'))
      setLogs(data.logs)
    } catch {} // eslint-disable-line
  }

  const deleteKey = async (key) => {
    try {
      await api('keys/delete', { method: 'POST', body: JSON.stringify({ key }) })
      showToast('Key deleted')
      loadKeys()
    } catch (e) {
      showToast(e.message, 'error')
    }
  }

  // Load tab data on switch
  useEffect(() => {
    if (tab === 'subscriptions' && !subs) loadSubs()
    if (tab === 'keys' && !keys) loadKeys()
    if (tab === 'logs' && !logs) loadLogs()
  }, [tab]) // eslint-disable-line

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
            <span className="text-[11px] bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 px-2 py-0.5 rounded-full font-semibold">ADMIN</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs">
              {connected === true && <><Wifi className="w-3 h-3 text-[#10b981]" /><span className="text-[#10b981] hidden sm:inline">Connected</span></>}
              {connected === false && <><WifiOff className="w-3 h-3 text-red-400" /><span className="text-red-400 hidden sm:inline">Offline</span></>}
              {connected === null && <><Activity className="w-3 h-3 text-[#6b7084] animate-pulse" /><span className="text-[#6b7084] hidden sm:inline">Connecting</span></>}
            </div>
            <button onClick={onLogout} className="flex items-center gap-1.5 text-sm text-[#6b7084] hover:text-[#f43f5e] transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className={`fixed top-16 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-lg text-sm font-medium border ${
              toast.type === 'error' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20'
            }`}>
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6">
        {/* Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto pb-1 -mx-1 px-1">
          {[['overview', 'Overview'], ['subscriptions', 'Subscriptions'], ['keys', 'Keys'], ['logs', 'Logs']].map(([id, label]) => (
            <TabBtn key={id} active={tab === id} label={label} onClick={() => setTab(id)} />
          ))}
        </div>

        {/* ── OVERVIEW ─────────────────────────── */}
        {tab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-[#eaecf2]">Overview</h2>
              <button onClick={loadOverview} disabled={loading.stats} className="text-[#6b7084] hover:text-[#5865F2] transition-colors">
                <RefreshCw className={`w-4 h-4 ${loading.stats ? 'animate-spin' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <Stat icon={Server} label="Servers" value={stats?.servers} color="#5865F2" />
              <Stat icon={Users} label="Users" value={stats?.users} color="#3b82f6" />
              <Stat icon={Crown} label="Paid Subs" value={stats ? (stats.subscriptions.basic + stats.subscriptions.premium + stats.subscriptions.business) : null} color="#8b5cf6" />
              <Stat icon={CreditCard} label="Revenue" value={stats ? `$${stats.subscriptions.total_revenue}` : null} color="#10b981" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <Stat icon={Activity} label="Latency" value={stats ? `${stats.latency}ms` : null} color="#f59e0b" />
              <Stat icon={Key} label="Keys Available" value={stats?.keys.available} color="#10b981" />
              <Stat icon={Key} label="Keys Used" value={stats?.keys.used} color="#6b7084" />
              <Stat icon={Crown} label="Expired" value={stats?.subscriptions.expired} color="#f43f5e" />
            </div>

            {/* Guilds */}
            <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
              <h3 className="text-sm font-semibold text-[#eaecf2] mb-4">Servers ({guilds?.length || 0})</h3>
              {!guilds ? (
                <p className="text-sm text-[#6b7084] py-4 text-center">Loading...</p>
              ) : guilds.length === 0 ? (
                <EmptyState icon={Server} title="No servers" />
              ) : (
                <div className="space-y-0">
                  {guilds.map(g => (
                    <div key={g.id} className="flex items-center justify-between py-3 border-b border-[#1e2130] last:border-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#1e2130] flex items-center justify-center shrink-0 overflow-hidden">
                          {g.icon ? <img src={g.icon} alt="" className="w-8 h-8 rounded-lg" /> : <Server className="w-4 h-4 text-[#6b7084]" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[#eaecf2] truncate">{g.name}</p>
                          <p className="text-[11px] text-[#6b7084]">{g.members} members</p>
                        </div>
                      </div>
                      <PlanBadge plan={g.plan} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ── SUBSCRIPTIONS ────────────────────── */}
        {tab === 'subscriptions' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-[#eaecf2]">Subscriptions ({subs?.length || 0})</h2>
              <button onClick={loadSubs} disabled={loading.subs} className="text-[#6b7084] hover:text-[#5865F2] transition-colors">
                <RefreshCw className={`w-4 h-4 ${loading.subs ? 'animate-spin' : ''}`} />
              </button>
            </div>

            <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
              {!subs ? (
                <p className="text-sm text-[#6b7084] py-8 text-center">Loading...</p>
              ) : subs.length === 0 ? (
                <EmptyState icon={Crown} title="No subscriptions" />
              ) : (
                <div className="space-y-0">
                  {subs.map(s => (
                    <div key={s.guild_id} className="flex items-center justify-between py-3 border-b border-[#1e2130] last:border-0 gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-[#eaecf2] truncate">{s.guild_name}</p>
                        <p className="text-[11px] text-[#6b7084]">
                          {s.guild_id}
                          {s.expires_at && <> • Expires: {new Date(s.expires_at).toLocaleDateString()}</>}
                          {s.total_paid > 0 && <> • ${s.total_paid} paid</>}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <PlanBadge plan={s.plan} />
                        <button onClick={() => setManageSub(s)} className="text-xs text-[#5865F2] hover:text-[#7289da] transition-colors font-medium px-2 py-1 rounded-lg hover:bg-[#5865F2]/10">
                          Manage
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ── KEYS ─────────────────────────────── */}
        {tab === 'keys' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-[#eaecf2]">License Keys</h2>
              <div className="flex items-center gap-2">
                <button onClick={loadKeys} disabled={loading.keys} className="text-[#6b7084] hover:text-[#5865F2] transition-colors">
                  <RefreshCw className={`w-4 h-4 ${loading.keys ? 'animate-spin' : ''}`} />
                </button>
                <button onClick={() => setShowGenKey(true)} className="flex items-center gap-1.5 text-xs text-[#5865F2] hover:text-[#7289da] font-medium bg-[#5865F2]/10 px-3 py-1.5 rounded-lg transition-colors">
                  <Plus className="w-3.5 h-3.5" /> Generate
                </button>
              </div>
            </div>

            {/* Key Stats */}
            {stats && (
              <div className="grid grid-cols-3 gap-3 mb-4">
                <Stat icon={Key} label="Available" value={stats.keys.available} color="#10b981" />
                <Stat icon={Key} label="Used" value={stats.keys.used} color="#6b7084" />
                <Stat icon={Key} label="Total" value={stats.keys.total} color="#5865F2" />
              </div>
            )}

            <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
              {!keys ? (
                <p className="text-sm text-[#6b7084] py-8 text-center">Loading...</p>
              ) : keys.length === 0 ? (
                <EmptyState icon={Key} title="No license keys" desc="Click Generate to create keys" />
              ) : (
                <div className="space-y-0">
                  {keys.map((k, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-[#1e2130] last:border-0 gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <code className="text-xs text-[#c4c9d4] font-mono truncate">{k.key}</code>
                          <CopyBtn text={k.key} small />
                        </div>
                        <p className="text-[11px] text-[#6b7084] mt-0.5">
                          <PlanBadge plan={k.plan} /> <span className="ml-1">{k.duration_days}d</span>
                          {k.redeemed ? <span className="ml-2 text-[#6b7084]">• Redeemed by {k.redeemed_by}</span> : ''}
                          {k.notes && <span className="ml-2">• {k.notes}</span>}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <div className={`w-2 h-2 rounded-full ${k.redeemed ? 'bg-[#6b7084]' : 'bg-[#10b981]'}`} />
                        {!k.redeemed && (
                          <button onClick={() => { if (confirm('Delete this key?')) deleteKey(k.key) }} className="text-[#6b7084] hover:text-red-400 transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ── LOGS ─────────────────────────────── */}
        {tab === 'logs' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-[#eaecf2]">Activity Log</h2>
              <button onClick={loadLogs} disabled={loading.logs} className="text-[#6b7084] hover:text-[#5865F2] transition-colors">
                <RefreshCw className={`w-4 h-4 ${loading.logs ? 'animate-spin' : ''}`} />
              </button>
            </div>

            <div className="bg-[#12141a] border border-[#1e2130] rounded-xl p-5">
              {!logs ? (
                <p className="text-sm text-[#6b7084] py-8 text-center">Loading...</p>
              ) : logs.length === 0 ? (
                <EmptyState icon={ScrollText} title="No activity yet" desc="Subscription changes will appear here" />
              ) : (
                <div className="space-y-0">
                  {logs.map((log, i) => {
                    const actionColors = { activate: '#10b981', change: '#3b82f6', extend: '#8b5cf6', revoke: '#f43f5e' }
                    const color = actionColors[log.action] || '#6b7084'

                    return (
                      <div key={i} className="flex items-start gap-3 py-3 border-b border-[#1e2130] last:border-0">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}12`, border: `1px solid ${color}18` }}>
                          <Clock className="w-3.5 h-3.5" style={{ color }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-[#eaecf2]">
                            <span className="font-medium capitalize" style={{ color }}>{log.action}</span>
                            {' — '}
                            <span className="text-[#c4c9d4]">{log.guild_name}</span>
                          </p>
                          <p className="text-[11px] text-[#6b7084] mt-0.5">
                            {log.old_plan && log.new_plan && <>{log.old_plan} → {log.new_plan} • </>}
                            {log.duration_days && <>{log.duration_days} days • </>}
                            {log.amount > 0 && <>${log.amount} • </>}
                            {new Date(log.created_at).toLocaleString()}
                          </p>
                          {log.notes && <p className="text-[11px] text-[#3a3d4d] mt-0.5">{log.notes}</p>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[#1e2130] flex items-center justify-between">
          <p className="text-[11px] text-[#3a3d4d]">Hubix Admin v1.0</p>
          <p className="text-[11px] text-[#3a3d4d]">{new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {manageSub && (
          <ManageSubModal
            sub={manageSub}
            onClose={() => setManageSub(null)}
            onDone={() => { setManageSub(null); loadSubs(); loadOverview(); showToast('Subscription updated') }}
          />
        )}
        {showGenKey && (
          <GenerateKeyModal
            onClose={() => setShowGenKey(false)}
            onDone={() => { loadKeys(); loadOverview(); showToast('Keys generated') }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// ═══════════════════════════════════════════════════
//  MAIN EXPORT
// ═══════════════════════════════════════════════════

export default function AdminPanel() {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('hubix_ap')) setAuthed(true)
  }, [])

  const logout = () => {
    sessionStorage.removeItem('hubix_ap')
    setAuthed(false)
  }

  if (!authed) return <Login onLogin={() => setAuthed(true)} />
  return <Dashboard onLogout={logout} />
}
