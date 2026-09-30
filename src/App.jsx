import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Categories from "./components/Categories";
import Shop from "./components/Shop";
import Story from "./components/Story";
import Process from "./components/Process";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchModal from "./components/SearchModal";
import Toast from "./components/Toast";


function App() {

  /* =========================
     CART
  ========================= */

  const [cart, setCart] = useState(() => {

    const saved =
      localStorage.getItem("greenly-cart");

    return saved
      ? JSON.parse(saved)
      : [];

  });


  /* =========================
     CART DRAWER
  ========================= */

  const [cartOpen, setCartOpen] =
    useState(false);


  /* =========================
     SEARCH
  ========================= */

  const [searchOpen, setSearchOpen] =
    useState(false);


  /* =========================
     TOAST
  ========================= */

  const [toast, setToast] =
    useState("");


  /* =========================
     SAVE CART
  ========================= */

  useEffect(() => {

    localStorage.setItem(
      "greenly-cart",
      JSON.stringify(cart)
    );

  }, [cart]);


  /* =========================
     TOAST AUTO CLOSE
  ========================= */

  useEffect(() => {

    if (!toast) return;

    const timer =
      setTimeout(() => {
        setToast("");
      }, 3000);

    return () =>
      clearTimeout(timer);

  }, [toast]);


  /* =========================
     REVEAL ANIMATION
  ========================= */

  useEffect(() => {

    const elements =
      document.querySelectorAll(".reveal");


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

            }

          });

        },
        {
          threshold: 0.12,
        }
      );


    elements.forEach((element) => {

      observer.observe(element);

    });


    return () => {

      observer.disconnect();

    };

  }, []);


  /* =========================
     ADD PRODUCT
  ========================= */

  function addToCart(product) {

    setCart((currentCart) => {

      const existing =
        currentCart.find(
          (item) =>
            item.id === product.id
        );


      if (existing) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );

      }


      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];

    });


    setToast(
      `${product.name} added to your basket`
    );

  }


  /* =========================
     INCREASE
  ========================= */

  function increaseQuantity(id) {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  }


  /* =========================
     DECREASE
  ========================= */

  function decreaseQuantity(id) {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );

  }


  /* =========================
     REMOVE
  ========================= */

  function removeFromCart(id) {

    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          item.id !== id
      )
    );

  }


  /* =========================
     CART COUNT
  ========================= */

  const cartCount =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  return (
    <>

      <Navbar
        cartCount={cartCount}
        onCart={() =>
          setCartOpen(true)
        }
        onSearch={() =>
          setSearchOpen(true)
        }
      />


      <main>

        <Hero />

        <Marquee />

        <Categories />

        <Shop
          onAdd={addToCart}
        />

        <Story />

        <Process />

        <Newsletter
          onSuccess={setToast}
        />

        <Contact />

      </main>


      <Footer />


      {/* Cart */}

      <CartDrawer
        open={cartOpen}
        onClose={() =>
          setCartOpen(false)
        }
        cart={cart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
      />


      {/* Search */}

      <SearchModal
        open={searchOpen}
        onClose={() =>
          setSearchOpen(false)
        }
      />


      {/* Toast */}

      <Toast
        message={toast}
        onClose={() =>
          setToast("")
        }
      />

    </>
  );
}

export default App;