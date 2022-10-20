import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Logo from "../../assets/techlance-logo.jpg";

import "./Header.scss";

const Header = () => {
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
          <Typography>log in</Typography>
          <Typography>sign up</Typography>
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
