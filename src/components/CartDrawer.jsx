import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

export default function CartDrawer({
  open,
  onClose,
  cart,
  onIncrease,
  onDecrease,
  onRemove,
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  const itemCount = cart.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );


  return (
    <>
      {/* Overlay */}

      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
        />
      )}


      {/* Drawer */}

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[430px] bg-[#f4f1e8] z-[70] shadow-2xl transform transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="h-full flex flex-col">


          {/* Header */}

          <div className="p-6 border-b border-[#173b2a]/10 flex items-center justify-between">

            <div>

              <p className="text-sm text-[#315c3b]/50">
                Your basket
              </p>

              <h2 className="font-display text-3xl text-[#173b2a]">
                Fresh picks
              </h2>

            </div>


            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
            >
              <X size={19} />
            </button>

          </div>


          {/* Items */}

          <div className="flex-1 overflow-y-auto p-6">

            {cart.length === 0 ? (

              <div className="h-full flex flex-col items-center justify-center text-center">

                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-5">
                  <ShoppingBag
                    size={28}
                    className="text-[#173b2a]/40"
                  />
                </div>

                <h3 className="font-display text-3xl text-[#173b2a]">
                  Your basket is empty
                </h3>

                <p className="text-[#315c3b]/50 mt-2">
                  Add something fresh to get started.
                </p>

                <button
                  onClick={onClose}
                  className="mt-6 bg-[#173b2a] text-white px-6 py-3 rounded-full font-semibold"
                >
                  Continue shopping
                </button>

              </div>

            ) : (

              <div className="space-y-5">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4"
                  >

                    <div className="flex gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />


                      <div className="flex-1">

                        <div className="flex justify-between">

                          <div>

                            <h3 className="font-semibold text-[#173b2a]">
                              {item.emoji} {item.name}
                            </h3>

                            <p className="text-sm text-[#315c3b]/50">
                              ${item.price.toFixed(2)}
                            </p>

                          </div>


                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-[#315c3b]/40 hover:text-red-500"
                          >
                            <Trash2 size={17} />
                          </button>

                        </div>


                        {/* Quantity */}

                        <div className="flex items-center gap-3 mt-3">

                          <button
                            onClick={() =>
                              onDecrease(item.id)
                            }
                            className="w-8 h-8 rounded-full bg-[#f4f1e8] flex items-center justify-center"
                          >
                            <Minus size={14} />
                          </button>


                          <span className="font-semibold w-5 text-center">
                            {item.quantity}
                          </span>


                          <button
                            onClick={() =>
                              onIncrease(item.id)
                            }
                            className="w-8 h-8 rounded-full bg-[#173b2a] text-white flex items-center justify-center"
                          >
                            <Plus size={14} />
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>


          {/* Bottom */}

          {cart.length > 0 && (

            <div className="border-t border-[#173b2a]/10 p-6 bg-white">

              <div className="flex justify-between mb-5">

                <span className="text-[#315c3b]/60">
                  {itemCount} items
                </span>

                <span className="text-2xl font-bold text-[#173b2a]">
                  ${total.toFixed(2)}
                </span>

              </div>


              <button
                onClick={() =>
                  alert("Checkout will be connected to your backend later 🛒")
                }
                className="w-full bg-[#173b2a] text-white py-4 rounded-xl font-bold hover:bg-[#315c3b] transition"
              >
                Continue to checkout
              </button>

            </div>

          )}

        </div>

      </aside>
    </>
  );
}