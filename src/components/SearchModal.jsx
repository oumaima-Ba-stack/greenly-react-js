import {
  X,
  Search,
} from "lucide-react";

export default function SearchModal({
  open,
  onClose,
}) {

  if (!open) return null;


  return (
    <div className="fixed inset-0 z-[100] bg-[#173b2a]/90 backdrop-blur-md flex items-start justify-center pt-32 px-6">

      <div className="w-full max-w-2xl">

        <div className="flex justify-between items-center mb-6">

          <p className="text-white/60">
            Search Greenly
          </p>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
          >
            <X size={19} />
          </button>

        </div>


        <div className="relative">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40"
            size={22}
          />

          <input
            autoFocus
            placeholder="Search vegetables, fruits..."
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-14 py-6 text-white text-xl outline-none placeholder:text-white/30 focus:border-[#d97843]"
          />

        </div>


        <p className="text-white/40 text-sm mt-5">
          Try searching for broccoli, apples or mango.
        </p>

      </div>

    </div>
  );
}