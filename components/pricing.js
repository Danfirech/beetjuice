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
  height: 800px;
  background-color: red;
  border-radius: 6px;

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
  height: 800px;
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
        <h1>Ceremony/Cocktail + Live Dance Band</h1>
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
        <h5>
          Your guests will enjoy live music as they make their way into the
          reception hall alon with quiet hits while enjoying their meal.
        </h5>
        <h5>-60 minutes of live guitar/vocals music (or custom playlist)</h5>
        <h2>Live Dance Band</h2>
        <h5>
          Our band will make your guests dance the night away and celebrate your
          special night with a wide variety of hits spanning the past decades.
        </h5>
      </Left>
      <Right>
        <h1>Ceremony/Cocktail + Live DJ</h1>
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
        <h2>Live DJ</h2>
      </Right>
    </Container>
  );
};

export default Pricing;
