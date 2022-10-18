import React from "react";
import { TextField } from "@mui/material";
import Logo from "../../assets/techlance-logo.jpg";
import HorizontalRuleWithText from "../../components/HorizontalRuleWithText/HorizontalRuleWithText";
import "./Signup.scss";

const Signup = () => {
  const handleSignup = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const payload = Object.fromEntries(data.entries());

    // check if every value is either not null/undefined or empty string
    const isEmpty = Object.values(payload).every(
      (x) => x === "" || x === null || x === undefined
    );

    // check if the
    if (data.has("agreement")) {
      console.log("it is checked");
    } else {
      console.log("it is not checked");
    }

    if (!isEmpty) {
      // continue the process
    } else {
    }

    console.log(payload);

    console.log("payload: ", JSON.stringify(payload));
  };

  return (
    <div className="signup__page">
      <div className="signup__container">
        <div className="signup__headerContainer">
          <abbr title="TechLance">
            <img src={Logo} alt="company-logo" />
          </abbr>
          <h2 className="signup__title">Sign up</h2>
        </div>
        <div className="signup__horizontalRuleWithText--container">
          <HorizontalRuleWithText text="OR" />
        </div>
        <form onSubmit={handleSignup} className="signup__inputContainer">
          <TextField
            type="text"
            name="email"
            id="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            type="password"
            name="password"
            id="password"
            label="Password"
            variant="outlined"
          />
          <div className="signup__agreement-container">
            <input type="checkbox" name="agreement" id="agreement" />
            <label>
              I agree to the TechLance{" "}
              <a href="#!" className="underline">
                User Agreement
              </a>
              {" and "}
              <a href="#!" className="underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </form>
        <hr className="signup__hr" />
        <div className="signup__login">
          Already have an account? <a href="#!">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
