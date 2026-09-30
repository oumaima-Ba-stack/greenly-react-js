import { CheckCircle2, X } from "lucide-react";

export default function Toast({
  message,
  onClose,
}) {

  if (!message) return null;


  return (
    <div className="fixed bottom-6 right-6 z-[120] bg-[#173b2a] text-white rounded-2xl shadow-2xl p-4 flex items-center gap-4 max-w-sm">

      <CheckCircle2
        className="text-[#a9b89d]"
        size={22}
      />

      <p className="text-sm flex-1">
        {message}
      </p>

      <button onClick={onClose}>
        <X size={17} />
      </button>

    </div>
  );
}