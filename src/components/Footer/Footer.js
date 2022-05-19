import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Brand>Logo</Brand>
      <Copy>
        <p>Angel Rincones | Coderhouse &copy; 2022</p>
      </Copy>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background-color: #f5f5f5;
  height: 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e6e6e6;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #194184;
  text-transform: uppercase;
`;
const Copy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
