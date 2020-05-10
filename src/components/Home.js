import React from "react";
import Background from "./Background";
import List from "./List";

export default function Home({ children }) {
  return (
    <>
      <Background />
      <List children={children} />
    </>
  );
}
