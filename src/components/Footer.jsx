import {
  Leaf,
  Camera,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#173b2a] text-[#f4f1e8]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d97843]">
                <Leaf size={20} />
              </div>

              <span className="font-display text-2xl font-semibold">
                Greenly
              </span>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#a9b89d]">
              Fresh food, thoughtful sourcing, and a greener way to eat every
              day.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a9b89d]/30 transition hover:bg-[#d97843]"
                aria-label="Social media"
              >
                <Camera size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a9b89d]/30 transition hover:bg-[#d97843]"
                aria-label="Contact"
              >
                <MessageCircle size={17} />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-[#a9b89d]">

              <li>
                <a
                  href="#shop"
                  className="transition hover:text-white"
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  href="#story"
                  className="transition hover:text-white"
                >
                  Our Story
                </a>
              </li>

              <li>
                <a
                  href="#process"
                  className="transition hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]">
              Help
            </h3>

            <ul className="space-y-3 text-sm text-[#a9b89d]">

              <li>
                <a href="#" className="transition hover:text-white">
                  Delivery
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Terms
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]">
              Say hello
            </h3>

            <a
              href="mailto:hello@greenly.com"
              className="group inline-flex items-center gap-2 text-sm text-[#f4f1e8] transition hover:text-[#d97843]"
            >
              hello@greenly.com

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <p className="mt-4 text-sm leading-6 text-[#a9b89d]">
              Monday — Saturday
              <br />
              8:00 AM — 7:00 PM
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#a9b89d]/20 pt-6 text-sm text-[#a9b89d] md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Greenly. All rights reserved.
          </p>

          <p>
            Fresh from nature. Made with care.
          </p>

        </div>

      </div>
    </footer>
  );
}