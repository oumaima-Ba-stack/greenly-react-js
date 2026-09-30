import {
  Mail,
  Phone,
  Clock,
} from "lucide-react";

export default function Contact() {

  const items = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@greenly.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 234 567 890",
    },
    {
      icon: Clock,
      label: "Opening hours",
      value: "Mon — Sat / 08:00 — 20:00",
    },
  ];


  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#f4f1e8] rounded-[2rem] p-8 md:p-14 grid lg:grid-cols-2 gap-12 items-center reveal">


          <div>

            <span className="text-[#d97843] uppercase tracking-[0.25em] text-sm font-bold">
              Say hello
            </span>

            <h2 className="font-display text-5xl md:text-6xl text-[#173b2a] mt-4">
              Let's grow something good.
            </h2>

            <p className="text-[#315c3b]/60 text-lg mt-6 max-w-lg">
              Have a question about your order,
              our farmers or Greenly?
              We'd love to hear from you.
            </p>

          </div>


          <div className="space-y-5">

            {items.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-5 bg-white rounded-2xl p-5"
                >

                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0
                        ? "bg-[#173b2a] text-white"
                        : index === 1
                        ? "bg-[#d97843] text-white"
                        : "bg-[#a9b89d] text-[#173b2a]"
                    }`}
                  >
                    <Icon size={19} />
                  </div>


                  <div>

                    <p className="text-xs uppercase tracking-wider text-[#315c3b]/40">
                      {item.label}
                    </p>

                    <p className="font-semibold text-[#173b2a]">
                      {item.value}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}