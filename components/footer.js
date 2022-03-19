import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
  }
`;

const FooterTop = styled.div`
  width: 100%;
  height: 100px;
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 600px;
  padding-right: 600px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  height: 100px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterTop>
        <p>616-821-0139</p>
        <p>BookB33tJuice@gmail.com</p>
        <p>INSTAGRAM</p>
        <p>FACEBOOK</p>
        <p>MEDIA</p>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </Container>
  );
};

export default Footer;
