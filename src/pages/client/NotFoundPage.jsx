import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Not found</h2>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default NotFoundPage;
