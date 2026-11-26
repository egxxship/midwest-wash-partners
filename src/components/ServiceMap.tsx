import { serviceMap as m } from "@/lib/serviceMap";

const labelled = new Set(["Chicago", "Milwaukee", "Madison", "Rockford", "Peoria", "Springfield", "Kalamazoo", "South Bend", "Quad Cities", "Champaign"]);

export default function ServiceMap({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <svg
        className="h-auto w-full rounded-[4px]"
        viewBox={`0 0 ${m.width} ${m.height}`}
        role="img"
        aria-labelledby="map-title map-desc"
      >
        <title id="map-title">Midwest Wash Partners service area</title>
        <desc id="map-desc">
          Map showing the service area: all of Illinois, southern Wisconsin,
          northwest Indiana, and southwest Michigan, around the southern end of
          Lake Michigan.
        </desc>
        <defs>
          <clipPath id="map-frame">
            <rect width={m.width} height={m.height} />
          </clipPath>
        </defs>
        <g clipPath="url(#map-frame)">
          {/* Water, read as everything that isn't land. */}
          <rect width={m.width} height={m.height} fill="#dfe8f5" />
          {m.states.map((s) => (
            <path key={s.id} d={s.d} fill="#f4f6f8" stroke="none" />
          ))}
          <path d={m.served} className="map-served" fill="#1450c8" fillOpacity="0.14" />
          <path d={m.served} className="map-served" fill="none" stroke="#1450c8" strokeWidth="1.6" strokeLinejoin="round" />
          <path d={m.borders} fill="none" stroke="#9aa7b8" strokeWidth="0.9" strokeDasharray="4 3" />
          <text
            x={m.lake.x}
            y={m.lake.y}
            className="fill-[#4f6e9f] text-[14px] italic tracking-[0.12em]"
            textAnchor="middle"
            transform={`rotate(-80 ${m.lake.x} ${m.lake.y})`}
          >
            Lake Michigan
          </text>
          {m.cities
            .filter((c) => labelled.has(c.n))
            .map((c) => {
              const right = c.n !== "Chicago";
              return (
                <g key={c.n}>
                  <circle cx={c.x} cy={c.y} r={c.n === "Chicago" ? 4.2 : 3} fill="#0c1a2b" />
                  <text
                    x={right ? c.x + 8 : c.x - 8}
                    y={c.y + 4.5}
                    textAnchor={right ? "start" : "end"}
                    className={`fill-ink ${c.n === "Chicago" ? "text-[15px] font-semibold" : "text-[13px]"}`}
                    paintOrder="stroke"
                    stroke="#f2f4f7"
                    strokeWidth="3"
                  >
                    {c.n}
                  </text>
                </g>
              );
            })}
        </g>
      </svg>
      <figcaption className="mt-4 flex items-center gap-3 text-sm text-ink-3">
        <span aria-hidden="true" className="inline-block h-3 w-5 rounded-[2px] border border-lake bg-lake/15" />
        Service area: Illinois, southern Wisconsin, northwest Indiana, southwest Michigan
      </figcaption>
    </figure>
  );
}
