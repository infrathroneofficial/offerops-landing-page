"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
  compact?: boolean
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function computeTimeLeft(target: Date): TimeLeft | null {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function DigitBox({ value, label, compact }: { value: number; label: string; compact?: boolean }) {
  const display = String(value).padStart(2, "0")
  if (compact) {
    return (
      <span className="flex items-baseline gap-0.5">
        <span className="font-mono text-sm font-bold tabular-nums text-amber-400">{display}</span>
        <span className="text-[10px] font-medium text-slate-500">{label[0]}</span>
      </span>
    )
  }
  return (
    <div className="flex flex-col items-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber-500/30 bg-slate-800 font-mono text-xl font-bold tabular-nums text-amber-400 md:h-14 md:w-14 md:text-2xl">
        {display}
      </span>
      <span className="mt-1.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">
        {label}
      </span>
    </div>
  )
}

export function CountdownTimer({ targetDate, compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const normalized = /Z$|[+-]\d{2}:?\d{2}$/.test(targetDate.trim())
      ? targetDate
      : `${targetDate.trim().replace(/Z$/, "")}Z`
    const target = new Date(normalized)
    setTimeLeft(computeTimeLeft(target))
    setMounted(true)

    const id = setInterval(() => {
      const remaining = computeTimeLeft(target)
      setTimeLeft(remaining)
      if (!remaining) clearInterval(id)
    }, 1000)

    return () => clearInterval(id)
  }, [targetDate])

  if (!mounted) {
    return <span className="text-sm text-slate-500">Loading…</span>
  }

  if (!timeLeft) {
    return (
      <span className="text-sm font-medium text-amber-400/90">
        Cohort in progress
      </span>
    )
  }

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm">
        <DigitBox value={timeLeft.days} label="days" compact />
        <span className="text-slate-600">:</span>
        <DigitBox value={timeLeft.hours} label="hours" compact />
        <span className="text-slate-600">:</span>
        <DigitBox value={timeLeft.minutes} label="min" compact />
        <span className="text-slate-600">:</span>
        <DigitBox value={timeLeft.seconds} label="sec" compact />
      </span>
    )
  }

  return (
    <div className="inline-flex items-start gap-3">
      <DigitBox value={timeLeft.days} label="days" />
      <span className="mt-3 text-lg font-bold text-slate-600">:</span>
      <DigitBox value={timeLeft.hours} label="hours" />
      <span className="mt-3 text-lg font-bold text-slate-600">:</span>
      <DigitBox value={timeLeft.minutes} label="min" />
      <span className="mt-3 text-lg font-bold text-slate-600">:</span>
      <DigitBox value={timeLeft.seconds} label="sec" />
    </div>
  )
}
