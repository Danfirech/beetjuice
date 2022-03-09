import React from "react";
import styled from "styled-components";
import myImage from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 1800px;
  background-image: url(${myImage});
  position: relative;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 1000px;
  }
  @media (max-width: 568px) {
    height: 800px;
  }
`;

const Coverphoto = () => {
  return (
    <Container>
      <Image
        className="home_img"
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
