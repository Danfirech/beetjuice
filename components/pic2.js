import React from "react";
import styled from "styled-components";
import pic from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: #e5e4e2;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 568px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #e5e4e2;
  padding-left: 600px;
  display: flex;
  align-items: center;
  padding-right: 50px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 568px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  height: 300px;
  width: 750px;
  background-color: none;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  z-index: 1;
  padding-top: 450px;
  padding-left: 400px;
`;

const Pic2 = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Beet Juice Entertainment</h1>
      </TextContainer>
      <ImageContainer>
        <Image
          src={pic}
          layout="intrinsic"
          // objectFit={"cover"}
          width={1300}
          height={800}
          priority
        />
      </ImageContainer>
    </Container>
  );
};

export default Pic2;
