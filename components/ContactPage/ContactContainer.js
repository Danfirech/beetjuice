import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #e5e4e2;
`;

const ContactForm = styled.div`
  height: 200px;
  width: 100px;
  background-color: pink;
`;

const Contact = () => {
  return (
    <>
      <Container>
        <ContactForm></ContactForm>
      </Container>
    </>
  );
};

export default Contact;
