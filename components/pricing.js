import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    padding-right: 0px;
    padding-left: 0px;
    height: 1300px;
  }
`;

const Left = styled.div`
  width: 40%;
  height: 600px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 70%;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 650px;
  }
`;

const Right = styled.div`
  width: 40%;
  height: 600px;
  background-color: white;
  border-radius: 6px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 70%;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 650px;
  }
`;

const TitleContainer = styled.div`
  height: 150px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Title = styled.div`
  height: 150px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: White;
  font-size: 30px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
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
    width: 70%;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 650px;
  }
`;

const Button = styled.div`
  width: 270px;
  height: 40px;
  border: 2px solid black;
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e4e2;
`;

const BeetJuiceText = styled.div`
  width: 30%;
  height: 680px;
  background-color: #e5e4e2;
  border-radius: 6px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  @media (max-width: 768px) {
    width: 70%;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 650px;
  }
`;

const CorporateText = styled.div`
  width: 100%;
  height: 400px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 70%;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 650px;
  }
`;

const Pricing = () => {
  return (
    <>
      {/* WEDDINGS */}
      <TitleContainer>
        <Title>Weddings</Title>
        <Button>Contact For Booking</Button>
      </TitleContainer>
      <Container>
        <Left>
          <h1>Ceremony/Cocktail + Live Band</h1>
          <br />
          <h1>$6800</h1>
          <br />
          <h2>Ceremony</h2>
          <h5>
            - Live instrumental guitar for 30 minutes as guests arrive (or
            playlist)
          </h5>
          <h2>Cocktail</h2>
          <h5>
            Your guests will enjoy 60 minutes of live music as they make their
            way into the reception hall with relaxing hits as they enjoy their
            meals.
          </h5>
          <h2>Live Band</h2>
          <h5>
            Our band will make your guests dance the night away and celebrate
            your special night with a wide variety of hits spanning the past
            decades.
          </h5>
        </Left>
        <Right>
          <h1>Ceremony/Cocktail + Live DJ</h1>
          <br />
          <h1>$4800</h1>
          <br />
          <h2>Ceremony</h2>
          <h5>
            - Live instrumental guitar for 30 minutes as guests arrive (or
            playlist)
          </h5>
          <h2>Cocktail</h2>
          <h5>
            Your guests will enjoy 60 minutes of live music as they make their
            way into the reception hall with relaxing hits as they enjoy their
            meals.
          </h5>
          <h2>Live DJ</h2>
          <h5>
            Our DJ will make your guests dance the night away and celebrate your
            special night with a wide variety of hits.
          </h5>
        </Right>
      </Container>
      {/* Corporate/Events */}
      <TitleContainer>
        <Title>Corporate/Events</Title>
        <Button>Contact For Booking/Pricing</Button>
      </TitleContainer>
      <Container>
        <TextBox>
          <CorporateText>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </CorporateText>
        </TextBox>
      </Container>
      {/* B33T Ju1c3 Sindicate */}
      <TitleContainer>
        <Title>B33T Ju1c3 Sindicate</Title>
        <Button>Contact For Booking/Pricing</Button>
      </TitleContainer>
      <Container>
        <TextBox></TextBox>
        <BeetJuiceText>
          <h5>
            Beet Juice (written as B33T JUIC3), is a two-man project founded by
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
      </Container>
    </>
  );
};

export default Pricing;
