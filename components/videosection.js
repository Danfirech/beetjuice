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
  background-color: blue;
  border-radius: 6px;
  @media (max-width: 768px) {
    width: 70%;
    margin-top: 20px;
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

const TextBox = styled.div`
  width: 30%;
  height: 500px;
  background-color: pink;
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

const Videosection = () => {
  return (
    <Container>
      <Left>
        <ReactPlayer
          width="100%"
          url="https://www.youtube.com/watch?v=wWgIAphfn2U"
        />
      </Left>
      <Right>
        <h1>Full Service</h1>
        <h2>$2900</h2>
      </Right>
      <TextBox>
        <h1>Inquire about date</h1>
        <button>Message Us</button>
      </TextBox>
    </Container>
  );
};

export default Videosection;
