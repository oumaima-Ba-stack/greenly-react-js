import { ArrowDownRight, ArrowUpRight, Star, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-[#f4f1e8]"
    >
      {/* Decorative background circle */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-[#315c3b]/10" />

      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#a9b89d]/20 blur-3xl" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="relative z-10">

            {/* Small label */}
<div className="reveal mb-8 mt-12 inline-flex items-center gap-3 rounded-full border border-[#173b2a]/15 bg-white/60 px-4 py-2 backdrop-blur-sm">              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#173b2a] text-[#f4f1e8]">
                <Leaf size={14} />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315c3b]">
                Fresh · Local · Seasonal
              </span>
            </div>

            {/* Main heading */}
            <div className="reveal">
              <h1 className="font-display text-[4.5rem] leading-[0.84] tracking-[-0.055em] text-[#173b2a] sm:text-[6rem] lg:text-[7.5rem]">

                Good food
                <br />

                <span className="italic text-[#315c3b]">
                  starts
                </span>

                <br />

                close to
                <br />

                the earth.
              </h1>
            </div>

            {/* Description */}
            <p className="reveal mt-9 max-w-md text-base leading-7 text-[#526158] sm:text-lg">
              Beautifully fresh produce, thoughtfully sourced from growers
              who care about what ends up on your table.
            </p>

            {/* Buttons */}
            <div className="reveal mt-9 flex flex-wrap items-center gap-4">

              <a
                href="#shop"
                className="group inline-flex items-center gap-3 rounded-full bg-[#173b2a] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#315c3b]"
              >
                Shop fresh

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d97843] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="#story"
                className="group inline-flex items-center gap-2 px-3 py-4 text-sm font-semibold text-[#173b2a]"
              >
                Our story

                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

            </div>

            {/* Rating */}
            <div className="reveal mt-12 flex items-center gap-4">

              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/100?img=32",
                  "https://i.pravatar.cc/100?img=47",
                  "https://i.pravatar.cc/100?img=12",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-[#f4f1e8] object-cover"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      fill="currentColor"
                      className="text-[#d97843]"
                    />
                  ))}
                </div>

                <p className="mt-1 text-xs text-[#526158]">
                  Loved by 2,000+ fresh food lovers
                </p>
              </div>

            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}
          <div className="relative">

            {/* Main image */}
            <div className="hero-image reveal relative overflow-hidden rounded-[3rem] bg-[#315c3b]">

              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&q=90"
                alt="Fresh vegetables"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[620px] lg:h-[680px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#173b2a]/50 via-transparent to-transparent" />

              {/* Bottom image text */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Today's harvest
                  </p>

                  <p className="mt-2 font-display text-3xl italic text-white">
                    Straight from the farm.
                  </p>
                </div>

                <div className="hidden h-16 w-16 items-center justify-center rounded-full bg-[#d97843] text-white sm:flex">
                  <ArrowUpRight size={23} />
                </div>

              </div>
            </div>

            {/* Floating organic card */}
            <div className="reveal absolute -bottom-7 -left-5 rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(23,59,42,0.15)] sm:-left-8 sm:p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a9b89d]/30 text-[#315c3b]">
                  <Leaf size={21} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#7a857c]">
                    Grown with care
                  </p>

                  <p className="mt-1 font-display text-xl text-[#173b2a]">
                    100% fresh
                  </p>
                </div>

              </div>
            </div>

            {/* Floating rating */}
            <div className="reveal absolute -right-3 top-10 rounded-2xl bg-[#173b2a] px-5 py-4 text-white shadow-xl sm:-right-6">

              <div className="flex items-center gap-2">
                <Star
                  size={16}
                  fill="currentColor"
                  className="text-[#d97843]"
                />

                <span className="font-semibold">
                  4.9
                </span>
              </div>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/60">
                Customer love
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#315c3b]/60 lg:flex">
        <span className="h-px w-10 bg-[#315c3b]/30" />
        Scroll to explore
        <span className="h-px w-10 bg-[#315c3b]/30" />
      </div>
    </section>
  );
}