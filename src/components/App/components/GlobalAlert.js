import React from "react";
import styled from "styled-components";

const GlobalAlert = (props) => {
  const { message } = props;
  const [show, setShowAlert] = React.useState(true);
  return (
    show && (
      <Container>
        <Text>{message}</Text>
        <CloseButton onClick={() => setShowAlert(false)}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 3.6473C3.9523 2.56408 1.98214 0.529717 1.71572 0.273249C1.35033 -0.0793518 0.692973 -0.102628 0.303981 0.273249C-0.0858853 0.648263 -0.11648 1.17242 0.303981 1.63192L3.57938 5.00102L0.303981 8.37012C-0.11648 8.82962 -0.0858853 9.35292 0.303981 9.72707C0.692973 10.1029 1.35033 10.0788 1.71572 9.72707C1.98214 9.47186 3.9523 7.43692 5 6.35329C6.0477 7.43692 8.01786 9.47186 8.28428 9.72707C8.64967 10.0788 9.30703 10.1029 9.69602 9.72707C10.0859 9.35292 10.1165 8.82962 9.69602 8.37012L6.42062 5.00102L9.69602 1.63192C10.1165 1.17242 10.0859 0.648263 9.69602 0.273249C9.30703 -0.102628 8.64967 -0.0793518 8.28428 0.273249C8.01786 0.529717 6.0477 2.56408 5 3.6473Z"
              fill="black"
            />
          </svg>
        </CloseButton>
      </Container>
    )
  );
};

export default GlobalAlert;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
  background-color: #555;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Text = styled.span`
  font-size: 12px;
  color: #fff;
  margin-right: 1rem;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-right: 1rem;
`;
