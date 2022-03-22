import React from 'react';
import styled from 'styled-components';
import pic from '../media/Main.png';
import Image from 'next/image';
import Insta from '../media/Insta.png';
import Facebook from '../media/Face.png';
import ScrollAnimation from 'react-animate-on-scroll';
import '../pages/_document';

const InstgramLink = (e) => {
  window.location = 'https://www.instagram.com/b33tju1c3/?hl=en';
};

const FacebookLink = (e) => {
  window.location = 'https://form.jotform.com/220784862221152';
};

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  padding-right: 150px;
  background-color: #e5e4e2;
  @media (max-width: 1168px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  height: 70vh;
  width: 100%;
  background-color: #e5e4e2;
  padding-left: 480px;
  padding-top: 250px;
  padding-bottom: 60px;
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  height: 300px;
  width: 750px;
  background-color: none;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  z-index: 1;
  padding-top: 300px;
  padding-left: 400px;
  font-family: 'Bebas Neue', cursive;
`;

const Pic2 = () => {
  return (
    <>
      <Container>
        <TextContainer className="flicker-in-1">
          <h1>Beet Juice Entertainment</h1>
        </TextContainer>
        <ImageContainer className="flicker-in-1">
          <Image
            src={pic}
            layout="intrinsic"
            width={1300}
            height={850}
            priority
            alt="Cover"
          />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Pic2;
