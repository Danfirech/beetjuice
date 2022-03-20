import React from "react";
import styled from "styled-components";
import pic from "../media/BeetJuiceTest.jpeg";
import Image from "next/image";

const Container = styled.div`
  display: none;
  @media (max-width: 1168px) {
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: red;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100vw;
  background-color: pink;
  font-size: 20px;
`;

const Header = styled.div`
  height: 15%;
  width: 100vw;
  background-color: blue;
`;

const ImageWrapper = styled.div`
  height: 65%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobilePhoto = () => {
  return (
    <Container>
      <Title>Beet Juice Enterntainment</Title>
      <ImageWrapper>
        <Image src={pic} layout="intrinsic" width={450} height={450} />
      </ImageWrapper>
    </Container>
  );
};

export default MobilePhoto;
