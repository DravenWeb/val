import { ArrowUpRight } from "lucide-react";
import { ROOMS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function RoomsMap() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-panel">
      <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-2xs tracking-widest text-dim uppercase">
        <span>Community topology · not a street map</span>
        <span className="text-cyan">Online campus · IST</span>
      </div>
      <div className="campus-grid p-4 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-12">
          {ROOMS.map((room) => {
            const gated = room.id === "devs";
            const sealed = room.id === "form";
            const span =
              room.id === "ig" ? "sm:col-span-7" : room.id === "tg" ? "sm:col-span-5" : room.id === "devs" ? "sm:col-span-12" : "sm:col-span-6";
            return (
              <a
                key={room.id}
                href={room.href}
                className={cn(
                  "min-h-28 rounded-md border bg-panel-2/90 p-4 transition-[box-shadow,border-color] duration-150 hover:shadow-[var(--shadow-border-hover)]",
                  span,
                  gated && "border-cyan/50 bg-cyan/10",
                  sealed && "border-rust/40",
                  !gated && !sealed && "border-line",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <p
                    className={cn(
                      "font-mono text-2xs tracking-widest uppercase",
                      gated ? "text-cyan" : sealed ? "text-rust" : "text-dim",
                    )}
                  >
                    {room.state}
                  </p>
                  <ArrowUpRight className="size-4 text-dim" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{room.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{room.handle}</p>
              </a>
            );
          })}
        </div>
      </div>
      <p className="border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">
        Instagram is the social page the community keeps alive this week. Public Telegram is the second door. The application
        vault is sealed. DravenWeb3Devs is the gated room — no public join link.
      </p>
    </div>
  );
}
