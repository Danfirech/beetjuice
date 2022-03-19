import React from "react";
import styled from "styled-components";
import pic from "../media/beetjuicetestpic2.jpeg";
import Image from "next/image";

const Container = styled.div`
  display: none;
  @media (max-width: 1168px) {
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: red;
  }
`;

const MobilePhoto = () => {
  return <Container></Container>;
};

export default MobilePhoto;
