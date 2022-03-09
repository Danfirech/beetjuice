import React from "react";
import styled from "styled-components";
import myImage from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-image: url(${myImage});
  position: relative;
`;

const Coverphoto = () => {
  return (
    <Container>
      <Image
        className="home_img"
        src={myImage}
        objectFit={"cover"}
        width={1920}
        height={2200}
        maxH="2200px"
        priority
      />
    </Container>
  );
};

export default Coverphoto;
