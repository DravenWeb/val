export const APP_NAME = "DravenWeb3Devs";

export const SOCIAL = {
  instagram: "https://instagram.com/DravenWeb3",
  telegram: "https://t.me/DravenWeb3",
  linktree: "https://linktr.ee/DravenWeb3",
  core: "https://dravenweb.github.io/val/",
  email: "mailto:dravenweb3@gmail.com",
} as const;

/** Q4 briefing unlock — 6 Oct 2026, 18:00 IST (12:30 UTC). */
export const KICKOFF_ISO = "2026-10-06T12:30:00.000Z";

export const NAV = [
  { id: "brief", label: "Brief" },
  { id: "agenda", label: "Agenda" },
  { id: "voices", label: "Voices" },
  { id: "rooms", label: "Rooms" },
  { id: "confirm", label: "Confirm" },
  { id: "post", label: "Post" },
] as const;

export const TIERS = [
  {
    id: "public",
    name: "Public square",
    channel: "Instagram · Telegram",
    price: "Open",
    remaining: null as number | null,
    cap: null as number | null,
    status: "Live",
    cta: "Stay on the feed",
    href: SOCIAL.instagram,
    blurb:
      "Where the community stays active this week. Status posts, Q4 language, and anything that can be said in public lives here — not in DMs.",
    perks: [
      "Official status, not rumours",
      "Public Telegram as the second door",
      "No application required",
    ],
  },
  {
    id: "waitlist",
    name: "Q4 confirmation",
    channel: "This page · RSVP",
    price: "Waitlist",
    remaining: 43,
    cap: 80,
    status: "43 / 80 left",
    cta: "Confirm your seat",
    href: "#confirm",
    blurb:
      "For people who applied, or who missed the form and still want a record. Confirmation does not equal a private-group invite. It tells the desk you are reachable.",
    perks: [
      "Logged against your application email",
      "Telegram handle for the invite channel",
      "Week-1 kit if you are later qualified",
    ],
  },
  {
    id: "private",
    name: "DravenWeb3Devs",
    channel: "Private group · invite only",
    price: "Qualified",
    remaining: 22,
    cap: 40,
    status: "22 seats unallocated",
    cta: "Invite only",
    href: "#brief",
    blurb:
      "The working room. Qualified applicants are pulled in during the first week of October. Q4 tools, materials, and first assignments are issued here — as described while the form was open.",
    perks: [
      "Tools and Q4 materials",
      "First assignments, reviewed",
      "Not a subscriber chat",
    ],
  },
] as const;

export const AGENDA = [
  {
    when: "29 Sep · 18:00 IST",
    tag: "Sealed",
    title: "Free form closed",
    detail:
      "The 45-question Draven Core co-builder application is sealed. No late entries this cycle.",
  },
  {
    when: "29 Sep – 5 Oct",
    tag: "Silent week",
    title: "Personal review",
    detail:
      "Every application is read. There is no auto-reply and no public scoreboard. Do not DM for status.",
  },
  {
    when: "1 Oct · 11:00 IST",
    tag: "Public",
    title: "Instagram status post",
    detail:
      "The only official public update this week. Gradient briefing graphic + caption. Gemini prompt for that post is at the bottom of this page.",
  },
  {
    when: "6 Oct · 18:00 IST",
    tag: "Gate",
    title: "Qualified → DravenWeb3Devs",
    detail:
      "Invites drop into the private developers group for people who qualified. Telegram handle on the form is the channel.",
  },
  {
    when: "6 – 12 Oct",
    tag: "Week 1",
    title: "Tools and Q4 materials",
    detail:
      "Kit, first assignment, and the quarter’s working materials — the same stack described while applications were open.",
  },
  {
    when: "Q4 2026",
    tag: "Build",
    title: "Bench cycle",
    detail:
      "Ship against the LokChain bench. Review continues as work, not as a form.",
  },
] as const;

