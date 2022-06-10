import { useState, createContext } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productInCart, setProductInCart] = useState([]);

  const addProduct = (product) => {
    let isInCart = productInCart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (!isInCart) {
      console.log("producto agregado:", product);
      return setProductInCart((cartListProducts) => [
        ...cartListProducts,
        product,
      ]);
    } else {
      console.log("El producto ya se encuentra en el carrito");
    }
  };

  const removeProduct = (product) => {
    let isInCart = productInCart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (isInCart) {
      console.log("producto borrado:", product);
      return setProductInCart((cartListProducts) =>
        cartListProducts.filter((cartProduct) => cartProduct.id !== product.id)
      );
    } else {
      console.log("El producto no se encuentra en el carrito");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, clearCart, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
