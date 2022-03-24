import React from "react";
import styled from "styled-components";
import Image from "next/image";
import WeddingBanner from "../../media/weddingbanner.jpeg";
import ReactPlayer from "react-player";
import Stock from "../../media/BandStock.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
import "../../pages/_document";

const BasicContactForm = (e) => {
  window.location = "https://form.jotform.com/220784862221152";
};

const Container = styled.div`
  height: 1400px;
  width: 100vw;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  padding-top: 100px;
  height: 300px;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Title = styled.div`
  height: 200px
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PriceCardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  padding-left: 100px;
`;

const PriceLeft = styled.div`
  height: 90%;
  width: 400px;
  background-color: red;
`;
const PriceMiddle = styled.div`
  height: 90%;
  width: 400px;
  background-color: Pink;
`;

const PriceRight = styled.div`
  height: 90%;
  width: 400px;
  background-color: black;
`;

const PriceCardTop = styled.div`
  height: 30%;
  width: 100%;
  clip-path: polygon(
    50% 0%,
    100% 0,
    100% 35%,
    100% 56%,
    0 100%,
    0% 70%,
    0 0,
    20% 0
  );
  background-color: red;
`;

const Button = styled.div`
  width: 250px;
  height: 60px;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-family: "Overpass Mono", monospace;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
  `;

const Price = styled.div`
  width: 30px;
  height: 30px;
  background-color: blue;
`;

// const Container = styled.div`;
//   width: 100%;
//   height: 700px;
//   padding-top: 100px;
//   background-color: #e5e4e2;
//   display: flex;
//   justify-content: center;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 1400px;
//     background-color: white;
//   }
// `;

// const InfoBox = styled.div`
//   width: 30%;
//   height: 600px;
//   background-color: white;
//   border-radius: 6px;
//   display: flex;
//   flex-direction: column;
//   @media (max-width: 768px) {
//     width: 100%;
//     padding-top: 20px;
//     margin-left: 0px;
//     margin-bottom: 20px;
//     height: 700px;
//     border: none;
//     background-color: white;
//   }
// `;

// const MobileWeddingTitle = styled.div`
//   height: 250px;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   @media (max-width: 768px) {
//     height: 200px;
//     width: 100%
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     background-color: white;
//     font-size: 25px;
//     padding: 25px;
//     font-family: raleway;

//   }
// `;

// const WeddingLine = styled.div`
//   width: 2px;
//   height: 600px;
//   background-color: black;
//   margin-left: 90px;
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const TopOfWeddingBoxes = styled.div`
//   width: 100%;
//   height: 120px;
//   background-color: black;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-family: "Bebas Neue", cursive;
//   @media (max-width: 768px) {
//     font-size: 11px;
//     margin-top: 0px;
//     height: 100px;
//   }
// `;

// const BottomOfWeddingBoxes = styled.div`
//   padding: 10px;
//   font-family: 'Overpass Mono', monospace;
//   @media (max-width: 768px) {
//     display: flex:
//     align-items: center;
//     justify: content;
//   }
// `;

// const TitleContainer = styled.div`
//   height: 250px;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Title = styled.div`
//   height: 120px;
//   width: 83%;
//   display: flex;
//   justify-content: center;
//   background-color: White;
//   font-size: 62px;
//   padding: 25px;
//   font-family: raleway;
//   /* border-top: 2px solid black; */
//   @media (max-width: 768px) {
//     font-size: 31px;
//   }
// `;

// const Titlegrey = styled.div`
//   height: 120px;
//   width: 83%;
//   display: flex;
//   justify-content: center;
//   font-size: 62px;
//   padding: 25px;
//   font-family: "Bebas Neue", cursive;
//   /* border-top: 2px solid black; */
//   @media (max-width: 768px) {
//     font-size: 31px;
//   }
// `;

// const Button = styled.div`
//   width: 250px;
//   height: 60px;
//   border: 2px solid black;
//   border-radius: 10px;
//   margin-top: -10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: black;
//   color: white;
//   font-family: "Overpass Mono", monospace;
//   font-size: 14px;
//   transition-duration: 0.4s;
//   cursor: pointer;
//   :hover {
//     background-color: white;
//     color: black;
//   }

