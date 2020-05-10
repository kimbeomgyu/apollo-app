import React from "react";
import styled from "styled-components";

const BaseImage = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 100%;
  height: ${window.innerHeight / 2 + "px"};
  text-align: center;
  background: rgb(131, 58, 180);
  background: linear-gradient(90deg, #ff7473, #ffc952, #47b8e0);
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
`;

export default function Background() {
  return (
    <BaseImage>
      <Title>I love GraphQL</Title>
    </BaseImage>
  );
}
