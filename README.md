# OfferOps Landing Page

Corporate minimalist landing page for OfferOps DevOps Interview War Room.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- React Hook Form + Zod (client-side waitlist validation)

## Development

```bash
bun run dev
```

Open `http://localhost:3000`.

## Build and start

```bash
bun run build
bun run start
```

## Notes

- Waitlist form is client-only (no backend persistence).
- Cohort date is configured in `src/config/site.ts`.
- 404 page includes a waitlist prompt.

## Deploy

This project is Vercel-ready with default Next.js settings.
