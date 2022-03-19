import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../media/Transparentlogo.jpeg";

const Container = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  height: 100px;
  width: 50%;
  background-color: #e5e4e2;
  padding-left: 10px;
`;

const Right = styled.div`
  height: 100px;
  width: 50%;
  background-color: #e5e4e2;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 50px;
  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Left>
        <Image
          src={logo}
          layout="intrinsic"
          width={102}
          height={100}
          priority
        />
      </Left>
      <Right>
        <h3>bookb33tju1c3@gmail.com</h3>
      </Right>
    </Container>
  );
};

export default Header;
