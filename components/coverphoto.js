import React from "react";
import styled from "styled-components";
import myImage from "../media/beetjuicetestpic2.jpeg";
import logo1 from "../media/logo1.jpeg";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
  object-fit: contain;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    height: 800px;
  }
  @media (max-width: 568px) {
    height: 600px;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  background: white;
`;

const Right = styled.div`
  width: 50%;
  height: 1000px;
  background: blue;
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  background: none;
  position: relative;
  z-index: 100;
`;

const Coverphoto = () => {
  return (
    <Container>
      {/* <Header>
        <Image src={logo1} width={120} height={120} priority />
        <h1>Beet Juice</h1>
      </Header> */}
      <Left></Left>
      <Right>
        <Image
          src={myImage}
          layout="responsive"
          objectFit={"cover"}
          width={100}
          height={104.2}
          priority
        />
      </Right>
    </Container>
  );
};

export default Coverphoto;
