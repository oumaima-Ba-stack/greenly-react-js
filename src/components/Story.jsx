export default function Story() {
  return (
    <section id="story" className="py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images */}

          <div className="relative reveal">

            <div className="grid grid-cols-2 gap-4">

              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
                className="rounded-[2rem] h-[350px] w-full object-cover"
                alt="Farm"
              />

              <img
                src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800"
                className="rounded-[2rem] h-[250px] w-full object-cover mt-20"
                alt="Fresh vegetables"
              />

            </div>


            <div className="absolute left-1/2 -translate-x-1/2 bottom-5 bg-[#173b2a] text-white rounded-2xl px-6 py-4 shadow-xl text-center">

              <p className="text-2xl font-display">
                Since 2020
              </p>

              <p className="text-xs text-white/50">
                Growing better
              </p>

            </div>

          </div>


          {/* Content */}

          <div className="reveal">

            <span className="text-[#d97843] uppercase tracking-[0.25em] text-sm font-bold">
              Our story
            </span>

            <h2 className="font-display text-5xl md:text-6xl text-[#173b2a] mt-4 leading-tight">

              Food should feel{" "}

              <span className="italic">
                alive.
              </span>

            </h2>

            <p className="text-[#315c3b]/65 text-lg leading-relaxed mt-7">
              Greenly started with a simple idea:
              make it easier for people to eat fresh,
              seasonal food without losing the connection
              to the people who grow it.
            </p>

            <p className="text-[#315c3b]/65 leading-relaxed mt-5">
              We partner with small farms and independent
              growers to bring beautiful produce directly
              to your kitchen.
            </p>


            <div className="grid grid-cols-2 gap-6 mt-9">

              <div>

                <p className="font-display text-4xl text-[#173b2a]">
                  50+
                </p>

                <p className="text-sm text-[#315c3b]/50 mt-1">
                  Local growers
                </p>

              </div>


              <div>

                <p className="font-display text-4xl text-[#173b2a]">
                  100%
                </p>

                <p className="text-sm text-[#315c3b]/50 mt-1">
                  Fresh mindset
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}