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
  width: 100%;
  height: 700px;
  padding-top: 100px;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1400px;
    background-color: white;
  }
`;

const Left = styled.div`
  width: 30%;
  height: 600px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
    margin-left: 0px;
    margin-bottom: 20px;
    height: 700px;
    border: none;
    background-color: white;
  }
`;

const Right = styled.div`
  width: 30%;
  height: 600px;
  background-color: white;
  border-radius: 6px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
    margin-left: 0px;
    margin-bottom: 20px;
    height: 700px;
    border: none;
    background-color: white;
  }
`;

const MobileWeddingTitle = styled.div`
  height: 250px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 200px;
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    font-size: 25px;
    padding: 25px;
    font-family: raleway;
 
  }
`;

const WeddingLine = styled.div`
  width: 2px;
  height: 600px;
  background-color: black;
  margin-left: 90px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const TopOfWeddingBoxes = styled.div`
  width: 100%;
  height: 120px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Bebas Neue", cursive;
  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 0px;
    height: 100px;
  }
`;

const BottomOfWeddingBoxes = styled.div`
  padding: 10px;
  font-family: 'Overpass Mono', monospace;
  @media (max-width: 768px) {
    display: flex:
    align-items: center;
    justify: content;
  }
`;

const TitleContainer = styled.div`
  height: 250px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  height: 120px;
  width: 83%;
  display: flex;
  justify-content: center;
  background-color: White;
  font-size: 62px;
  padding: 25px;
  font-family: raleway;
  /* border-top: 2px solid black; */
  @media (max-width: 768px) {
    font-size: 31px;
  }
`;

const Titlegrey = styled.div`
  height: 120px;
  width: 83%;
  display: flex;
  justify-content: center;
  font-size: 62px;
  padding: 25px;
  font-family: "Bebas Neue", cursive;
  /* border-top: 2px solid black; */
  @media (max-width: 768px) {
    font-size: 31px;
  }
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

const TextBox = styled.div`
  width: 65%;
  height: 400px;
  background-color: #e5e4e2;
  border-radius: 6px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: none;
    height: 350px;
  }
`;

const CorporateTextContainter = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  display: flex;
  justify-content: center;
  font-family: "M PLUS 1", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0px;
    padding-left: 0px;
    height: 400px;
  }
`;

const CorporateText = styled.div`
  width: 100%;
  height: 200px;
  padding-left: 380px;
  padding-right: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-align: justify;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: justify;
  }
`;

const Offerings = styled.div`
  height: 700px;
  width: 100%;
  background-color: White;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  font-family: "Bebas Neue", cursive;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const BannerContainer = styled.div`
  height: 300px;
  width: 100%;
`;

const Pricing = (props) => {
  return (
    <>
      {/* WEDDINGS */}
      <BannerContainer>
        <Image src={WeddingBanner} layout="intrinsic" priority alt="Dan" />
      </BannerContainer>
      <Offerings>
        <h3>What We Offer</h3>
      </Offerings>

      <TitleContainer className="background">
        <Titlegrey>Wedding Services</Titlegrey>
        <Button className="button:hover" onClick={BasicContactForm}>
          Contact For Booking/Pricing
        </Button>
      </TitleContainer>
      {/* <VideoContainer className="background">
        <ReactPlayer
          className="mobileVideo"
          width="40%"
          height="300px"
          url="https://vimeo.com/690357219"
        />
      </VideoContainer> */}
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
              Your guests will enjoy 60 minutes of live music as they make their
              way into the reception hall with relaxing hits as they enjoy their
              meals.
            </h4>
            <h2 className="weddingtitles">Live Band</h2>
            <h4 className="weddingparagraphs">
              Our band will make your guests dance the night away and celebrate
              your special night with a wide variety of hits spanning the past
              decades.
            </h4>
          </BottomOfWeddingBoxes>
        </Left>
        {/* <WeddingLine /> */}
        <Right className="slide-top">
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
              Your guests will enjoy 60 minutes of live music as they make their
              way into the reception hall with relaxing hits as they enjoy their
              meals.
            </h4>
            <h2 className="weddingtitles">Live DJ</h2>
            <h4 className="weddingparagraphs">
              Our DJ will make your guests dance the night away and celebrate
              your special night with a wide variety of hits.
            </h4>
          </BottomOfWeddingBoxes>
        </Right>
      </Container>
      {/* Corporate/Events */}
      <TitleContainer className="background-corporate">
        <Titlegrey>Corporate/Events</Titlegrey>
        <Button onClick={BasicContactForm}>Contact For Booking/Pricing</Button>
      </TitleContainer>
      {/* <VideoContainer>
        <ReactPlayer
          className="mobileVideo "
          width="40%"
          height="300px"
          url="https://vimeo.com/690357219"
        />
      </VideoContainer> */}
      <Offerings>
        <Image
          padding-top={10}
          src={Stock}
          layout="intrinsic"
          width={600}
          height={400}
          priority
          alt="Dan"
        />
      </Offerings>
      <CorporateTextContainter>
        <CorporateText>
          <h5 className="weddingparagraphs">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
          </h5>
        </CorporateText>
      </CorporateTextContainter>
    </>
  );
};

export default Pricing;
