import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../media/web logo (1).png';

const Container = styled.div`
  background-color: black;
  color: white;
`;

const Header = () => {
  return (
    <Container>
      <Image src={logo} />
      it looks bad i know i am going to fix it
    </Container>
  );
};

export default Header;
