import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Insta from "../media/Instagram.jpeg";
import Facebook from "../media/Facebook.jpeg";
import "../pages/_document";

const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 100px;
    background-color: #e5e4e2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-family: "M PLUS 1", sans-serif;
  }
`;

const FooterTop = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #e5e4e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 140px;
  padding-left: 140px;
  padding-top: 15px;
`;

const FooterBottom = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #e5e4e2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileFooter = () => {
  return (
    <Container>
      <FooterTop>
        <div>
          <Image
            src={Insta}
            layout="intrinsic"
            width={50}
            height={50}
            priority
          />
        </div>
        <div>
          {" "}
          <Image
            src={Facebook}
            layout="intrinsic"
            width={50}
            height={50}
            priority
          />
        </div>
      </FooterTop>
      <FooterBottom>
        <h3>bookb33tju1c3@gmail.com</h3>
      </FooterBottom>
    </Container>
  );
};

export default MobileFooter;
