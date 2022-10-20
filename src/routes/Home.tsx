import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <h1>This is Home Page</h1>
      <Link to="signup">Signup</Link>
      {"||"}
      <Link to="login">Login</Link>
    </>
  );
};

export default Home;
