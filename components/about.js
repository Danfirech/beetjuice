import React from "react";
import styled from "styled-components";
import "../pages/_document";
import ScrollAnimation from "react-animate-on-scroll";

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  padding-left: 390px;
  padding-right: 390px;
  padding-top: 150px;
  text-align: justify;
  font-family: "Roboto", sans-serif;
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
      <ScrollAnimation animateIn="fadeIn">
        <p>
          OVER 12 YEARS OF GROOVES, CLASSIC ELECTRIC GUITAR AND DANCE DRIVEN
          DRUMS PERFORMED LIVE, ALONG WITH SOULFUL AND HARD-HITTING VOCALS, B33T
          JU1C3 WILL TAILOR THEIR WORLD CLASS LIVE PERFORMANCE/SET TO FIT THE
          NEEDS OF ANY EVENT, VENUE OR AUDIENCE.
        </p>
      </ScrollAnimation>
    </Container>
  );
};

export default About;
