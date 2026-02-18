"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type StickyCtaProps = {
  label: string
}

export function StickyCta({ label }: StickyCtaProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 transition-all duration-300 md:left-auto md:right-6 md:translate-x-0 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Button
        asChild
        variant="primary"
        size="lg"
        className="cta-primary h-12 w-full rounded-xl text-sm font-semibold shadow-xl"
      >
        <a href="#cta">{label}</a>
      </Button>
    </div>
  )
}
