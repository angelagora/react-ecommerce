import React from "react";
import styled from "styled-components";

const ItemListContainer = (props) => {
  const { title, price, img } = props;
  return (
    <Container>
      <Card>
        <CardImage img={img} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardPrice>$ {price}</CardPrice>
        </CardContent>
        <CardFooter>
          <CardButton>Comprar</CardButton>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default ItemListContainer;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-bottom: 2rem;
`;
const CardImage = styled.div`
  display: flex;
  background: url(${({ img }) => img});
  background-size: cover;
  width: 100%;
  height: 250px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;
const CardTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #194184;
  text-transform: uppercase;
  margin-right: 1rem;
`;
const CardPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;
const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;
const CardButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  color: #194184;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #194184;
  }
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
