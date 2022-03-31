import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Passionfruit from '../../media/passionfruity poster.png';
import Top from '../../media/top.png';
import Bottom from '../../media/bottom.png';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  background-color: #e5e4e2;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Containerleft = styled.div`
  height: 830px;
  width: 50%;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 200px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerRightTop = styled.div`
  height: 50%;
  width: 100%;
  background-color: #e5e4e2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 200px;
  padding-top: 250px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerRightBottom = styled.div`
  height: 50%;
  width: 100%;
  background-color: #e5e4e2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 200px;
  padding-bottom: 250px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerRight = styled.div`
  height: 830px;
  width: 50%;
  background-color: #e5e4e2;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
          <Image
            src={Top}
            layout="intrinsic"
            width={1100}
            height={250}
            priority
            alt="top"
          />
        </ContainerRightTop>
        <ContainerRightBottom>
          <Image
            src={Bottom}
            layout="intrinsic"
            width={1100}
            height={300}
            priority
            alt="bottom"
          />
        </ContainerRightBottom>
      </ContainerRight>
    </Container>
  );
};

export default PassionfruitContainer;
