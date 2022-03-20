import React from "react";
import styled from "styled-components";
import Dan from "../media/Dan.jpeg";
import Ezra from "../media/Ezra.jpeg";
import Image from "next/image";
import ReactPlayer from "react-player";

const BasicContactForm = (e) => {
  window.location = "https://form.jotform.com/220784862221152";
};

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    padding-left: 20px;
    height: 1400px;
  }
`;

const Left = styled.div`
  width: 30%;
  height: 600px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
    margin-left: 0px;
    margin-bottom: 20px;
    height: 700px;
    border: 1px solid black;
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
  border: 2px solid black;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
    margin-left: 0px;
    margin-bottom: 20px;
    height: 700px;
    border: 1px solid black;
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
  height: 200px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: raleway;
  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 0px;
  }
`;

const BottomOfWeddingBoxes = styled.div`
  padding: 42px;
  font-family: "M PLUS 1", sans-serif;
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
  border-top: 2px solid black;
  @media (max-width: 768px) {
    font-size: 31px;
  }
`;

const Button = styled.div`
  width: 210px;
  height: 60px;
  border: 2px solid black;
  margin-top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: raleway;
  cursor: pointer;
  @media (max-width: 768px) {
    background-color: #66223d;
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
  height: 400px;
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
  height: 300px;
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

const BeetJuiceText = styled.div`
  width: 30%;
  height: 680px;
  background-color: white;
  border-radius: 6px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-family: "M PLUS 1", sans-serif;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: -180px;
    height: 200px;
    text-align: left;
  }
`;

const BeetJuiceTextContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
  display: flex;
  justify-content: center;
  text-align: justify;
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0px;
    padding-left: 0px;
    height: 1500px;
  }
`;

const VideoContainer = styled.div`
  height: 300px;
  width: 100vw;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Vid = styled.div`
  height: 300px;
  width: 40%;
`;

const Offerings = styled.div`
  height: 200px;
  width: 100%;
  background-color: White;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-family: raleway;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Pricing = () => {
  return (
    <>
      {/* WEDDINGS */}
      <Offerings>What We Offer</Offerings>
      <TitleContainer>
        <Title>Weddings</Title>
        <Button onClick={BasicContactForm}>CLICK TO INQUIRE</Button>
      </TitleContainer>
      <Container>
        <Left>
          <TopOfWeddingBoxes>
            <h1>Ceremony/Cocktail + Live Band</h1>
            <h1>$6800</h1>
          </TopOfWeddingBoxes>
          <BottomOfWeddingBoxes>
            <h2>Ceremony</h2>
            <h4>
              Live instrumental guitar for 30 minutes as guests arrive (or
              playlist)
            </h4>
            <h2>Cocktail</h2>
            <h4>
              Your guests will enjoy 60 minutes of live music as they make their
              way into the reception hall with relaxing hits as they enjoy their
              meals.
            </h4>
            <h2>Live Band</h2>
            <h4>
              Our band will make your guests dance the night away and celebrate
              your special night with a wide variety of hits spanning the past
              decades.
            </h4>
          </BottomOfWeddingBoxes>
        </Left>
        {/* <WeddingLine /> */}
        <Right>
          <TopOfWeddingBoxes>
            <h1>Ceremony/Cocktail + Live DJ</h1>
            <h1>$4800</h1>
          </TopOfWeddingBoxes>
          <BottomOfWeddingBoxes>
            <h2>Ceremony</h2>
            <h4>
              Live instrumental guitar for 30 minutes as guests arrive (or
              playlist)
            </h4>
            <h2>Cocktail</h2>
            <h4>
              Your guests will enjoy 60 minutes of live music as they make their
              way into the reception hall with relaxing hits as they enjoy their
              meals.
            </h4>
            <h2>Live DJ</h2>
            <h4>
              Our DJ will make your guests dance the night away and celebrate
              your special night with a wide variety of hits.
            </h4>
          </BottomOfWeddingBoxes>
        </Right>
      </Container>
      {/* Corporate/Events */}
      <TitleContainer>
        <Title>Corporate/Events</Title>
        <Button onClick={BasicContactForm}>Contact For Booking/Pricing</Button>
      </TitleContainer>
      {/* <VideoContainer>
        <Vid>
          <ReactPlayer
            width="100%"
            url="https://www.youtube.com/watch?v=wWgIAphfn2U"
          />
        </Vid>
      </VideoContainer> */}
      <CorporateTextContainter>
        <CorporateText>
          <h5>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </h5>
        </CorporateText>
      </CorporateTextContainter>
      {/* B33T Ju1c3 Sindicate */}
      <TitleContainer>
        <Title>B33T Ju1c3 Sindicate</Title>
        <Button onClick={BasicContactForm}>Contact For Booking/Pricing</Button>
      </TitleContainer>
      <BeetJuiceTextContainer>
        <div className="danphoto">
          <Image
            src={Ezra}
            layout="intrinsic"
            width={400}
            height={500}
            priority
            alt="Ezra"
          />
        </div>
        <div className="ezraphoto">
          <Image
            padding-top={10}
            src={Dan}
            layout="intrinsic"
            width={400}
            height={500}
            priority
            alt="Dan"
          />
        </div>
        <BeetJuiceText>
          <h5>
            Beet Juice (written as B33T JU1 C3), is a two-man project founded by
            former Mosaic Foundation keyboardist Ekewem Bogmis, A native of
            Rochester and Daniel Possehl a Midwestener at heart who both moved
            to LA to pursue their music careers.
          </h5>
          <h5>
            Both on stage and in the studio, B33t Ju1c3 relies on live looping
            to create their dense soundscapes. Stacking grooves through
            beatboxing and percussion, laying down riffs on guitar, and singing
            heartfelt lyrics over the sonic backdrop.
          </h5>
          <h5>
            Bogmis started experimenting with looping during a studio project
            five years ago. B33t Ju1c3 has evolved toward creating dub-style
            music underlined with soulful dance rythems. The project is rooted
            in building a safe space for people to feel and move to the rythems
            created by Ezra and Daniel.
          </h5>
        </BeetJuiceText>
      </BeetJuiceTextContainer>
    </>
  );
};

export default Pricing;
