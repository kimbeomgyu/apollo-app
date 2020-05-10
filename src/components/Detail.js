import React from "react";
import styled from "styled-components";
import Background from "./Background";
import Movie from "./Movie";
import List from "./List";

const Card = styled.div`
  width: 840px;
  height: 420px;
  background: transparent;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
`;

const CardLeft = styled.div`
  width: 40%;
  height: 420px;
  float: left;
  overflow: hidden;
  background: transparent;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 0 0 10px;
  position: relative;
`;

const CardRight = styled.div`
  width: 60%;
  float: left;
  background: #34314c;
  height: 420px;
  border-radius: 0 10px 10px 0;
`;
const Title = styled.h1`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: left;
  font-size: 40px;
  margin: 30px 0 0 0;
  padding: 0 0 0 40px;
  letter-spacing: 1px;
`;

const Subtitle = styled.h4`
  color: white;
  opacity: 0.9;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: left;
  font-size: 20px;
  margin: 30px 0 0 0;
  padding: 0 0 0 40px;
  letter-spacing: 1px;
`;

const Description = styled.p`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  padding: 0 40px 0 40px;
  letter-spacing: 1px;
  margin: 10px 0 10px 0;
  line-height: 20px;
`;

export default function Detail({ loading, data }) {
  return (
    <>
      <Background />
      {loading ? (
        "loading"
      ) : (
        <Card>
          <CardLeft>
            <CardImage
              src={data?.movie?.medium_cover_image}
              alt={data?.movie?.title}
            />
          </CardLeft>
          <CardRight>
            <>
              <Title>{data?.movie?.title}</Title>
              <Subtitle>
                {data?.movie?.language} {data?.movie?.rating}
              </Subtitle>
              <Description>{data?.movie?.description_intro}</Description>
            </>
          </CardRight>
        </Card>
      )}
      <List>
        {!loading &&
          data?.suggestions?.map((m) => <Movie key={m.title} {...m} />)}
      </List>
    </>
  );
}
