import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { WEEK_PREP } from "@/lib/content";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "dravenweb3devs-rsvp-v1";

type Track = "applied" | "waitlist" | "following";

type RsvpRecord = {
  name: string;
  email: string;
  telegram: string;
  track: Track;
  note: string;
  at: string;
};

const TRACKS: { id: Track; label: string; hint: string }[] = [
  { id: "applied", label: "I applied", hint: "Use the same email as the form" },
  { id: "waitlist", label: "I missed it", hint: "Confirm a waitlist record" },
  { id: "following", label: "Public only", hint: "Stay on Instagram / Telegram" },
];

export function RsvpForm() {
  const [saved, setSaved] = useState<RsvpRecord | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [track, setTrack] = useState<Track>("applied");
  const [note, setNote] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw) as RsvpRecord);
    } catch {
      /* ignore */
    }
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim().includes("@")) {
      setError("Name and a real email are required.");
      return;
    }
    if (track !== "following" && !telegram.trim()) {
      setError("Telegram handle is required unless you are public-only.");
      return;
    }
    if (!agree) {
      setError("Confirm you have read the Core guidelines.");
      return;
    }
    const next: RsvpRecord = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      telegram: telegram.trim().replace(/^@/, ""),
      track,
      note: note.trim(),
      at: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(next);
    toast.success("Confirmation logged on this device.");
  }

  if (saved) {
    return (
      <div className="rounded-lg border border-cyan/30 bg-panel p-6 shadow-[0_0_0_1px_rgba(0,229,255,0.12)] sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 text-cyan" />
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-cyan uppercase">Logged · received</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">You are on the record, {saved.name.split(" ")[0]}.</h3>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
              {saved.track === "applied"
                ? "If you applied, stay off DMs this week. Review is personal. Qualified invites drop into DravenWeb3Devs. Meanwhile — Instagram is the public square, public Telegram is the second door."
                : saved.track === "waitlist"
                  ? "Waitlist confirmation is a reachability record, not a private-group invite. The form is sealed this cycle. Stay on the public rooms; if a later pass opens, this email is the contact."
                  : "Public-only is noted. The community stays active on Instagram and public Telegram. The private group is not a public join link."}
            </p>
            <dl className="mt-5 grid gap-3 font-mono text-[12px] sm:grid-cols-2">
              <div className="rounded-md bg-panel-2 px-3 py-3">
                <dt className="text-dim">Email</dt>
                <dd className="mt-1 text-fg">{saved.email}</dd>
              </div>
              <div className="rounded-md bg-panel-2 px-3 py-3">
                <dt className="text-dim">Telegram</dt>
                <dd className="mt-1 text-fg">{saved.telegram ? `@${saved.telegram}` : "—"}</dd>
              </div>
            </dl>
            <ol className="mt-6 space-y-2 text-sm text-muted">
              {WEEK_PREP.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <button
              type="button"
              className="mt-6 min-h-11 rounded-full border border-line px-4 font-mono text-[11px] tracking-[0.12em] text-muted uppercase hover:text-fg"
              onClick={() => {
                localStorage.removeItem(STORAGE_KEY);
                setSaved(null);
              }}
            >
              Edit confirmation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-line bg-panel p-5 sm:p-8">
      <div className="grid gap-2 sm:grid-cols-3">
        {TRACKS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTrack(t.id)}
            className={cn(
              "min-h-14 rounded-md border px-3 py-3 text-left transition-[box-shadow,border-color] duration-150",
              track === t.id ? "border-cyan/50 bg-panel-2 shadow-[0_0_0_1px_rgba(0,229,255,0.25)]" : "border-line hover:border-muted",
            )}
          >
            <div className="font-mono text-[11px] tracking-[0.12em] text-fg uppercase">{t.label}</div>
            <div className="mt-1 text-xs text-dim">{t.hint}</div>
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-mono text-[10px] tracking-[0.14em] text-dim uppercase">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 min-h-11 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none focus:border-cyan/60"
            autoComplete="name"
            required
          />
        </label>
        <label className="block text-sm">
          <span className="font-mono text-[10px] tracking-[0.14em] text-dim uppercase">Email (application if you applied)</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 min-h-11 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none focus:border-cyan/60"
            autoComplete="email"
            required
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-mono text-[10px] tracking-[0.14em] text-dim uppercase">Telegram handle</span>
          <input
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            placeholder="@handle"
            className="mt-1.5 min-h-11 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none placeholder:text-dim focus:border-cyan/60"
            autoComplete="off"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-mono text-[10px] tracking-[0.14em] text-dim uppercase">What you are shipping (optional)</span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="mt-1.5 w-full rounded-md border border-line bg-bg px-3 py-2 text-fg outline-none focus:border-cyan/60"
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 size-4 accent-cyan"
        />
        <span>
          I have read the Core terms and community guidelines. Confirmation is a reachability record, not a guaranteed invite.
        </span>
      </label>

      {error ? <p className="mt-4 text-sm text-rust">{error}</p> : null}

      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-cyan px-6 font-mono text-[12px] font-semibold tracking-[0.14em] text-bg uppercase transition-transform duration-150 ease-out hover:bg-fg active:scale-[0.96]"
      >
        Log confirmation
      </button>
    </form>
  );
}
