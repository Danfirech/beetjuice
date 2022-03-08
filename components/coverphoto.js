import React from "react";
import styled from "styled-components";
import myImage from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 1050px;
  background-image: url(${myImage});
`;

const Coverphoto = () => {
  return (
    <Container>
      <Image
        className="home_img"
        src={myImage}
        objectFit={"cover"}
        width={1920}
        height={2800}
      />
    </Container>
  );
};

export default Coverphoto;
