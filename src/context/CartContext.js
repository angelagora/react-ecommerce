import { useState, createContext } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [productInCart, setProductInCart] = useState([]);

  const addProduct = (product, count) => {
    const isInCart = productInCart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (!isInCart) {
      product.count = count;
      console.log("producto agregado:", product); // improve this with toastify
      return setProductInCart((cartListProducts) => [
        ...cartListProducts,
        product,
      ]);
    } else {
      console.log("El producto ya se encuentra en el carrito"); // improve this with toastify
    }
  };

  const removeProduct = (itemId) => {
    const isInCart = productInCart.find((item) => item.id === itemId);
    const getId = productInCart.indexOf(isInCart);
    productInCart.splice(getId, 1);
    setProductInCart((cartListItems) => [...cartListItems]);
  };

  const clearCart = () => {
    console.log("carrito borrado"); // improve this with toastify
    setProductInCart([]);
  };

  const cartItemsQuantity = () => {
    return productInCart.reduce((acc, item) => acc + item.count, 0);
  };

  const cartTotalPrice = () => {
    return productInCart.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        productInCart,
        addProduct,
        clearCart,
        removeProduct,
        cartItemsQuantity,
        cartTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
