import { useState, createContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [productInCart, setProductInCart] = useState([]);

  const addProduct = (product, count) => {
    const isInCart = productInCart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (!isInCart) {
      product.count = count;
      toast.success("Producto agregado al carrito", {
        position: toast.POSITION.TOP_LEFT,
      });
      return setProductInCart((cartListProducts) => [
        ...cartListProducts,
        product,
      ]);
    } else {
      toast.error("El producto ya se encuentra en el carrito", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  const removeProduct = (itemId) => {
    const isInCart = productInCart.find((item) => item.id === itemId);
    const getId = productInCart.indexOf(isInCart);
    productInCart.splice(getId, 1);
    setProductInCart((cartListItems) => [...cartListItems]);
  };

  const clearCart = () => {
    toast.info("Carrito borrado", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
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
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
