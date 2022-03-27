import React from "react";
import styled from "styled-components";
import Image from "next/image";
import WeddingBanner from "../../media/weddingbanner.jpeg";
import ReactPlayer from "react-player";
import Stock from "../../media/BandStock.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
import "../../pages/_document";
import DJ from "../../media/DJ.jpeg";

const BasicContactForm = (e) => {
  window.location = "https://form.jotform.com/220784862221152";
};

const Container = styled.div`
  height: 1600px;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 2700px;
  }
`;

const TitleContainer = styled.div`
  height: 300px;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 2700px;
  }
`;

const Title = styled.div`
  height: 200px
  width: 400px;
  display: flex;
  background: none;
  color: white;
  position: absolute;
  z-index: 99;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    @media (max-width: 768px) {
    flex-direction: column;
    height: 400px;
  }
`;

const PriceCardContainer = styled.div`
  height: 1500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #e5e4e2;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  padding-left: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 1900px;
    margin-top: 0px;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 0px;
  }
`;

const PriceLeft = styled.div`
  height: 50%;
  width: 500px;
  background-color: #e5e4e2;
  color: black;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const PriceMiddle = styled.div`
  height: 90%;
  width: 450px;
  background-color: #e5e4e2;
  border: 1px solid black;
  @media (max-width: 768px) {
    height: 40%;
    width: 90vw;
  }
`;

const PriceRight = styled.div`
  height: 90%;
  width: 450px;
  background-color: #e5e4e2;
  border: 1px solid black;
  @media (max-width: 768px) {
    height: 40%;
    width: 90vw;
  }
`;

const PriceCardTop = styled.div`
  height: 200px;
  width: 100%;
  background-color: #e5e4e2;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  position: absolute;
  z-index: 99;
   background-color: #e5e4e2;
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

const PriceCardBottom = styled.div`
  padding: 10px;
  font-family: "Overpass Mono", monospace;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const Sections = styled.div`
  height: 220px;
  width: 100vw;
  background-color: #e5e4e2;
  z-index: 100;
  font-size: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const FaqSection = styled.div`
  height: 1200px;
  width: 100vw;
  display: flex;
  background-color: #e5e4e2;
  margin-top: -120px;
`;

const QuestionsPageContainer = styled.div`
  height: 1100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const QuestionsBox = styled.div`
  background-color: black;
  width: 1200px;
  height: 100px;
  background-color: white;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 1200px;
  /* background-color: #fefefe; */
  background-color: #dfe5e5;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 1200px;
  /* background-color: #fefefe; */
  background-color: white;
  color: gray;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Pricing = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Title>
            <h1 className="textcolorwhite">Weddings</h1>
          </Title>

          <Button className="button:hover" onClick={BasicContactForm}>
            Contact For Booking/Pricing
          </Button>
          <Image
            src={WeddingBanner}
            height="2000"
            objectFit={"cover"}
            alt="Dan"
          />
        </ImageContainer>
        <Sections>Packages We Offer</Sections>
        <PriceCardContainer>
          <PriceLeft>
            <h2>
              We can customize any package. Our Band or DJ will curate a set to
              fit your weddings vibes.{" "}
            </h2>
            <Image src={DJ} height="400" width="500" alt="Dan" />
          </PriceLeft>
          <PriceMiddle>
            <PriceCardTop>
              <h2>Ceremony/Cocktail + Live Band</h2>
              <h3>(Starting at) $5200</h3>
            </PriceCardTop>
            <PriceCardBottom>
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
            </PriceCardBottom>
          </PriceMiddle>
          <PriceRight>
            <PriceCardTop>
              <h2>Ceremony/Cocktail + Live DJ</h2>
              <h3>(Starting at) $4000</h3>
            </PriceCardTop>
            <PriceCardBottom>
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
            </PriceCardBottom>
          </PriceRight>
        </PriceCardContainer>
      </Container>
      <FaqSection>
        <QuestionsPageContainer>
          <Sections>FAQ</Sections>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "#0c234b",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please ask your first question here. It may be any lenght you
                chose?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please Answer your first question here. It may be any lenght you
                chose?
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "#0c234b",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please ask your first question here. It may be any lenght you
                chose?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please Answer your first question here. It may be any lenght you
                chose?
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "#0c234b",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please ask your first question here. It may be any lenght you
                chose?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please Answer your first question here. It may be any lenght you
                chose?
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "#0c234b",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please ask your first question here. It may be any lenght you
                chose?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please Answer your first question here. It may be any lenght you
                chose?
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "#0c234b",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please ask your first question here. It may be any lenght you
                chose?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please Answer your first question here. It may be any lenght you
                chose?
              </h4>
            </Bottom>
          </QuestionsBox>
          <QuestionsBox>
            <Top>
              <h1
                className="boxBorderTop"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                  color: "#0c234b",
                }}
              >
                Q.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please ask your first question here. It may be any lenght you
                chose?
              </h4>
            </Top>
            <Bottom>
              <h1
                className="boxBorderBottom"
                style={{
                  paddingRight: 20,
                  paddingLeft: 15,
                }}
              >
                A.
              </h1>
              <h4
                style={{
                  paddingTop: 10,
                }}
              >
                Please Answer your first question here. It may be any lenght you
                chose?
              </h4>
            </Bottom>
          </QuestionsBox>
        </QuestionsPageContainer>
      </FaqSection>
    </>
  );
};

export default Pricing;
