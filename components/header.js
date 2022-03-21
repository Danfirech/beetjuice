import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../media/Transparentlogo.jpeg";
import "../pages/_document";

const Container = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  /* padding-bottom: 150px; */
  @media (max-width: 768px) {
    padding-bottom: none;
    width: 100%;
    height: 100px;
  }
`;

const Left = styled.div`
  height: 100px;
  width: 50%;
  background-color: #e5e4e2;
  padding-left: 58px;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    height: 100px;
    width: 100%;
    padding-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 50px;
  }
`;

const Right = styled.div`
  height: 100px;
  width: 50%;
  background-color: #e5e4e2;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 58px;
  font-family: "M PLUS 1", sans-serif;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    display: none;
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
          alt="Logo"
        />
        <h4>B33t Ju1c3</h4>
      </Left>
      <Right>
        <h3>bookb33tju1c3@gmail.com</h3>
      </Right>
    </Container>
  );
};

export default Header;
