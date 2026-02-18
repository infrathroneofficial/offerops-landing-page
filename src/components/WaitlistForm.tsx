"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const waitlistSchema = z.object({
  email: z.string().trim().email("Enter a valid work email"),
})

type WaitlistFormValues = z.infer<typeof waitlistSchema>

type WaitlistFormProps = {
  className?: string
  buttonLabel?: string
  variant?: "default" | "footer"
}

export function WaitlistForm({
  className,
  buttonLabel = "Join waitlist",
  variant = "default",
}: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: WaitlistFormValues) => {
    if (!values.email) return
    setSubmitError(null)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setSubmitError(typeof data.error === "string" ? data.error : "Something went wrong. Please try again.")
        return
      }
      setSubmitted(true)
      form.reset()
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={className ?? "space-y-3"}
      noValidate
    >
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Work email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          aria-invalid={Boolean(form.formState.errors.email)}
          className="h-14 min-h-[56px] rounded-xl border border-slate-600 bg-slate-800 px-5 text-white placeholder:text-slate-400 transition-shadow duration-200 focus-visible:ring-indigo-500/60"
          {...form.register("email")}
        />
        {form.formState.errors.email ? (
          <p className="text-sm font-medium text-red-400">{form.formState.errors.email.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className={
          variant === "footer"
            ? "h-14 min-h-[56px] w-full rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-violet-500"
            : "h-12 min-h-[48px] w-full rounded-lg font-medium"
        }
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Joining…" : buttonLabel}
      </Button>

      {submitError ? (
        <p className="rounded-md border border-red-800 bg-red-950/50 px-3 py-2 text-sm text-red-300">
          {submitError}
        </p>
      ) : null}
      {submitted ? (
        <p className="rounded-md border border-emerald-800 bg-emerald-950/50 px-3 py-2 text-sm text-emerald-300 transition-all duration-200">
          You are on the waitlist. We will reach out with cohort details.
        </p>
      ) : null}
    </form>
  )
}
