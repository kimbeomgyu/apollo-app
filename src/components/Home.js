import React from "react";
import styled from "styled-components";
import image from "../assets/slider.jpg";

export const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 100%;
  text-align: center;
  background-color: #000;
`;

export const Title = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
`;

export const Background = styled.img`
  width: 100%;
  display: block;
`;

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
      <Figure>
        <Background src={image} alt="background" />
        <Title>I love GraphQL</Title>
      </Figure>
      <Container>
        <Wrap>{children}</Wrap>
      </Container>
    </>
  );
}
