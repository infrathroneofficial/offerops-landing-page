"use client"

import { useEffect, useState } from "react"

type CountUpProps = {
  to: number
  durationMs?: number
  suffix?: string
}

export function CountUp({ to, durationMs = 1200, suffix = "" }: CountUpProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame = 0
    let start = 0

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / durationMs, 1)
      setValue(Math.floor(progress * to))
      if (progress < 1) frame = window.requestAnimationFrame(step)
    }

    frame = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(frame)
  }, [durationMs, to])

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}
