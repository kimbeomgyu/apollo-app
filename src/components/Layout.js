import React from "react";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>
  );
}
