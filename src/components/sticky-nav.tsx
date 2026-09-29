import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/utils";

export function StickyNav() {
  const [active, setActive] = useState<string>("brief");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = NAV.map((item) => item.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#brief" className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          <span className="spark-mark" aria-hidden />
          <span className="text-fg">Draven</span>
          <span className="text-dim">·</span>
          <span className="text-cyan">Web3Devs</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-3 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-150",
                active === item.id ? "bg-panel-2 text-cyan" : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#confirm"
          className="hidden rounded-full bg-cyan px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.12em] text-bg uppercase transition-transform duration-150 ease-out hover:bg-fg active:scale-[0.96] md:inline-flex"
        >
          Confirm
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-fg md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-[11px] tracking-widest">{open ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line px-4 py-3 md:hidden" aria-label="Mobile sections">
          <div className="grid grid-cols-2 gap-2">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "min-h-11 rounded-md border border-line px-3 py-3 font-mono text-[11px] tracking-[0.12em] uppercase",
                  active === item.id ? "border-cyan/40 text-cyan" : "text-muted",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
