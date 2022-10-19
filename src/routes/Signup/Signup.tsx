import React, { useState } from "react";
import { TextField } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Logo from "../../assets/techlance-logo.jpg";
import HorizontalRuleWithText from "../../components/HorizontalRuleWithText/HorizontalRuleWithText";
import "./Signup.scss";
import { validateEntry, validateIsEmptyString } from "../../helpers/validation";

interface IForm {
  email: string;
  password: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<IForm>({
    email: "",
    password: ""
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [hasAgreed, setHasAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<IForm>({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    const errorMsg = validateIsEmptyString(
      event.target.name,
      event.target.value
    );

    setErrorMessage({
      ...errorMessage,
      [event.target.name]: errorMsg
    });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    // make sure every required field have been filled.
    setErrorMessage(validateEntry(formData));
    const isEmpty = Object.values(errorMessage).every((x) => x === "");

    if (isEmpty && hasAgreed) {
      // continue the process
      console.log("All Data are filled");
    } else {
      console.log("Some or All Data are not filled");
    }
  };

  return (
    <div className="signup__page">
      <div className="signup__container">
        <div className="signup__headerContainer">
          <a href="/">
            <img src={Logo} alt="company-logo" />
          </a>
          <h2 className="signup__title">Sign up</h2>
        </div>
        <div className="signup__horizontalRuleWithText--container">
          <HorizontalRuleWithText text="OR" />
        </div>
        <form onSubmit={handleSignup} className="signup__formContainer">
          <div className="signup__input-container">
            <TextField
              className={`signup__input-field ${
                errorMessage.email ? "error" : ""
              }`}
              type="text"
              name="email"
              id="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={errorMessage.email !== ""}
            />
            {errorMessage.email && (
              <div className="signup__error-container">
                <ReportProblemIcon />
                <span className="signup__error-message">
                  {errorMessage.email}
                </span>
              </div>
            )}
          </div>
          <div className="signup__input-container">
            <TextField
              className={`signup__input-field password ${
                errorMessage.password ? "error" : ""
              }`}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              label="Password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              error={errorMessage.password !== ""}
            />
            {showPassword ? (
              <VisibilityIcon
                className="signup__inputVisibleIcon"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <VisibilityOffIcon
                className="signup__inputVisibleIcon"
                onClick={() => setShowPassword(true)}
              />
            )}
            {errorMessage.password && (
              <div className="signup__error-container">
                <ReportProblemIcon />
                <span className="signup__error-message">
                  {errorMessage.password}
                </span>
              </div>
            )}
          </div>
          <div className="signup__agreement-container">
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(!hasAgreed)}
            />
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
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
