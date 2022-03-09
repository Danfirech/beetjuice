import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 768px) {
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>616-821-0139</p>
      <p>BookB33tJuice@gmail.com</p>
      <p>INSTAGRAM</p>
      <p>FACEBOOK</p>
      <p>MEDIA</p>
    </Container>
  );
};

export default Footer;
