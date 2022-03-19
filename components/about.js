import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: pink;
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
        Get suggestions from Grammarly while you write in desktop applications
        and sites across the web—as you move between apps, social media,
        documents, messages, and emails.
      </p>
    </Container>
  );
};

export default About;
