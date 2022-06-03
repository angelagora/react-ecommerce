import styled from "styled-components";
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { title, img, price, stock } = product;
  console.log(product);
  return (
    <Container>
      <Card>
        <CardImage img={img} />
        <CardContent>
          <DescriptionContainer>
            <CardTitle>{title}</CardTitle>
            <CardPrice>$ {price}</CardPrice>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tempor congue, nisi nisl fermentum
              nunc, eu aliquet nunc nisi eget nunc. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque euismod, urna eu tempor
              congue, nisi nisl fermentum nunc, eu aliquet nunc nisi eget nunc.
            </CardDescription>
          </DescriptionContainer>
          <CardFooter>
            <ItemCount stock={stock} />
          </CardFooter>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ItemDetail;

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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 60vh;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-bottom: 2rem;
  background-color: #f3f3f3;
`;

const CardImage = styled.div`
  display: flex;
  background: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 60%;
  height: 60vh;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 80%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardPrice = styled.div`
  font-size: 1.5rem;
  font-weight: medium;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0.5rem;
`;
