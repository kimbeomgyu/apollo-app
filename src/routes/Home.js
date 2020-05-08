import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "loading...";
  }

  if (data && data.movies) {
    return data.movies.map((m) => (
      <div>
        <h1>{m.id}</h1>
        <img src={m.medium_cover_image} alt={m.title} />
      </div>
    ));
  }

  if (error) {
    return "Error!!";
  }
};
