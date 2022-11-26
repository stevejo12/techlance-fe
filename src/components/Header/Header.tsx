import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Logo from "../../assets/techlance-logo.jpg";

import "./Header.scss";

// less than 755px => go hamburger

const Header = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("tl-token");
    setToken("");
  };

  useEffect(() => {
    if (localStorage.getItem("tl-token")) {
      setToken(localStorage.getItem("tl-token") || "");
    }
  }, []);

  return (
    <div className="header__wrapper">
      {/* logo left */}
      <div className="header__logo-container">
        <img className="header__logo" src={Logo} alt="techlance-logo" />
      </div>
      {/* middle part flex 1 */}
      <div className="header__menu">
        <Box className="header__menu-container">
          <Typography>schedule call</Typography>
          <Typography>Top 1%</Typography>
          <Typography>hire</Typography>
          <Typography>find work</Typography>
          <Typography>learn</Typography>
        </Box>
        <Box className="header__menu-container">
          {token ? (
            <>
              <Typography onClick={() => handleSignOut()}>sign out</Typography>
            </>
          ) : (
            <>
              <Typography onClick={() => navigate("/login")}>log in</Typography>
              <Typography onClick={() => navigate("/register")}>
                sign up
              </Typography>
            </>
          )}
        </Box>
      </div>
      {/* right part */}
      <div className="header__post">
        <Button className="btn btn-primary">Post a job</Button>
      </div>
    </div>
  );
};

export default Header;
