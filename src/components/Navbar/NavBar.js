import React from "react";
import styled from "styled-components";
import CartWidget from "./components/CartWidget";

const NavBar = () => {
  return (
    <Container>
      <Brand>Logo</Brand>
      <Menu>
        <MenuItem href="">Home</MenuItem>
        <MenuItem href="">Products</MenuItem>
        <MenuItem href="">FAQs</MenuItem>
        <MenuItem href="">Contact</MenuItem>
        <CartWidget />
      </Menu>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background-color: #b8e8e8;
  height: 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-bottom: 1px solid #e6e6e6;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #194184;
  text-transform: uppercase;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const MenuItem = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #194184;
  }
  margin-right: 1.5rem;
  :nth-last-child() {
    margin-right: 0;
  }
`;
