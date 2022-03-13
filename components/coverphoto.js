import React from "react";
import styled from "styled-components";
import myImage from "../media/beetjuicetestpic2.jpeg";
import logo1 from "../media/logo1.jpeg";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 1800px;
  background-image: url(${myImage});
  position: relative;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 800px;
  }
  @media (max-width: 568px) {
    height: 600px;
  }
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
      <Header>
        <Image src={logo1} width={120} height={120} priority />
        <h1>Beet Juice</h1>
      </Header>
      <Image
        src={myImage}
        layout={"fill"}
        // objectFit={"cover"}
        width={1320}
        height={1800}
        priority
      />
    </Container>
  );
};

export default Coverphoto;
