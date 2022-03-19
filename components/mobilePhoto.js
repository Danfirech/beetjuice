import React from "react";
import styled from "styled-components";
import pic from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  display: none;
  @media (max-width: 1168px) {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: red;
  }
`;

const Title = styled.div`
  height: 20%;
  width: 100vw;
  background-color: black;
`;

const Header = styled.div`
  height: 15%;
  width: 100vw;
  background-color: blue;
`;

const ImageWrapper = styled.div`
  height: 65%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobilePhoto = () => {
  return (
    <Container>
      <Header></Header>
      <Title>Beet Juice Enterntainment</Title>
      <ImageWrapper>
        <Image src={pic} layout="intrinsic" width={450} height={450} />
      </ImageWrapper>
    </Container>
  );
};

export default MobilePhoto;
