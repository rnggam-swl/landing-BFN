// All landing-page copy lives here so sections stay purely presentational.
// Links marked "#" point to pages that don't exist yet.

export type Link = {
  label: string
  href: string
}

export const HERO_VIDEO = {
  src: "https://res.cloudinary.com/lwktswtn/video/upload/v1787535728/hero-video.mp4",
  poster:
    "https://res.cloudinary.com/lwktswtn/video/upload/so_0,q_auto/v1787535728/hero-video.jpg",
}

export const REGISTER_URL = "#"

export const LOGIN_URL = "#"

export const NAV_LINKS: Link[] = [
  { label: "Home", href: "#home" },
  { label: "About BFN", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Speakers", href: "#speakers" },
  { label: "Exhibitors", href: "#" },
  { label: "Job Fair", href: "#" },
  { label: "News", href: "#" },
]

export const EVENT = {
  tagline: "Fintech is All Around You",
  summary:
    "Join National Fintech Month 2026 — a full month of conferences, expos, and hands-on experiences from Indonesia's digital finance ecosystem.",
  period: { label: "Program Period", value: "11 Nov – 12 Des 2026" },
  flagship: {
    label: "Flagship Event (In-Person)",
    value: "Balai Kartini, Jakarta",
  },
}

export const ABOUT = {
  eyebrow: "About BFN",
  title: "More Than A One-Day Event",
  body: "National Fintech Month (BFN) is a month-long collaboration platform showcasing the full scope of Indonesia's digital finance ecosystem — from policy dialogue to industry innovation. Hosted by AFTECH together with Bank Indonesia, OJK, and government institutions, BFN 2026 runs from November 11 to December 12.",
  cta: { label: "Learn More", href: "#" },
}

export type Stat = {
  value: string
  label: string
}

export const TRACK_RECORD = {
  eyebrow: "BFN 2025",
  title: "Last Year's Track Record",
  stats: [
    { value: "150+", label: "Contributors" },
    { value: "90+", label: "Strategic Partners" },
    { value: "4,500+", label: "Conference & Expo Attendees" },
    { value: "170+", label: "Job Openings" },
    { value: "100+", label: "Speakers" },
  ] satisfies Stat[],
}

export type Experience = {
  title: string
  description: string
  image?: string
}

export const EXPERIENCES = {
  eyebrow: "What You'll Find at BFN 2026",
  title:
    "Everything, Everywhere, Productive at Once: Fintech & Real Sector Growth",
  items: [
    {
      title: "Conference",
      description:
        "Strategic discussions on responsible digital finance innovation.",
    },
    {
      title: "Expo",
      description:
        "B2B & B2C solution showcases from hundreds of fintech companies.",
    },
    {
      title: "Infinity Stage",
      description:
        "Edu-Talks and entertainment come together in one experience.",
    },
    {
      title: "Connection Lounge",
      description:
        "Curated business matching sessions to unlock new connections.",
    },
    {
      title: "Fintech Xperience",
      description:
        "Try the latest fintech innovations and product demos firsthand.",
    },
    {
      title: "Entertainment",
      description: "Two full days of performances and immersive experiences.",
    },
  ] satisfies Experience[],
}

export type Session = {
  time: string
  title: string
  description: string
}

export type ScheduleDay = {
  label: string
  date: string
  sessions: Session[]
}

export const SCHEDULE = {
  eyebrow: "Schedule",
  title: "A look at the two-day schedule",
  note: "Schedule is subject to change — final version shared closer to the event.",
  cta: { label: "View Full Schedule", href: "#" },
  emptyMessage: "The agenda for this day will be announced soon.",
  days: [
    {
      label: "Day 1",
      date: "26 November 2026",
      sessions: [
        {
          time: "09.00–12.00",
          title: "Digital x Real Sector Launchpad Workshop",
          description:
            "#See It. Try It. Build It — Industry Challenges Forum, Business Showcase, Productivity Clinics.",
        },
        {
          time: "13.00–14.15",
          title: "Opening Ceremony",
          description:
            "Welcome remarks from AFTECH's Chairman, keynote by Indonesia's Coordinating Minister for Economic Affairs, photo session.",
        },
        {
          time: "14.25–16.10",
          title: "Super Panel & Visionary Speech",
          description:
            "Redefining Financial Architecture, ASEAN Digital Economic Framework, Indonesia Digital Finance 2030.",
        },
      ],
    },
    { label: "Day 2", date: "27 November 2026", sessions: [] },
  ] satisfies ScheduleDay[],
}

export type Speaker = {
  name: string
  role: string
  photo?: string
}

export const SPEAKERS = {
  eyebrow: "Speakers",
  title: "Meet The Fintech Leaders",
  intro: "250+ national and international speakers will join BFN FEST 2026.",
  cta: { label: "See All Speakers", href: "#" },
  items: [
    { name: "Dinda Larasati", role: "VP of Digital Banking, Bank Nusantara" },
    { name: "Reza Pratama", role: "Co-Founder, Fintech Merdeka" },
    {
      name: "Sarah Tanuwijaya",
      role: "Head of Policy, Digital ID Association",
    },
    { name: "Aditya Nugroho", role: "Chief Innovation Officer, Garuda Pay" },
  ] satisfies Speaker[],
}

export const VENUE = {
  eyebrow: "Venue",
  title: "BFN FEST 2026's New Home",
  address:
    "Jl. Jend. Gatot Subroto Kav. 37, Kuningan Timur, Setiabudi, South Jakarta 12950",
  intro: "A bigger stage for a more immersive experience.",
  highlights: [
    "Strategic, easy-to-reach location",
    "Built for a bigger BFN FEST",
    "Multiple experiences, one venue",
    "Designed for engagement",
  ],
  cta: { label: "View Full Schedule", href: "#" },
}

export type Sponsor = {
  name: string
  logo?: string
}

// Placeholder slots until partner logos are confirmed.
const placeholders = (count: number, prefix: string): Sponsor[] =>
  Array.from({ length: count }, (_, i) => ({ name: `${prefix} ${i + 1}` }))

export const SPONSORS = {
  eyebrow: "Supported By",
  title: "Partners & Sponsors",
  official: {
    label: "Official Partner",
    items: placeholders(2, "Official partner"),
  },
  tiers: [
    { label: "Gold & Silver Sponsors", items: placeholders(7, "Sponsor") },
    {
      label: "Strategic Partners",
      items: placeholders(7, "Strategic partner"),
    },
  ],
}

export const CALL_TO_ACTION = {
  eyebrow: "Don’t Miss Out",
  title: "BFN FEST 2026 is Waiting For You",
  body: EVENT.summary,
}

export type FooterColumn = {
  title: string
  links: Link[]
}

export const FOOTER = {
  address:
    "Eco-S Coworking & Office Space, Sahid Sudirman Residence, Jl. Jenderal Sudirman No.86 2nd floor, Central Jakarta 10220.",
  copyright:
    "© 2026 Indonesia Fintech Association (AFTECH). All rights reserved.",
  columns: [
    {
      title: "About",
      links: [
        { label: "About BFN 2026", href: "#about" },
        { label: "Theme & Pillars", href: "#" },
        { label: "BFN 2025", href: "#" },
      ],
    },
    {
      title: "Events",
      links: [
        { label: "All Events", href: "#" },
        { label: "BFN FEST 2026", href: "#" },
        { label: "Schedule", href: "#schedule" },
        { label: "Speakers", href: "#speakers" },
      ],
    },
    {
      title: "Exhibitors & Promotions",
      links: [
        { label: "All Exhibitors", href: "#" },
        { label: "Startup & SME", href: "#" },
        { label: "Promotions", href: "#" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Job Fair", href: "#" },
        { label: "News & Insights", href: "#" },
        { label: "Venue", href: "#venue" },
        { label: "Participate", href: "#" },
      ],
    },
  ] satisfies FooterColumn[],
  socials: [
    { label: "IG", name: "Instagram", href: "#" },
    { label: "IN", name: "LinkedIn", href: "#" },
    { label: "YT", name: "YouTube", href: "#" },
  ],
}
