import React from "react";
import styled from "styled-components";
import "../pages/_document";

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding-left: 390px;
  padding-right: 390px;
  padding-top: 90px;
  font-family: "M PLUS 1", sans-serif;
  text-align: justify;
  @media (max-width: 568px) {
    height: 200px;
    font-size: 15px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 120px;
    margin-top: -20px;
    text-align: left;
    display: none;
  }
`;

const About = () => {
  return (
    <Container>
      <p className="weddingparagraphs">
        OVER 12 YEARS OF GROOVES, CLASSIC ELECTRIC GUITAR AND DANCE DRIVEN DRUMS
        PERFORMED LIVE, ALONG WITH SOULFUL AND HARD-HITTING VOCALS, B33T JU1C3
        WILL TAILOR THEIR WORLD CLASS LIVE PERFORMANCE/SET TO FIT THE NEEDS ANY
        EVENT, VENUE OR AUDIENCE.
      </p>
    </Container>
  );
};

export default About;
