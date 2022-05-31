import styled from "styled-components";
import React from "react";

const NotFound = () => {
  return (
    <Container>
      <Message>404 | Página no encontrada &#128533;</Message>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`;

const Message = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  color: #212121;
`;
