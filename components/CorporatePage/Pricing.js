import React from "react";
import styled from "styled-components";
import Image from "next/image";
import EventBanner from "../../media/event-heads.jpg";
import ReactPlayer from "react-player";
import ScrollAnimation from "react-animate-on-scroll";
import "../../pages/_document";

const BasicContactForm = (e) => {
  window.location = "https://form.jotform.com/220784862221152";
};

const CorporateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1190px;
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
`;

const TitleContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Titlegrey = styled.div`
  height: 120px;
  width: 83%;
  display: flex;
  justify-content: center;
  font-size: 62px;
  padding: 25px;
  /* padding-top: 80px; */
  z-index: 99;
  font-family: "Bebas Neue", cursive;
  @media (max-width: 768px) {
    font-size: 31px;
  }
`;

const Info = styled.div`
  height: 80px;
  width: 83%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding: 25px;
  z-index: 99;
  font-family: "Bebas Neue", cursive;
  @media (max-width: 768px) {
    font-size: 31px;
  }
`;

const Button = styled.div`
  width: 250px;
  height: 60px;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 15px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: "Overpass Mono", monospace;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    background-color: white;
    color: black;
    border-radius: 6px;
  }
`;

const Pricing = (props) => {
  return (
    <>
      <CorporateContainer>
        <ImageContainer>
          <div
            style={{
              position: "absolute",
            }}
          >
            <Image
              src={EventBanner}
              objectFit={"cover"}
              // width={1920}
              // height={1080}
            />
          </div>
          <TitleContainer>
            <Titlegrey>Corporate and Other Events</Titlegrey>
            <Info>
              WE DO EVENTS AND STUFF. GOD IS REAL BUT LEBRON IS REALER.
            </Info>
            <Button className="button:hover" onClick={BasicContactForm}>
              Contact For Booking/Pricing
            </Button>
          </TitleContainer>
        </ImageContainer>
      </CorporateContainer>
    </>
  );
};

export default Pricing;
