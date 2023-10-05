import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { pizza } from "../constants/Pizza";

export const PizzaCardContex = createContext();

const PizzaCardContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (id) => {
    let cartPizza = pizza.find((pr) => pr.id === id);
    let pizzaInCart = cart.find((pr) => pr.id === id);

    let newCart;

    if (pizzaInCart) {
      newCart = cart.map((pr) => {
        if (pr.id === id) {
          pr.quantity++;
        }
        return pr;
      });
    } else {
      cartPizza.quantity = 1;
      newCart = [...cart, cartPizza];
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQuantity = (id) => {
    const newCart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const deceaseQuantity = (id) => {
    let newCart;

    let pizzaInCart = cart.find((pizza) => pizza.id === id);

    if (pizzaInCart.quantity > 1) {
      newCart = cart.map((pr) => {
        if (pr.id === id) {
          pr.quantity--;
        }
        return pr;
      });
    } else {
      newCart = cart.filter((pizza) => pizza.id !== id);
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPriceQuanity = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  const state = { cart, addToCart, increaseQuantity, deceaseQuantity, totalPriceQuanity };

  return (
    <PizzaCardContex.Provider value={state}>
      {children}
    </PizzaCardContex.Provider>
  );
};

PizzaCardContextProvider.propTypes = {
  children: PropTypes.node,
};

export default PizzaCardContextProvider;
