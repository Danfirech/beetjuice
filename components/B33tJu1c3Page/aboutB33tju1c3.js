import React from "react";
import styled from "styled-components";
import Dan from "../../media/Dan.jpeg";
import Ezra from "../../media/Ezra.jpeg";
import Image from "next/image";
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

const BeetJuiceText = styled.div`
  width: 30%;
  height: 680px;
  background-color: #e5e4e2;
  border-radius: 6px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  font-size: 21px;
  font-family: "Roboto", sans-serif;
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
  background-color: #e5e4e2;
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
  height: 400px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 200px;
    width: 100%;
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

const Pricing = (props) => {
  return (
    <>
      {/* B33T Ju1c3 Sindicate */}
      <TitleContainer className="background">
        <Titlegrey>B33T Ju1c3 Sindicate</Titlegrey>
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
            <br />
            <br />
            Both on stage and in the studio, B33t Ju1c3 relies on live looping
            to create their dense soundscapes. Stacking grooves through
            beatboxing and percussion, laying down riffs on guitar, and singing
            heartfelt lyrics over the sonic backdrop.
            <br />
            <br />
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
