import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 40%;
  height: 400px;
  background-color: blue;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Right = styled.div`
  width: 40%;
  height: 400px;
  background-color: red;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Videosection = () => {
  return (
    <Container>
      <Left></Left>
      <Right></Right>
    </Container>
  );
};

export default Videosection;
