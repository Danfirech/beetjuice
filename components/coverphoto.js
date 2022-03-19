import React from "react";
import styled from "styled-components";
import pic from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  background-color: #e5e4e2;
  @media (max-width: 1168px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  height: 70vh;
  width: 100%;
  background-color: #e5e4e2;
  padding-left: 600px;
  display: flex;
  align-items: center;
  padding-right: 50px;
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
  padding-top: 250px;
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
