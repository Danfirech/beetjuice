import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../media/web logo (1).png";

const Container = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  height: 100px;
  width: 50%;
  background-color: Pink;
`;

const Right = styled.div`
  height: 100px;
  width: 50%;
  background-color: black;
`;

const Header = () => {
  return (
    <Container>
      <Left></Left>
      <Right></Right>
    </Container>
  );
};

export default Header;
