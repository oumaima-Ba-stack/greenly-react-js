import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter({ onSuccess }) {

  const [email, setEmail] = useState("");


  function handleSubmit(e) {

    e.preventDefault();

    if (!email) return;

    onSuccess(
      `${email} joined the Greenly newsletter 🌿`
    );

    setEmail("");
  }


  return (
    <section className="relative bg-[#d97843] overflow-hidden">

      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10" />

      <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#173b2a]/10" />


      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Text */}

          <div className="reveal">

            <span className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm text-white mb-6">

              🌿 Stay fresh

            </span>


            <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.95]">

              Good things{" "}

              <span className="italic">
                grow
              </span>{" "}

              when we share them.

            </h2>


            <p className="text-white/75 text-lg mt-7 max-w-lg leading-relaxed">

              Get seasonal recipes, new harvests
              and special offers straight to your inbox.
              Nothing boring. Just good stuff.

            </p>

          </div>


          {/* Form */}

          <div className="bg-[#173b2a] rounded-[2rem] p-7 md:p-10 reveal">

            <div className="mb-8">

              <p className="text-white text-xl font-semibold">
                Get the good stuff 🌱
              </p>

              <p className="text-white/50 text-sm mt-2">
                Fresh ideas. Fresh harvests.
                Occasionally a little surprise.
              </p>

            </div>


            <form
              onSubmit={handleSubmit}
              className="space-y-3"
            >

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#d97843]"
              />


              <button
                type="submit"
                className="w-full bg-white text-[#173b2a] rounded-xl py-4 font-bold hover:bg-[#f4f1e8] transition flex items-center justify-center gap-2"
              >
                Join Greenly
                <ArrowRight size={18} />
              </button>

            </form>


            <p className="text-white/35 text-xs mt-5">
              No spam. Just fresh things.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}