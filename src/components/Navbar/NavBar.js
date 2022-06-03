import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartWidget from "./components/CartWidget";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <Container>
      <Link to="/">
        <Brand>Logo</Brand>
      </Link>
      <Menu>
        <Link to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <MenuItem
          onMouseOver={() => setShowDropdown(true)}
        >
          Categories
        </MenuItem>
        <MenuItem>FAQs</MenuItem>
        <MenuItem>Contact</MenuItem>
        <CartWidget />
      </Menu>
      {showDropdown && (
        <DropdownMenu  onMouseLeave={() => setShowDropdown(false)}>
          <DropdownItem>
            <Link to="/products/desktop">
              <DropdownLink>Desktop</DropdownLink>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/products/laptop">
              <DropdownLink>Laptop</DropdownLink>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/products/componentes">
              <DropdownLink>Componentes</DropdownLink>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/products/telefonos">
              <DropdownLink>Telefonos</DropdownLink>
            </Link>
          </DropdownItem>
        </DropdownMenu>
      )}
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

const MenuItem = styled.button`
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

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 305px;
  background-color: #fff;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-bottom-color: #fff;
  }
`;

const DropdownItem = styled.div`
  padding: 0.5rem;
  :hover {
    background-color: #b8e8e8;
  }
`;

const DropdownLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #000;
  :hover {
    background-color: #b8e8e8;
  }
`;