//   @media (max-width: 768px) {
//     background-color: white;
//     color: black;
//     border-radius: 6px;
//   }
// `;

// const TextBox = styled.div`
//   width: 65%;
//   height: 400px;
//   background-color: #e5e4e2;
//   border-radius: 6px;
//   margin-left: 100px;
//   margin-right: 100px;
//   display: flex;
//   @media (max-width: 768px) {
//     width: 100%;
//     margin-right: none;
//     height: 350px;
//   }
// `;

// const WeddingContainer = styled.div`
//   height: 300px;
//   width: 100%;
//   position: absolute;
// `;

const Pricing = () => {
  return (
    <>
      <Container>
        <Image
          src={WeddingBanner}
          height="2500"
          layout="intrinsic"
          priority
          alt="Dan"
        />
        <TitleContainer>
          <Title>
            <h1 className="textcolorwhite">Wedding Services</h1>
            <Button className="button:hover" onClick={BasicContactForm}>
              Contact For Booking/Pricing
            </Button>
          </Title>
        </TitleContainer>
        <PriceCardContainer>
          <PriceLeft></PriceLeft>
          <PriceMiddle>
            <PriceCardTop>
              <h1>Test</h1>
            </PriceCardTop>
          </PriceMiddle>
          <PriceRight>
            <PriceCardTop></PriceCardTop>
          </PriceRight>
        </PriceCardContainer>
      </Container>
    </>
  );
};
export default Pricing;

{
  /* NEW WEDDING SECTION */
}
{
  /* WEDDINGS */
}
{
  /* <WeddingContainer>
        <Image src={WeddingBanner} layout="intrinsic" priority alt="Dan" />
        <TitleContainer className="background">
          <Titlegrey>Wedding Services</Titlegrey>
          <Button className="button:hover" onClick={BasicContactForm}>
            Contact For Booking/Pricing
          </Button>
        </TitleContainer>
        <Container>
          <Left className="slide-top">
            <TopOfWeddingBoxes>
              <h1>
                Ceremony/Cocktail + Live Band <br /> (Starting at) $6800
              </h1>
            </TopOfWeddingBoxes>
            <BottomOfWeddingBoxes>
              <h2 className="weddingtitles">Ceremony</h2>
              <h4 className="weddingparagraphs">
                Live instrumental guitar for 30 minutes as guests arrive (or
                playlist)
              </h4>
              <h2 className="weddingtitles">Cocktail</h2>
              <h4 className="weddingparagraphs">
                Your guests will enjoy 60 minutes of live music as they make
                their way into the reception hall with relaxing hits as they
                enjoy their meals.
              </h4>
              <h2 className="weddingtitles">Live Band</h2>
              <h4 className="weddingparagraphs">
                Our band will make your guests dance the night away and
                celebrate your special night with a wide variety of hits
                spanning the past decades.
              </h4>
            </BottomOfWeddingBoxes>
          </Left>
          {/* <WeddingLine /> */
}
{
  /* <Right className="slide-top">
            <TopOfWeddingBoxes>
              <h1>
                Ceremony/Cocktail + Live DJ <br />
                (Starting at) $4800
              </h1>
            </TopOfWeddingBoxes>
            <BottomOfWeddingBoxes>
              <h2 className="weddingtitles">Ceremony</h2>
              <h4 className="weddingparagraphs">
                Live instrumental guitar for 30 minutes as guests arrive (or
                playlist)
              </h4>
              <h2 className="weddingtitles">Cocktail</h2>
              <h4 className="weddingparagraphs">
                Your guests will enjoy 60 minutes of live music as they make
                their way into the reception hall with relaxing hits as they
                enjoy their meals.
              </h4>
              <h2 className="weddingtitles">Live DJ</h2>
              <h4 className="weddingparagraphs">
                Our DJ will make your guests dance the night away and celebrate
                your special night with a wide variety of hits.
              </h4>
            </BottomOfWeddingBoxes>
          </Right>
        </Container>
      </WeddingContainer> */
}
