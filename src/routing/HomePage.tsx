import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const HomePage = () => {

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      <Link to="/users">users</Link>
    </>
  );
};

export default HomePage;