export const VOICES = [
  {
    code: "01",
    name: "Draven",
    role: "Architect · Review",
    accent: "cyan" as const,
    bio: "Publishes as Decentralised Epistemologist. Reads every Core application personally. The product carries the claim — not a founder story.",
  },
  {
    code: "02",
    name: "Core Desk",
    role: "Screening · Routing",
    accent: "blue" as const,
    bio: "Turns 45 answers into a yes, a hold, or a no. Routes qualified people into DravenWeb3Devs. Does not run a course.",
  },
  {
    code: "03",
    name: "Intel Bench",
    role: "Tools · Q4 kit",
    accent: "violet" as const,
    bio: "Draven Intel is live — the proof the execution model works. Q4 materials for the private group come off this bench, not off a slide deck.",
  },
  {
    code: "04",
    name: "LokChain Seat",
    role: "Destination protocol",
    accent: "amber" as const,
    bio: "Mass-market crypto and Web3 infrastructure for the next hundred million Indian participants. Core exists to build the bench before this needs them.",
  },
] as const;

export const ROOMS = [
  {
    id: "ig",
    name: "Instagram",
    handle: "@DravenWeb3",
    state: "Public · live",
    x: 8,
    y: 14,
    w: 54,
    h: 28,
    href: SOCIAL.instagram,
  },
  {
    id: "tg",
    name: "Telegram",
    handle: "Public socials",
    state: "Public · live",
    x: 66,
    y: 14,
    w: 26,
    h: 28,
    href: SOCIAL.telegram,
  },
  {
    id: "form",
    name: "Application vault",
    handle: "dravenweb.github.io/val",
    state: "Sealed · 29 Sep",
    x: 8,
    y: 48,
    w: 38,
    h: 24,
    href: SOCIAL.core,
  },
  {
    id: "work",
    name: "Workbench",
    handle: "linktr.ee/DravenWeb3",
    state: "Public · work",
    x: 50,
    y: 48,
    w: 42,
    h: 24,
    href: SOCIAL.linktree,
  },
  {
    id: "devs",
    name: "DravenWeb3Devs",
    handle: "Private group",
    state: "Invite · first week of Oct",
    x: 8,
    y: 78,
    w: 84,
    h: 18,
    href: "#confirm",
  },
] as const;

export const WEEK_PREP = [
  "Do not DM Draven, the desk, or anyone “in the group” asking if you got in.",
  "If you listed a Telegram handle on the form, leave it intact. That is the invite channel.",
  "Keep shipping the thing you said you were building. Review is of the file, then of the work.",
  "Watch Instagram @DravenWeb3. That is the public square this week. Telegram public socials are the second door.",
  "Read the Core terms you agreed to when you opened the form. Qualified means you enter that framework, not a fan chat.",
  "Prepare a one-pager of current work (repo, live tool, or deployed surface). Week 1 will ask for it.",
] as const;

export const COHORT_COMPRESSED = `Draven Core is a working cohort, not an audience. It is attached to a live 2026–2027 build — Draven Intel in production, LokChain as the destination — and it screens for people who already ship. The free 45-question form is the intake, not a course checkout. Qualified applicants are invited into DravenWeb3Devs, a private developers group, where Q4 tools, materials, and first assignments are issued. Public conversation stays on Instagram and the public Telegram. The private group is the working room.`;

export const CAPTION = `APPLICATIONS CLOSED.

The free Draven Core form is sealed as of 29 September 2026. If you applied, you are in review — not in a queue bot. Every application is read personally. That work runs through the first week of October.

What to do this week:
— Do not DM for status.
— Do not ask “did I get in.”
— Keep shipping what you said you were building.
— If you put a Telegram handle on the form, that is the invite channel.
— Stay on this account.

Qualified applicants are being invited into DravenWeb3Devs — a private developers group. That is where Q4 tools, materials, and the first assignments land. It is not a subscriber chat. It is the working room.

Draven Core is a working cohort, not an audience. It exists to build the bench for LokChain during the 2026–2027 window, attached to a live product (Draven Intel), not a course. If you applied, you already know this. This post is the status, not a recap.

If you did not apply: the form is closed this cycle. The public community stays open here.

Qualified → DravenWeb3Devs.
Everyone else → this feed, and the public Telegram.

Briefing in bio.`;

