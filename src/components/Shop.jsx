import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function Shop({ onAdd }) {

  const [category, setCategory] = useState("all");

  const categories = [
    ["all", "All"],
    ["greens", "Greens"],
    ["fruits", "Fruits"],
    ["roots", "Roots"],
  ];


  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );


  return (
    <section id="shop" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto reveal">

          <span className="text-[#d97843] uppercase tracking-[0.25em] text-sm font-bold">
            The market
          </span>

          <h2 className="font-display text-5xl md:text-6xl text-[#173b2a] mt-3">
            Pick your favorites.
          </h2>

          <p className="text-[#315c3b]/60 mt-5 leading-relaxed">
            Fresh produce selected with care and delivered
            straight to your kitchen.
          </p>

        </div>


        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">

          {categories.map(([value, label]) => (

            <button
              key={value}
              onClick={() => setCategory(value)}
              className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition ${
                category === value
                  ? "bg-[#173b2a] text-white border-[#173b2a]"
                  : "border-[#173b2a]/10 text-[#173b2a] hover:bg-[#f4f1e8]"
              }`}
            >
              {label}
            </button>

          ))}

        </div>


        {/* Products */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
            />

          ))}

        </div>

      </div>

    </section>
  );
}