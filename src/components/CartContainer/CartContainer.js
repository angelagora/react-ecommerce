import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import CartList from "./components/CartList";
import NoItems from "./components/NoItems";

const CartContainer = () => {
  const navigate = useNavigate();
  const { productInCart, clearCart, removeProduct, cartTotalPrice } =
    useContext(CartContext);
  return (
    <>
      {productInCart.length === 0 ? (
        <NoItems />
      ) : (
        productInCart.map((product) => (
          <CartList
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            count={product.count}
            removeProduct={removeProduct}
          />
        ))
      )}
      {productInCart.length > 0 && (
        <>
          <TotalPrice>
            <h3>Total: ${cartTotalPrice()}</h3>
          </TotalPrice>
          <ButtonsContainer>
            <Button onClick={clearCart}>Borrar carrito</Button>
            <Button onClick={() => navigate("/")}>Seguir Comprando</Button>
          </ButtonsContainer>
        </>
      )}
    </>
  );
};

export default CartContainer;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #194184;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #194184;
    color: #fff;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  h3 {
    color: #194184;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
