import React from "react";
import styled from "styled-components";
import ItemCount from "./components/ItemCount";

const ItemListContainer = (props) => {
  const { title, price, img, stock } = props;
  return (
    <Container>
      <Card>
        <CardImage img={img} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardPrice>$ {price}</CardPrice>
        </CardContent>
        <CardFooter>
          <ItemCount stock={stock} />
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
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-bottom: 2rem;
`;
const CardImage = styled.div`
  display: flex;
  background: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 370px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-top: 0.5rem;
`;
const CardTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #194184;
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
  height: 110px;
`;
