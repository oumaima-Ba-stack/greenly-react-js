import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Leaf,
} from "lucide-react";

export default function Navbar({
  cartCount,
  onCart,
  onSearch,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Shop", "#shop"],
    ["Our Story", "#story"],
    ["How It Works", "#process"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-[#f4f1e8]/90 backdrop-blur-xl border-b border-[#173b2a]/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#173b2a] text-white flex items-center justify-center">
                <Leaf size={19} />
              </div>

              <span className="font-display text-2xl text-[#173b2a]">
                greenly
              </span>
            </a>


            {/* Desktop navigation */}

            <div className="hidden md:flex items-center gap-8">

              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium text-[#173b2a] hover:text-[#d97843] transition"
                >
                  {label}
                </a>
              ))}

            </div>


            {/* Actions */}

            <div className="flex items-center gap-2">

              <button
                onClick={onSearch}
                className="w-10 h-10 rounded-full hover:bg-[#173b2a]/10 flex items-center justify-center transition"
              >
                <Search size={19} />
              </button>


              <button
                onClick={onCart}
                className="relative w-10 h-10 rounded-full hover:bg-[#173b2a]/10 flex items-center justify-center transition"
              >
                <ShoppingBag size={19} />

                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#d97843] text-white text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>


              {/* Mobile */}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-10 h-10 rounded-full hover:bg-[#173b2a]/10 flex items-center justify-center"
              >
                {menuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>

            </div>

          </div>


          {/* Mobile menu */}

          <div
            className={`mobile-menu md:hidden ${
              menuOpen ? "open" : ""
            }`}
          >

            <div className="pb-6 pt-2 flex flex-col gap-5">

              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-[#173b2a]"
                >
                  {label}
                </a>
              ))}

            </div>

          </div>

        </div>

      </nav>
    </header>
  );
}