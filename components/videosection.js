import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 900px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
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
    padding-top: 20px;
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
