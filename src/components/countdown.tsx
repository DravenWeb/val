import { useEffect, useState } from "react";
import { KICKOFF_ISO } from "@/lib/content";

type Parts = { d: number; h: number; m: number; s: number; done: boolean };

function split(ms: number): Parts {
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    done: false,
  };
}

export function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(split(new Date(KICKOFF_ISO).getTime() - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells = parts ?? { d: 0, h: 0, m: 0, s: 0, done: false };
  const units: { label: string; value: number }[] = [
    { label: "Days", value: cells.d },
    { label: "Hours", value: cells.h },
    { label: "Min", value: cells.m },
    { label: "Sec", value: cells.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-line bg-line">
      {units.map((u) => (
        <div key={u.label} className="bg-panel px-2 py-3 text-center sm:px-4 sm:py-4">
          <div className="font-mono text-2xl font-semibold tabular-nums text-fg sm:text-3xl">
            {parts ? String(u.value).padStart(2, "0") : "—"}
          </div>
          <div className="mt-1 font-mono text-[10px] tracking-[0.16em] text-dim uppercase">{u.label}</div>
        </div>
      ))}
    </div>
  );
}
