const siteUrl = "https://offerops.infrathrone.xyz";

export const SITE_CONFIG = {
  name: "OfferOps",
  siteUrl,
  cohortDate: "March 2026",
  cohortStartDate: "2026-03-02T00:00:00Z",
  urgencyBadge: "Only 15 seats",
  cohortSize: 15,
  title: "OfferOps - Production stories get offers",
  description:
    "12 mocks. Real client exposure. Resume that converts. A 30-day DevOps Interview War Room to clear final rounds with confidence.",
  ctaText: "Reserve my seat",
  ctaLink: "https://topmate.io/saurav_chaudhary_1/1966594",
  heroBadge: "30-day War Room",
  heroSubtext: "12 mocks. Real client exposure. Resume that converts.",
  heroEmpathy:
    "You know the tech. We help you tell the story that gets the offer.",
  heroConfidence:
    "Stop guessing what interviewers want. Ship stories that close the loop.",
  footerCtaSubtext: "Only 15 seats — March 2026",
  footerCtaOptionalLine: "Reserve your seat for the next 30-day run.",
  formReassurance:
    "No spam. We'll only email about the next cohort and how to apply.",
  seatsRemaining: "Only 15 seats — March 2026 cohort",
} as const;

export const HERO_METRICS = {
  mocks: "Mocks in 30 days",
  interviewCalls: "More callbacks",
  salaryJump: "Reported salary jump",
} as const;

export const SECTION_COPY = {
  whoTitle: "Who it's for",
  whoHeadline: "You're getting callbacks but dying in finals",
  whoTagline: "The War Room is built for engineers like you.",
  problemTitle: "Why great engineers still get rejected",
  problemBlockquote: "We fix exactly that - in 30 days.",
  outcomeHeadline: "In 30 days you walk out with:",
  outcomeEmotionalLine: "Walk into interviews knowing your stories land.",
  proofSectionContext: "Typical outcomes from past cohorts",
  logoStripLabel: "Where our participants landed",
} as const;

export const WHO_THIS_IS_FOR = [
  "DevOps engineers struggling to clear final rounds",
  "Engineers stuck in same salary band",
  "People getting interviews but no offers",
  "People afraid of system design / Kubernetes deep dives",
  "People with knowledge but no production stories",
  "Engineers switching jobs after 1-2 years",
] as const;

export const CORE_PROBLEMS = [
  "They know tools",
  "But cannot explain architecture",
  "Cannot talk trade-offs",
  "Cannot narrate production stories",
  "Cannot handle scenario questions",
  "CV does not reflect impact",
] as const;

export const WEEK_BREAKDOWN = [
  {
    title: "Foundation & Gap Exposure",
    objective: "Resume audit, mock interviews, identify gaps",
    bullets: [
      "Resume deep audit (line by line)",
      "3 Mock Interviews (Mon/Wed/Fri)",
      "Identify technical + storytelling gaps",
    ],
  },
  {
    title: "Production Depth",
    objective: "Advanced mocks, STAR/RCA workshop, production stories",
    bullets: [
      "3 Advanced Mock Interviews",
      "STAR + RCA storytelling workshop",
      "5 strong production stories + outage/scaling/security stories",
    ],
  },
  {
    title: "Real Client Exposure",
    objective: "Real InfraThrone/Vybe client tasks, runbooks, PR contribution",
    bullets: [
      "Assigned real InfraThrone / Vybe Labs client tasks",
      "Observe architecture discussions and create runbooks",
      "Real PR contribution + real metrics-based story",
    ],
  },
  {
    title: "Interview Domination",
    objective: "Final mocks, system design, salary negotiation, referrals",
    bullets: [
      "3 Final-level mock interviews",
      "System design + HR/behavioral rounds",
      "Salary negotiation session + referral mapping",
    ],
  },
] as const;

export const DIFFERENTIATORS = {
  notThis: ["Not Just Q&A", "Not Just Theory", "Not Just Mock Calls"],
  weDeliver: [
    "Real Production Stories",
    "Real Client Exposure",
    "CV Optimization",
    "LinkedIn Positioning",
    "Naukri Keyword Engineering",
    "Referrals",
  ],
} as const;

export const FINAL_OUTCOME = [
  "12 Mock Interviews experience",
  "Production-ready stories",
  "Real client exposure",
  "Resume that gets callbacks",
  "LinkedIn optimized for recruiters",
  "Confidence in scenario rounds",
  "Referral support",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I stopped sounding like a tool list and started sounding like an engineer who owns outcomes.",
    name: "Aman S.",
    role: "DevOps Engineer, 4 YOE",
  },
  {
    quote:
      "The mock pressure and story drills made final rounds feel familiar instead of scary.",
    name: "Riya K.",
    role: "SRE, switched from support",
  },
] as const;

export const STANDOUT_QUOTE = {
  quote:
    "I went from 'explain your biggest outage' panic to leading the conversation with confidence.",
  attribution: "War Room participant",
} as const;

export const INSTRUCTOR = {
  name: "Saurav Chaudhary",
  title: "Elite DevOps Architect & War Room Commander",
  imageUrl: "/SauravChaudhary.jpeg",
  tagline:
    "Highly regarded for his impactful mentorship in DevOps, making complex topics accessible and fostering confidence among learners.",
  stats: ["Production systems", "Interview coaching", "Resume & storytelling"],
  skills: [
    "Expert Interview Coaching",
    "Production Storytelling Mastery",
    "Resume Optimization & LinkedIn Enhancement",
    "STAR & RCA Framework Implementation",
  ],
  victories: [
    "Engineers who transformed from 'explain your biggest outage' panic to confident storytellers",
    "CVs that convert interviews into offers",
    "LinkedIn profiles that land more callbacks",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/sauravstwt/",
    topmate: "https://topmate.io/saurav_chaudhary_1",
    twitter: "https://x.com/sauravstwt",
  },
} as const;

export const FAQ_ITEMS = [
  {
    question: "Who is the War Room for?",
    answer:
      "DevOps and SRE engineers who get interviews but struggle in final rounds, or who want to move into better roles with stronger storytelling and production narratives.",
  },
  {
    question: "What do I get in 30 days?",
    answer:
      "12 mock interviews, real client exposure, resume and LinkedIn optimization, production-ready stories, and referral support—all aimed at clearing final rounds and negotiating with confidence.",
  },
  {
    question: "How is this different from generic mock interviews?",
    answer:
      "We focus on production stories, STAR and RCA framing, and turning your real experience into narratives that land. Plus real client tasks and CV optimization, not just Q&A practice.",
  },
  {
    question: "When is the next cohort?",
    answer:
      "The next 30-day War Room cohort runs in March 2026. Reserve your seat to get early access and cohort details.",
  },
  {
    question: "What if I miss a session?",
    answer:
      "Sessions are structured so you can catch up; we also share materials and recordings where applicable. The goal is consistent practice over the 30 days.",
  },
] as const;
