import React from "react";
import styled from "styled-components";
import Background from "./Background";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: -100px;
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

export default function Home({ children }) {
  return (
    <>
      <Background />
      <Container>
        <Wrap>{children}</Wrap>
      </Container>
    </>
  );
}
