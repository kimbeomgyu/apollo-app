import React from "react";
import { Link } from "react-router-dom";

export default ({ id, medium_cover_image, title }) => (
  <Link to={`/${id}`} children={<img src={medium_cover_image} alt={title} />} />
);
