import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Layout from "../components/Layout";
import Movie from "./Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Layout>
      {loading
        ? "loading"
        : data &&
          data.movies &&
          data.movies.map((m) => <Movie key={m.title} {...m} />)}
    </Layout>
  );
};
