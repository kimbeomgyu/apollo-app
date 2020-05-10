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
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
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
