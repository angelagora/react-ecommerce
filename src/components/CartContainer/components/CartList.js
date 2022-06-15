import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

const CartList = ({ id, img, title, price, count, removeProduct }) => {
  return (
    <Container>
      <Row>
        <Col>
          <DeleteIcon onClick={() => removeProduct(id)} />
        </Col>

        <Col>
          <h3>Producto</h3>
        </Col>
        <Col>
          <h3>Cantidad</h3>
        </Col>
        <Col>
          <h3>Precio</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={img} />
        </Col>
        <Col>
          <h3>{title}</h3>
        </Col>
        <Col>
          <h3>{count}</h3>
        </Col>
        <Col>
          <h3>{price}</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default CartList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 4rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e0e0e0;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  padding: 0;
`;
const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  padding: 0;
`;
const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  padding: 0;
`;
const Total = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  padding: 0;
`;
const TotalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  padding: 0;
`;
const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
`;
const ButtonClear = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
const ButtonCheckout = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
