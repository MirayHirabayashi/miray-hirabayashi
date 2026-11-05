/**
 * Decorative illustrations for the home page tiles. All are pure SVG or
 * markup (no image assets) and scale with their container.
 * They're purely visual, so each one is hidden from assistive technology.
 */

/* ------------------------------------------------------------ Hero devices */

const codeLines: [indent: number, width: number, color: string][] = [
  [0, 120, "#ff7ab2"],
  [1, 220, "#64d2ff"],
  [1, 160, "#a1a1a6"],
  [2, 260, "#ffd60a"],
  [2, 120, "#30d158"],
  [1, 200, "#64d2ff"],
  [0, 90, "#ff7ab2"],
  [1, 240, "#a1a1a6"],
  [2, 180, "#30d158"],
  [0, 60, "#ff7ab2"],
];

const appRows = ["#ff9f0a", "#bf5af2", "#30d158", "#0a84ff"];

export function DevicesIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 516"
      className={className}
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="dv-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5e5ce6" />
          <stop offset="0.5" stopColor="#0a84ff" />
          <stop offset="1" stopColor="#64d2ff" />
        </linearGradient>
        <linearGradient id="dv-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d2d2d7" />
          <stop offset="1" stopColor="#aeaeb2" />
        </linearGradient>
        <linearGradient id="dv-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f2f2f7" />
        </linearGradient>
        <filter id="dv-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="18" stdDeviation="20" floodOpacity="0.3" />
        </filter>
        <filter id="dv-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Laptop */}
      <rect x="90" y="0" width="820" height="500" rx="22" fill="#1d1d1f" />
      <rect x="104" y="14" width="792" height="472" rx="10" fill="url(#dv-screen)" />
      <rect x="170" y="64" width="520" height="340" rx="12" fill="#1e1e20" opacity="0.96" filter="url(#dv-shadow)" />
      {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
        <circle key={c} cx={191.5 + i * 18} cy={85.5} r={5.5} fill={c} />
      ))}
      {codeLines.map(([indent, w, c], i) => (
        <rect key={i} x={200 + indent * 24} y={116 + i * 26} width={w} height={9} rx={4} fill={c} opacity={0.85} />
      ))}
      <rect x="0" y="500" width="1000" height="16" rx="8" fill="url(#dv-base)" />
      <rect x="440" y="500" width="120" height="6" rx="3" fill="#8e8e93" />

      {/* Phone */}
      <g filter="url(#dv-shadow)">
        <rect x="760" y="90" width="200" height="410" rx="38" fill="#1d1d1f" />
      </g>
      <rect x="768" y="98" width="184" height="394" rx="31" fill="url(#dv-phone)" />
      <rect x="826" y="108" width="68" height="18" rx="9" fill="#1d1d1f" />
      {appRows.map((c, i) => (
        <g key={c}>
          <rect x="780" y={146 + i * 80} width="160" height="68" rx="14" fill="#fff" filter="url(#dv-soft)" />
          <rect x="790" y={156 + i * 80} width="48" height="48" rx="10" fill={c} />
          <rect x="848" y={162 + i * 80} width="80" height="8" rx="4" fill="#1d1d1f" opacity="0.8" />
          <rect x="848" y={178 + i * 80} width="56" height="7" rx="3.5" fill="#8e8e93" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------- GlobeBase */

const pins: [dx: number, dy: number][] = [
  [-90, -70],
  [40, -110],
  [110, 10],
  [-40, 60],
  [10, -20],
  [150, -60],
];

export function GlobeIllustration({ className = "" }: { className?: string }) {
  const R = 230;
  const cx = 280;
  const cy = 270;
  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg viewBox="-60 -60 680 640" className="w-full" focusable="false">
        <defs>
          <radialGradient id="gl-glow">
            <stop offset="0" stopColor="#0a84ff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gl-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2d6bff" />
            <stop offset="0.55" stopColor="#0b1e4d" />
            <stop offset="1" stopColor="#02050f" />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r={340} fill="url(#gl-glow)" />
        <circle cx={cx} cy={cy} r={R} fill="url(#gl-body)" stroke="#64d2ff" strokeOpacity="0.35" />
        <g fill="none" stroke="#64d2ff" strokeOpacity="0.22">
          {[0.25, 0.55, 0.8].map((k) => (
            <ellipse key={k} cx={cx} cy={cy} rx={R * k} ry={R} />
          ))}
          {[-0.7, -0.4, 0, 0.4, 0.7].map((s) => {
            const half = R * Math.sqrt(1 - s * s);
            return <line key={s} x1={cx - half} x2={cx + half} y1={cy + s * R} y2={cy + s * R} />;
          })}
        </g>
        {pins.map(([dx, dy]) => (
          <g key={`${dx}-${dy}`}>
            <circle cx={cx + dx} cy={cy + dy} r={11} fill="#ff9f0a" opacity="0.25" />
            <circle cx={cx + dx} cy={cy + dy} r={5} fill="#ff9f0a" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.5" />
          </g>
        ))}
      </svg>

      {/* Floating stat chips (wider screens only, where there's room). */}
      <StatChip className="left-[-22%] top-[30%]" title="Log it" detail="every place you've been" />
      <StatChip className="right-[-24%] top-[56%]" title="Three.js" detail="interactive 3D globe" />
    </div>
  );
}

function StatChip({ title, detail, className }: { title: string; detail: string; className: string }) {
  return (
    <div
      className={`absolute hidden rounded-2xl border border-white/10 bg-[#1c1c1e]/85 px-[18px] py-3 backdrop-blur md:block ${className}`}
    >
      <p className="text-[24px] font-semibold tracking-[-0.02em] text-cloud">{title}</p>
      <p className="text-[12px] text-ash">{detail}</p>
    </div>
  );
}

/* ------------------------------------------------------- Iowa After Class */

const events = [
  { day: "FRI", date: "14", title: "Indie Night Live", meta: "Downtown · 8 PM", from: "#ff375f", to: "#ff9f0a" },
  { day: "SAT", date: "15", title: "Campus Comedy Show", meta: "Student Union · 7 PM", from: "#5e5ce6", to: "#bf5af2" },
  { day: "SUN", date: "16", title: "Jazz in the Park", meta: "Riverside · 4 PM", from: "#30d158", to: "#64d2ff" },
];

/** Three event cards side by side (md and up), a compact list below that. */
export function EventsIllustration() {
  return (
    <div aria-hidden className="w-full">
      <div className="mx-auto hidden max-w-[940px] items-start justify-center gap-5 px-8 md:flex">
        {events.map((e, i) => (
          <div
            key={e.title}
            className={`w-[300px] overflow-hidden rounded-[28px] bg-canvas shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${
              i === 1 ? "" : "mt-10"
            }`}
          >
            <div
              className="relative h-[220px]"
              style={{ background: `linear-gradient(135deg, ${e.from}, ${e.to})` }}
            >
              <div className="absolute left-5 top-5 flex flex-col items-center rounded-[14px] bg-white/90 px-3.5 py-2">
                <span className="text-[11px] font-semibold tracking-[0.04em]" style={{ color: e.from }}>
                  {e.day}
                </span>
                <span className="text-[24px] font-semibold leading-none text-ink">{e.date}</span>
              </div>
            </div>
            <div className="px-6 pb-7 pt-6">
              <p className="text-[22px] font-semibold tracking-[-0.02em] text-ink">{e.title}</p>
              <p className="mt-1 text-[15px] text-muted">{e.meta}</p>
              <span className="mt-6 inline-block rounded-full bg-accent/10 px-3 py-1.5 text-[13px] font-medium text-link">
                Get tickets
              </span>
            </div>
          </div>
        ))}
      </div>

      <ul className="space-y-3 px-5 md:hidden">
        {events.map((e) => (
          <li
            key={e.title}
            className="flex items-center gap-3.5 rounded-[20px] bg-canvas p-3.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]"
          >
            <div
              className="flex h-[60px] w-[60px] flex-none flex-col items-center justify-center rounded-[14px] text-white"
              style={{ background: `linear-gradient(135deg, ${e.from}, ${e.to})` }}
            >
              <span className="text-[10px] font-semibold tracking-[0.04em] opacity-90">{e.day}</span>
              <span className="text-[22px] font-semibold leading-none">{e.date}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[17px] font-semibold leading-tight tracking-[-0.01em] text-ink">{e.title}</p>
              <p className="mt-0.5 text-[14px] text-muted">{e.meta}</p>
            </div>
            <span className="flex-none rounded-full bg-accent/10 px-3 py-1.5 text-[13px] font-medium text-link">
              Tickets
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------------- NextClose */

export function ChartIllustration({ className = "" }: { className?: string }) {
  const points =
    "0 210 40 196 80 204 120 172 160 180 200 150 240 158 280 120 320 134 360 96 400 110 440 70 480 84 520 46 560 30";
  const line = `M${points.replace(/(\d+) (\d+)/g, "$1 $2 L").replace(/ L$/, "")}`;
  return (
    <svg viewBox="0 0 560 260" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id="ch-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#30d158" stopOpacity="0.45" />
          <stop offset="1" stopColor="#30d158" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 65H560M0 130H560M0 195H560" stroke="#fff" strokeOpacity="0.08" />
      <path d={`${line} L560 260 L0 260 Z`} fill="url(#ch-fill)" />
      <path d={line} fill="none" stroke="#30d158" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------------------------------------------------------- WorkSync */

const contacts = ["#5e5ce6", "#ff375f", "#64d2ff", "#bf5af2", "#30d158"];

export function AndroidCrmIllustration({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative mx-auto w-[300px] sm:w-[560px] ${className}`}>
      {/* Phone */}
      <div className="mx-auto w-[220px] rounded-[34px] bg-ink p-2 shadow-[0_16px_36px_rgba(0,0,0,0.18)]">
        <div className="relative h-[444px] rounded-[27px] bg-canvas px-[14px] pt-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-[11px] font-semibold text-ink">9:41</span>
            <span className="mt-1 h-3 w-3 rounded-full bg-ink" />
            <span className="w-6" />
          </div>
          <p className="mt-4 px-2 text-[22px] font-semibold tracking-[-0.02em] text-ink">Contacts</p>
          <div className="mt-3 flex gap-1.5 px-2">
            {["Leads", "Active", "Closed"].map((t, i) => (
              <span
                key={t}
                className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                  i === 0 ? "bg-accent text-white" : "bg-mist text-ink"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <ul className="mt-4 px-2">
            {contacts.map((c) => (
              <li key={c} className="flex items-center gap-3 border-b border-[#e5e5ea] py-[11px]">
                <span className="h-9 w-9 flex-none rounded-full" style={{ backgroundColor: c }} />
                <span className="flex-1 space-y-2">
                  <span className="block h-2 w-[90px] rounded bg-ink/80" />
                  <span className="block h-[7px] w-[60px] rounded bg-[#8e8e93]/50" />
                </span>
              </li>
            ))}
          </ul>
          <span className="absolute bottom-5 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-2xl font-light leading-none text-white shadow-lg">
            +
          </span>
        </div>
      </div>

      {/* Floating stage cards (sm and up). */}
      <StageCard className="left-0 top-[70px]" dot="#0a84ff" label="Leads" value="Pipeline" />
      <StageCard className="right-0 top-[170px]" dot="#30d158" label="Closed" value="Deals" />
    </div>
  );
}

function StageCard({ className, dot, label, value }: { className: string; dot: string; label: string; value: string }) {
  return (
    <div className={`absolute hidden w-32 rounded-2xl bg-canvas px-3.5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:block ${className}`}>
      <p className="flex items-center gap-1.5 text-[12px] font-medium text-muted">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dot }} />
        {label}
      </p>
      <p className="mt-0.5 text-[20px] font-semibold tracking-[-0.02em] text-ink">{value}</p>
    </div>
  );
}

/* ---------------------------------------------------------------- Iowa DOT */

const terminal: { text: string; tone: string; strong?: boolean }[] = [
  { text: "$ reconcile --source workday --target access", tone: "text-ink", strong: true },
  { text: "→ loading records…", tone: "text-muted" },
  { text: "✓ schema validated", tone: "text-[#248a3d]" },
  { text: "✓ duplicates resolved", tone: "text-[#248a3d]" },
  { text: "✓ fields reconciled", tone: "text-[#248a3d]" },
  { text: "done — report written to ./out", tone: "text-link" },
];

export function TerminalIllustration({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`mx-5 w-[calc(100%-2.5rem)] max-w-[560px] overflow-hidden rounded-[18px] bg-canvas shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${className}`}
    >
      <div className="flex gap-[7px] border-b border-[#e5e5ea] px-[18px] py-4">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <span key={c} className="h-[11px] w-[11px] rounded-full" style={{ backgroundColor: c }} />
        ))}
      </div>
      <div className="space-y-2.5 overflow-x-auto px-6 py-5 font-mono text-[12px] sm:text-[14px]">
        {terminal.map((l) => (
          <p key={l.text} className={`whitespace-nowrap ${l.tone} ${l.strong ? "font-medium" : ""}`}>
            {l.text}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- CPRE 3080 TA */

const lanes: { name: string; color: string; bursts: [start: number, width: number][] }[] = [
  { name: "Thread 0", color: "#0a84ff", bursts: [[0, 120], [200, 90], [400, 140]] },
  { name: "Thread 1", color: "#bf5af2", bursts: [[110, 100], [300, 110]] },
  { name: "Thread 2", color: "#ff9f0a", bursts: [[60, 60], [220, 70], [430, 90]] },
  { name: "Thread 3", color: "#30d158", bursts: [[140, 140], [350, 70]] },
];

export function SchedulerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 250" className={className} aria-hidden focusable="false">
      {lanes.map((lane, i) => {
        const y = 20 + i * 58;
        return (
          <g key={lane.name}>
            <text x="0" y={y + 21} fill="#a1a1a6" fontSize="13" fontWeight="500">
              {lane.name}
            </text>
            <rect x="80" y={y + 15} width="480" height="2" rx="1" fill="#fff" opacity="0.08" />
            {lane.bursts.map(([start, w]) => (
              <rect key={start} x={80 + start * 0.85} y={y} width={w * 0.85} height="32" rx="10" fill={lane.color} opacity="0.9" />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
