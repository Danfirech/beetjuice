import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding-left: 240px;
  padding-right: 240px;
  @media (max-width: 768px) {
    height: 600px;
    font-size: 20px;
    padding-left: 140px;
    padding-right: 140px;
  }
  @media (max-width: 568px) {
    height: 600px;
    font-size: 15px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const About = () => {
  return (
    <Container>
      <p>
        OVER 12 YEARS OF GROOVES, CLASSIC ELECTRIC GUITAR AND DANCE DRIVEN DRUMS
        PERFORMED LIVE, ALONG WITH SOULFUL AND HARD-HITTING VOCALS, B33T JU1C3
        WILL TAILOR THEIR WORLD CLASS LIVE PERFORMANCE/SET TO FIT THE NEEDS ANY
        EVENT, VENUE OR AUDIENCE.
      </p>
    </Container>
  );
};

export default About;
