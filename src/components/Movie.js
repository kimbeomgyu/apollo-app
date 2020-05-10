import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1em 0.5em;
  width: 150px;
  text-align: center;
`;

const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 100%;
  text-align: center;
  background-color: #34314c;
`;

const MovieTitle = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1em;
  color: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const MovieImage = styled.img`
  display: block;
  position: relative;
  width: 100%;
  min-height: 100%;
  opacity: 0.8;
  transform: scale(1.15);
  transition: opacity 0.35s, transform 0.35s;

  &:hover {
    opacity: 0.5;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export default ({ id, medium_cover_image, title }) =>
  id ? (
    <Link to={`/${id}`}>
      <Grid>
        <Figure>
          <MovieImage src={medium_cover_image} alt={title} />
          <MovieTitle>{title}</MovieTitle>
        </Figure>
      </Grid>
    </Link>
  ) : (
    <Link style={{ cursor: "default" }} children={<Grid />} />
  );
