export default function Marquee() {
  const items = [
    "Organic",
    "Farm Fresh",
    "Seasonal",
    "Locally Grown",
  ];

  return (
    <section className="bg-[#173b2a] text-white py-5 marquee">

      <div className="marquee-content">

        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >

            <span className="mx-8 uppercase tracking-[0.3em] text-sm">
              {item}
            </span>

            <span className="text-[#d97843]">
              ✦
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}