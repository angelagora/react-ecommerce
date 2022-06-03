import styled from "styled-components";
import React from "react";

const Spinner = () => {
  return (
    <Container>
      <div className="loading-dual-ring"></div>
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .loading-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;
  }
  .loading-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #194184;
    border-color: #194184 transparent #194184 transparent;
    animation: loading-dual-ring 1.2s linear infinite;
  }
  @keyframes loading-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
