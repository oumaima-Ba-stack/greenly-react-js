import { ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({
  product,
  onAdd,
}) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="product-card reveal">

      <div className="relative bg-[#f4f1e8] rounded-[1.5rem] overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />


        {/* Tag */}

        <span className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-bold">
          {product.tag}
        </span>


        {/* Favorite */}

        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center"
        >

          <Heart
            size={18}
            className={
              favorite
                ? "fill-[#d97843] text-[#d97843]"
                : "text-[#173b2a]"
            }
          />

        </button>

      </div>


      <div className="pt-5">

        <div className="flex justify-between gap-3">

          <div>

            <h3 className="font-semibold text-[#173b2a]">
              {product.emoji} {product.name}
            </h3>

            <p className="text-sm text-[#315c3b]/50 mt-1">
              Farm fresh · {product.unit}
            </p>

          </div>

          <span className="font-bold text-[#173b2a]">
            ${product.price.toFixed(2)}
          </span>

        </div>


        <button
          onClick={() => onAdd(product)}
          className="mt-4 w-full bg-[#173b2a] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#315c3b] transition flex items-center justify-center gap-2"
        >

          <ShoppingBag size={17} />

          Add to basket

        </button>

      </div>

    </article>
  );
}