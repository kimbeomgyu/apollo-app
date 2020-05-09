import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Home from "../components/Home";
import Movie from "../components/Movie";

const contentCount = 24;

const emptyList = new Array(contentCount).fill(1).map(() => <Movie />);

const GET_MOVIES = gql`
  {
    movies(limit: ${contentCount}) {
      id
      title
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Home>
      {loading
        ? "loading"
        : data &&
          data.movies &&
          data.movies.map((m) => <Movie key={m.title} {...m} />)}
      {emptyList}
    </Home>
  );
};
