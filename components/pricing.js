import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100%;
  height: 900px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  padding-left: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    padding-right: 0px;
    padding-left: 0px;
    height: 1100px;
  }
`;

const Left = styled.div`
  width: 35%;
  height: 500px;
  background-color: red;
  border-radius: 6px;
  margin-left: 100px;
  @media (max-width: 768px) {
    width: 70%;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 650px;
  }
`;

const Right = styled.div`
  width: 35%;
  height: 500px;
  background-color: red;
  border-radius: 6px;
  margin-left: 100px;
  @media (max-width: 768px) {
    width: 70%;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 650px;
  }
`;

// const TextBox = styled.div`
//   width: 30%;
//   height: 500px;
//   background-color: pink;
//   border-radius: 6px;
//   margin-left: 100px;
//   @media (max-width: 768px) {
//     width: 70%;
//     padding-top: 20px;
//     margin-left: 0px;
//     margin-top: 20px;
//     margin-bottom: 20px;
//     height: 650px;
//   }
// `;

const Pricing = () => {
  return (
    <Container>
      <Left>
        <h1>Live Ceremony and Cocktail band + Live Dance Band</h1>
        <h2>Ceremony</h2>
        <h5>
          - Live instrumental guitar for 30 minutes as guests arrive (or
          playlist)
        </h5>
        <h5>- Complete sound system & production for ceremony audio</h5>
        <h5>
          - Live instrumental guitar for 30 minutes as guests arrive (or
          playlist)
        </h5>
        <h2>Cocktail</h2>
        <h2>Live Dance Band</h2>
      </Left>
      <Right>
        <h1>Live Ceremony and Cocktail band + Live Dance Band</h1>
        <h2>Ceremony</h2>
        <h5>
          - Live instrumental guitar for 30 minutes as guests arrive (or
          playlist)
        </h5>
        <h5>- Complete sound system & production for ceremony audio</h5>
        <h5>
          - Live instrumental guitar for 30 minutes as guests arrive (or
          playlist)
        </h5>
        <h2>Cocktail</h2>
        <h2>Live Dance Band</h2>
      </Right>
    </Container>
  );
};

export default Pricing;
