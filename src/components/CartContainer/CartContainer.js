import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import CartList from "./components/CartList";
import NoItems from "./components/NoItems";
import { addDoc, collection } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const CartContainer = () => {
  const { productInCart, clearCart, removeProduct, cartTotalPrice } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [order, setOrder] = useState({
    buyer: {},
    items: productInCart.map((item) => {
      return { id: item.id, title: item.title, price: item.price };
    }),
    total: cartTotalPrice(),
  });
  const [success, setSuccess] = useState();

  const navigate = useNavigate();

  const handleOnClick = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, buyer: formValue });
    saveOrder({ ...order, buyer: formValue });
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const saveOrder = async (newOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    setSuccess(orderDoc.id);
    clearCart();
  };

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
          <Flex>
            <ButtonsContainer>
              <Button onClick={clearCart}>Borrar carrito</Button>
              <Button onClick={() => navigate("/")}>Seguir Comprando</Button>
            </ButtonsContainer>
            <FinishButton onClick={handleOnClick}>Terminar Compra</FinishButton>
          </Flex>
        </>
      )}
      {showModal && (
        <Modal>
          <ModalContent>
            {success ? (
              <>
                <Title>Gracias por tu compra</Title>
                <Body>Tu orden es: {success} </Body>
                <Button onClick={() => navigate("/")}>Seguir Comprando</Button>
              </>
            ) : (
              <>
                <Title>Ingresa tus datos</Title>
                <Form onSubmit={handleSubmit}>
                  <Body>
                    <Input
                      placeholder="Nombre"
                      onChange={handleChange}
                      name="name"
                      value={formValue.name}
                    />
                    <Input
                      placeholder="Correo"
                      onChange={handleChange}
                      name="email"
                      value={formValue.email}
                    />
                    <Input
                      placeholder="Teléfono"
                      onChange={handleChange}
                      name="phone"
                      value={formValue.phone}
                    />
                  </Body>
                  <Footer>
                    <Button onClick={() => setShowModal(false)}>
                      Cancelar
                    </Button>
                    <Button type="submit">Finalizar</Button>
                  </Footer>
                </Form>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default CartContainer;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 60vh;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #f3f3f3;
`;

const FinishButton = styled.button`
  background-color: #194184;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #3aa742;
  }
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
  align-items: flex-end;
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
