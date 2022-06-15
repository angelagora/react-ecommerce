import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoItems = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Message>El carrito esta vacio</Message>
      <CallToAction onClick={()=> navigate('/')}>Ir a productos</CallToAction>
    </Container>
  );
};

export default NoItems;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: 2rem 4rem 4rem 4rem;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
const Message = styled.p`
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.5;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 80%;
  text-align: center;
`;

const CallToAction = styled.button`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 80%;
  max-width: 400px;
  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid #333;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e0e0e0;
  }
`;
