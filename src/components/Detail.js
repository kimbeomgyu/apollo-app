import React from "react";
import styled from "styled-components";
import image from "../assets/slider.jpg";

const Background = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  height: fit-content;
`;

const Main = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

const Description = styled.p`
  opacity: 0.9;
  text-align: left;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 28px;
  padding-bottom: 1em;
`;

const TextContainer = styled.div`
  flex-direction: column;
  padding: 1em;
  color: #fff;
  background-color: #00000005;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default function Detail({
  title,
  description_intro,
  medium_cover_image,
}) {
  return (
    <Container>
      <Background src={image} alt="background" />
      <Main>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description_intro}</Description>
        </TextContainer>
        <img src={medium_cover_image} alt={title} />
      </Main>
    </Container>
  );
}
