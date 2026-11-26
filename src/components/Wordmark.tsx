import Link from "next/link";

export default function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Midwest Wash Partners, home"
      className={`group inline-flex items-center gap-2.5 no-underline ${inverse ? "text-white" : "text-ink"}`}
    >
      <svg
        viewBox="0 0 28 28"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
      >
        <rect width="28" height="28" rx="3" className={inverse ? "fill-white" : "fill-ink"} />
        {/* Three arches: a wash bay seen head-on. */}
        <path
          d="M6 21V13a3 3 0 0 1 6 0v8M11 21V11a3 3 0 0 1 6 0v10M16 21V13a3 3 0 0 1 6 0v8"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          className={inverse ? "stroke-ink" : "stroke-white"}
        />
      </svg>
      <span className="text-[1.02rem] leading-none tracking-[-0.01em]">
        <span className="font-bold">Midwest Wash</span>{" "}
        <span className="font-normal">Partners</span>
      </span>
    </Link>
  );
}