export const GEMINI_PROMPT = `You are producing ONE Instagram post for @DravenWeb3 — the public channel of Draven Core / DravenWeb3Devs.

This is not a festival flyer, not a hackathon banner, not a “we’re excited to announce” launch. It is a classified-style status briefing for India’s tech-savvy Web3 builders.

DATE (do not invent others):
- Today / post date: 29 September 2026 (or 1 October 2026 if scheduled)
- Free 45-question Draven Core co-builder application: CLOSED / sealed 29 Sep 2026
- Personal review: ongoing through the first week of October 2026
- Qualified invites into the private group: from 6 October 2026, 18:00 IST
- Cycle: Q4 2026 tools and materials, inside the 2026–2027 LokChain bench window

WHAT THE POST MUST MAKE THE COMMUNITY KNOW:
1. The free form is closed. No late applications this cycle.
2. Review is ongoing (almost through this batch) and personal — not automated.
3. People who qualify are invited to DravenWeb3Devs, a PRIVATE developers group. That is where the Devs community continues: discussion, tools, and Q4 materials — the same kit described while the application was open.
4. Public community stays alive on Instagram (@DravenWeb3) and public Telegram. Do not starve the public layer. The private group is not a dump of the feed.
5. During review week, applicants should: not DM for status; keep shipping; leave their Telegram handle as submitted; watch this Instagram account.

COHORT VALIDATION (compress into 2–3 lines inside the caption, do not lecture):
Draven Core is a working cohort, not an audience. Attached to a live build (Draven Intel → LokChain). For people who already ship, not people looking for a mentor, a course, or a paid alpha group.

VOICE:
Draven’s: precise, anti-hype, India-tech-savvy, “verify everything.” No “family,” no “gm,” no “huge news,” no fake scarcity countdown, no guaranteed outcomes, no investment language. Optional single trident 🔱 once. Maximum 8 hashtags, all precise, at the very end. Suggested: #DravenWeb3 #DravenCore #DravenWeb3Devs #Web3India #LokChain

OUTPUT 1 — VISUAL (generate this graphic; do NOT place a photograph, a person, a face, a selfie, a stock “crypto coin,” Bitcoin logo, Ethereum logo, or 3D rocket):
- Aspect: 4:5 Instagram portrait (1080×1350)
- Field: navy #05070d
- Atmosphere: sparse diagonal wash of cyan #00e5ff (top-left) and electric violet #a78bfa (bottom-right). No rainbow blobs.
- Frame: 1px cyan hairline inset, generous margins
- Glyph: one small cyan diamond / spark, rotated 45°
- Type, stacked, editorial, huge negative space:
  Top (monospace, tracked out, dim ice): DRAVENWEB3DEVS · Q4 2026
  Hero (condensed white sans, very large): APPLICATIONS
  Second line (same): CLOSED
  Accent (cyan): REVIEW LIVE
  Footer (ice, small): QUALIFIED → PRIVATE GROUP
- Feel: a sealed envelope / briefing stamp. Not a music festival. Not a startup landing page screenshot.

OUTPUT 2 — CAPTION (plain text, ready to paste into Instagram; no image in the caption itself):
Write the caption in the voice above. Structure:
- Line 1: APPLICATIONS CLOSED. (or equivalent status punch)
- What applicants do this week (the five behaviours)
- What “qualified” means (invite to DravenWeb3Devs; Q4 tools/materials)
- 2–3 line cohort validation
- Split of rooms: public Instagram + public Telegram vs private Devs group
- CTA: stay on this account; briefing / original form context lives at https://dravenweb.github.io/val/ (link in bio)
- Hashtags last

Do not mention Gemini, prompts, or that this was generated. Do not add a second image. Do not put a QR code. Do not invent a public join-link for the private group.`;
