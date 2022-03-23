import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Passionfruit from "../../media/passionfruit.png";

const Container = styled.div`
  height: 800px;
  width: 100vw;
  background-color: pink;
  display: flex;
  flex-direction: row;
`;

const Containerleft = styled.div`
  height: 800px;
  width: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerRightTop = styled.div`
  height: 50%;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerRightBottom = styled.div`
  height: 50%;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerRight = styled.div`
  height: 800px;
  width: 50%;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const ContainerRightTextTop = styled.div`
  height: 200px;
  width: 600px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerRightTextBottom = styled.div`
  height: 200px;
  width: 600px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PassionfruitContainer = () => {
  return (
    <Container>
      <Containerleft>
        <Image
          src={Passionfruit}
          layout="intrinsic"
          width={600}
          height={700}
          priority
          alt="Passionfruit"
        />
      </Containerleft>
      <ContainerRight>
        <ContainerRightTop>
          <ContainerRightTextTop>
            <h1>B33t Ju1c3 Entertainment presents</h1>
            <h3>Passionfruit</h3>
            <h2>A Triubute To Drake</h2>
          </ContainerRightTextTop>
        </ContainerRightTop>
        <ContainerRightBottom>
          <ContainerRightTextBottom>
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </h2>
          </ContainerRightTextBottom>
        </ContainerRightBottom>
      </ContainerRight>
    </Container>
  );
};

export default PassionfruitContainer;
