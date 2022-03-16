import React from "react";
import styled from "styled-components";
import pic from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
`;

const ImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  padding-left: 600px;
  display: flex;
  align-items: center;
`;

const Pic2 = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={pic}
          layout="intrinsic"
          // objectFit={"cover"}
          width={1200}
          height={700}
          priority
        />
      </ImageContainer>
    </Container>
  );
};

export default Pic2;
