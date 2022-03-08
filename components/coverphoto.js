import React from "react";
import styled from "styled-components";
import myImage from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 1050px;
  background-image: url(${myImage});
`;

const Textbox = styled.div`
  width: 40px;
  height: 40px;
  color: white;
`;

const Coverphoto = () => {
  return (
    <Container>
      <h1>Hello Hello</h1>
      <Image
        className="home_img"
        src={myImage}
        objectFit={"cover"}
        width={1920}
        height={1800}
      />
    </Container>
  );
};

export default Coverphoto;
