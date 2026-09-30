export default function Process() {

  const steps = [
    {
      number: "01",
      icon: "🌱",
      title: "We source.",
      text: "We work with farmers who care about the soil, the seasons and the food they grow.",
      dark: true,
    },
    {
      number: "02",
      icon: "🥬",
      title: "We prepare.",
      text: "Every order is selected, checked and packed with freshness in mind.",
      dark: false,
    },
    {
      number: "03",
      icon: "🚲",
      title: "We deliver.",
      text: "Your fresh picks arrive at your door, ready for your next meal.",
      orange: true,
    },
  ];


  return (
    <section
      id="process"
      className="py-28 bg-[#f4f1e8]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 reveal">

          <div>

            <span className="text-[#d97843] uppercase tracking-[0.25em] text-sm font-bold">
              How it works
            </span>

            <h2 className="font-display text-5xl md:text-7xl text-[#173b2a] mt-4 leading-[0.95]">

              From the earth.
              <br />

              <span className="italic">
                To your table.
              </span>

            </h2>

          </div>


          <p className="max-w-md text-[#315c3b]/70 text-lg leading-relaxed">

            We keep things simple.
            Fresh produce, trusted farmers,
            careful packing and delivery made
            for your everyday life.

          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-5">

          {steps.map((step) => (

            <div
              key={step.number}
              className={`relative rounded-[2rem] p-8 md:p-10 min-h-[390px] overflow-hidden reveal ${
                step.orange
                  ? "bg-[#d97843] text-white"
                  : step.dark
                  ? "bg-[#173b2a] text-white"
                  : "bg-white text-[#173b2a] border border-[#173b2a]/10"
              }`}
            >

              <div className="flex justify-between items-start">

                <span
                  className={`text-sm tracking-[0.2em] ${
                    step.dark
                      ? "text-[#a9b89d]"
                      : step.orange
                      ? "text-white/70"
                      : "text-[#d97843]"
                  }`}
                >
                  {step.number}
                </span>


                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    step.dark
                      ? "border border-white/20"
                      : step.orange
                      ? "bg-white/15"
                      : "bg-[#f4f1e8]"
                  }`}
                >
                  <span className="text-xl">
                    {step.icon}
                  </span>
                </div>

              </div>


              <div className="absolute bottom-10 left-8 right-8">

                <h3 className="font-display text-4xl mb-4">
                  {step.title}
                </h3>

                <p
                  className={`leading-relaxed max-w-sm ${
                    step.dark
                      ? "text-white/65"
                      : step.orange
                      ? "text-white/75"
                      : "text-[#315c3b]/65"
                  }`}
                >
                  {step.text}
                </p>

              </div>

            </div>

          ))}

        </div>


        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#315c3b]/60 reveal">

          <span>✦ Farm sourced</span>
          <span>✦ Carefully packed</span>
          <span>✦ Fresh delivery</span>
          <span>✦ Less waste</span>

        </div>

      </div>

    </section>
  );
}