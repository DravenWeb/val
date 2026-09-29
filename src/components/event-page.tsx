import { ArrowUpRight, Copy, Download } from "lucide-react";
import { toast } from "sonner";
import {
  AGENDA,
  CAPTION,
  COHORT_COMPRESSED,
  GEMINI_PROMPT,
  SOCIAL,
  TIERS,
  VOICES,
  WEEK_PREP,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { Countdown } from "./countdown";
import { RoomsMap } from "./rooms-map";
import { RsvpForm } from "./rsvp-form";
import { StickyNav } from "./sticky-nav";

const accentText: Record<(typeof VOICES)[number]["accent"], string> = {
  cyan: "text-cyan border-cyan/40",
  blue: "text-blue border-blue/40",
  violet: "text-violet border-violet/40",
  amber: "text-amber border-amber/40",
};

async function copyText(label: string, value: string) {
  try {
    await navigator.clipboard.writeText(value);
    toast.success(`${label} copied`);
  } catch {
    toast.error("Could not copy");
  }
}

function SectionHead({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">{kicker}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
    </div>
  );
}

export function EventPage() {
  return (
    <div className="page-bg min-h-screen">
      <StickyNav />

      <section id="brief" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="stagger-in grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase">Draven Core · Q4 2026 briefing</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                The form is closed.
                <span className="mt-2 block text-cyan">Review is the work now.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Free intake for Draven Core is sealed. Applications are being read. People who qualify are invited into{" "}
                <strong className="font-semibold text-fg">DravenWeb3Devs</strong> — the private developers group — where Q4 tools
                and materials land. Public conversation stays on Instagram and Telegram so the community does not go quiet.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line font-mono">
                <div className="bg-panel px-3 py-4 sm:px-4">
                  <b className="block text-lg text-rust sm:text-xl">CLOSED</b>
                  <small className="text-[10px] tracking-[0.14em] text-dim uppercase">Free form</small>
                </div>
                <div className="bg-panel px-3 py-4 sm:px-4">
                  <b className="flex items-center gap-2 text-lg sm:text-xl">
                    <span className="pulse-dot" />
                    LIVE
                  </b>
                  <small className="text-[10px] tracking-[0.14em] text-dim uppercase">Review</small>
                </div>
                <div className="bg-panel px-3 py-4 sm:px-4">
                  <b className="block text-lg text-cyan sm:text-xl">Q4</b>
                  <small className="text-[10px] tracking-[0.14em] text-dim uppercase">Private kit</small>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#confirm"
                  className="inline-flex min-h-11 items-center rounded-full bg-cyan px-5 font-mono text-[12px] font-semibold tracking-[0.12em] text-bg uppercase transition-transform duration-150 hover:bg-fg active:scale-[0.96]"
                >
                  Confirm reachability
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 rounded-full border border-line px-5 font-mono text-[12px] tracking-[0.12em] text-muted uppercase hover:border-cyan/40 hover:text-fg"
                >
                  Instagram square
                  <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href={SOCIAL.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 rounded-full border border-line px-5 font-mono text-[12px] tracking-[0.12em] text-muted uppercase hover:border-cyan/40 hover:text-fg"
                >
                  Public Telegram
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-line bg-panel p-5 sm:p-6">
              <p className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase">Countdown to qualified invites</p>
              <p className="mt-1 text-sm text-muted">6 October 2026 · 18:00 IST · DravenWeb3Devs gate</p>
              <div className="mt-4">
                <Countdown />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-dim">
                First week of October is review-complete + invite. Week 1 kit follows inside the private group, not on this page.
              </p>
            </div>
          </div>

          <blockquote className="mt-12 max-w-3xl border-l-2 border-cyan/50 pl-5 text-base leading-relaxed text-muted sm:text-lg">
            {COHORT_COMPRESSED}
          </blockquote>
        </div>
      </section>

      <section className="border-y border-line bg-panel/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <article key={tier.id} className="flex flex-col rounded-lg border border-line bg-bg p-5 shadow-[var(--shadow-border)]">
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase">{tier.channel}</p>
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-[0.12em] uppercase",
                    tier.id === "private" ? "text-cyan" : tier.id === "waitlist" ? "text-amber" : "text-muted",
                  )}
                >
                  {tier.status}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{tier.name}</h3>
              <p className="mt-1 font-mono text-sm text-cyan">{tier.price}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{tier.blurb}</p>
              {tier.cap ? (
                <div className="mt-4">
                  <div className="h-1.5 overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-cyan"
                      style={{ width: `${Math.round(((tier.cap - (tier.remaining ?? 0)) / tier.cap) * 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.12em] text-dim uppercase">
                    {tier.remaining} remaining of {tier.cap}
                  </p>
                </div>
              ) : (
                <p className="mt-4 font-mono text-[10px] tracking-[0.12em] text-dim uppercase">No seat cap</p>
              )}
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {tier.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 rotate-45 bg-cyan/80" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={cn(
                  "mt-5 inline-flex min-h-11 items-center justify-center rounded-full font-mono text-[11px] tracking-[0.14em] uppercase transition-transform duration-150 active:scale-[0.96]",
                  tier.id === "waitlist" ? "bg-cyan text-bg hover:bg-fg" : "border border-line text-muted hover:text-fg",
                )}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="agenda" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead
            kicker="01 · Agenda"
            title="Review week, then the Q4 room."
            body="This is not a conference timetable. It is the cycle as it actually runs from the sealed form into the private group."
          />
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {AGENDA.map((item, i) => (
              <li key={item.title} className="grid gap-3 py-6 sm:grid-cols-[10rem_7rem_1fr] sm:items-baseline">
                <span className="font-mono text-[11px] tracking-[0.08em] text-dim uppercase">{item.when}</span>
                <span className="w-fit rounded-full border border-line px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-cyan uppercase">
                  {item.tag}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">
                    <span className="mr-2 font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-lg border border-line bg-panel p-6">
            <h3 className="text-lg font-semibold">What applicants do this week</h3>
            <ol className="mt-4 space-y-3">
              {WEEK_PREP.map((item, i) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-cyan">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="voices" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead
            kicker="02 · Voices"
            title="Who speaks for this cycle."
            body="Not a speaker circus. Four seats on the same build — review, routing, tools, destination."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {VOICES.map((v) => (
              <article key={v.code} className="rounded-lg border border-line bg-panel p-6">
                <div className="flex items-center justify-between">
                  <span className={cn("rounded-full border px-2 py-1 font-mono text-[10px] tracking-[0.14em] uppercase", accentText[v.accent])}>
                    {v.code}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-dim uppercase">{v.role}</span>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{v.name}</h3>
                  <div
                    className={cn(
                      "grid size-14 place-items-center rounded-md border bg-bg font-mono text-lg",
                      accentText[v.accent],
                    )}
                    aria-hidden
                  >
                    {v.name.slice(0, 1)}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{v.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead
            kicker="03 · Rooms"
            title="Where the community actually is."
            body="Instagram is the social page. Telegram is the public second door. DravenWeb3Devs is gated. The original form page is sealed and stays as context, not as a live intake."
          />
          <div className="mt-10">
            <RoomsMap />
          </div>
        </div>
      </section>

      <section id="confirm" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            kicker="04 · Confirm"
            title="Log that you are reachable."
            body="The application is closed. This is not a second form. It is a confirmation so the desk can match you to an existing file — or record a waitlist / public-only status. 43 of 80 confirmation slots remain. Private group seats are separate and invite-only."
          />
          <RsvpForm />
        </div>
      </section>

      <section id="post" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead
            kicker="05 · Instagram post · Gemini"
            title="The exact prompt for the status post."
            body="No photograph. Gradient briefing graphic plus a caption. Paste the prompt into Gemini. The poster on the right is the visual direction — cyan/violet on navy, type-only."
          />

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => copyText("Gemini prompt", GEMINI_PROMPT)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cyan px-4 font-mono text-[11px] font-semibold tracking-[0.12em] text-bg uppercase hover:bg-fg"
                >
                  <Copy className="size-3.5" />
                  Copy Gemini prompt
                </button>
                <button
                  type="button"
                  onClick={() => copyText("Caption", CAPTION)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 font-mono text-[11px] tracking-[0.12em] text-muted uppercase hover:text-fg"
                >
                  <Copy className="size-3.5" />
                  Copy caption
                </button>
              </div>
              <pre className="prompt-scroll mt-4 overflow-auto rounded-lg border border-line bg-panel p-4 font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-muted">
                {GEMINI_PROMPT}
              </pre>
              <details className="mt-4 rounded-lg border border-line bg-panel p-4">
                <summary className="cursor-pointer font-mono text-[11px] tracking-[0.14em] text-cyan uppercase">
                  Ready-to-paste caption
                </summary>
                <pre className="mt-3 font-mono text-[12px] leading-relaxed whitespace-pre-wrap text-muted">{CAPTION}</pre>
              </details>
            </div>

            <figure className="mx-auto w-full max-w-xs">
              <img
                src="/ig-closed.jpg"
                alt="Instagram briefing poster: Applications closed, review live, qualified to private group"
                className="w-full rounded-lg outline outline-1 -outline-offset-1 outline-white/10"
              />
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.12em] text-dim uppercase">
                <span>4:5 direction · no photo</span>
                <a href="/ig-closed.jpg" download className="inline-flex items-center gap-1 text-cyan">
                  <Download className="size-3" />
                  Save
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div>
            <p className="italic text-muted">Verify everything. Trust nothing that can’t survive it.</p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-dim uppercase">
              Draven · Tech-savvy Indians · Q4 2026
            </p>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-[11px] tracking-[0.12em] text-dim uppercase">
            <a href={SOCIAL.core} className="hover:text-cyan" target="_blank" rel="noreferrer">
              Original form
            </a>
            <a href={SOCIAL.linktree} className="hover:text-cyan" target="_blank" rel="noreferrer">
              Work
            </a>
            <a href={SOCIAL.email} className="hover:text-cyan">
              dravenweb3@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
