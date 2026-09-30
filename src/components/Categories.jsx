export default function Categories() {
  const categories = [
    {
      title: "Leafy Greens",
      count: "12 varieties",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900",
    },
    {
      title: "Sweet Fruits",
      count: "18 varieties",
      image:
        "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=900",
    },
    {
      title: "Earthy Roots",
      count: "9 varieties",
      image:
        "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=900",
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12 reveal">

          <div>

            <span className="text-[#d97843] uppercase tracking-[0.25em] text-sm font-bold">
              Fresh picks
            </span>

            <h2 className="font-display text-5xl md:text-6xl text-[#173b2a] mt-3">
              Goodness by nature.
            </h2>

          </div>

          <p className="max-w-md text-[#315c3b]/60 leading-relaxed">
            From leafy greens to juicy fruits and earthy roots —
            discover what's fresh today.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-5">

          {categories.map((category) => (
            <a
              key={category.title}
              href="#shop"
              className="group relative h-[430px] rounded-[2rem] overflow-hidden reveal"
            >

              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-sm uppercase tracking-widest opacity-80">
                  {category.count}
                </p>

                <h3 className="font-display text-4xl mt-2">
                  {category.title}
                </h3>

              </div>

            </a>
          ))}

        </div>

      </div>

    </section>
  );
}