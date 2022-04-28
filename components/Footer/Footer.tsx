import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <div>Opensource project maintained by rk-dev</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: var(--chakra-colors-gray-100);
`;
