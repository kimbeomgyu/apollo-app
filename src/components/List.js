import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: 250px;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function List({ children }) {
  return (
    <Container>
      <Wrap>{children}</Wrap>
    </Container>
  );
}
