import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Logo from "../../assets/techlance-logo.jpg";
import HorizontalRuleWithText from "../../components/HorizontalRuleWithText/HorizontalRuleWithText";
import "./Login.scss";
import { IUserData, IUserDataErrorMessage } from "../../types/user.type";
import { validateEntry, validateIsEmptyString } from "../../helpers/validation";
import axios from "../../axios";

const Login = () => {
  const [formData, setFormData] = useState<IUserData>({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<IUserDataErrorMessage>({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

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

  const handleLogin = (event) => {
    event.preventDefault();

    // make sure every required field have been filled.
    setErrorMessage(validateEntry(formData));
    const isEmpty = Object.values(errorMessage).every((x) => x === "");

    if (isEmpty) {
      // TO DO: CHECK IF LOGIN WORKS
      // (SHOULD BE WORKING)
      axios
        .post("/user/login", formData)
        .then((res: any) => {
          if (res.data) {
            const token = res.data.data.token || "";

            if (token) {
              localStorage.setItem("tl-token", token);
              navigate("/");
            }
          }
        })
        .catch((err: Error) => {
          console.error("err: ", err);
        });
    } else {
      console.log("Some or All Data are not filled");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("tl-token")) {
      navigate("/");
    }
  }, [])

  return (
    <div className="login__page">
      <div className="login__container">
        <div className="login__headerContainer">
          <a href="/">
            <img src={Logo} alt="company-logo" />
          </a>
          <h2 className="login__title">Login</h2>
        </div>
        <div className="login__horizontalRuleWithText--container">
          <HorizontalRuleWithText text="OR" />
        </div>
        <form onSubmit={handleLogin} className="login__formContainer">
          <div className="login__input-container">
            <TextField
              className={`login__input-field ${
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
              <div className="login__error-container">
                <ReportProblemIcon />
                <span className="login__error-message">
                  {errorMessage.email}
                </span>
              </div>
            )}
          </div>
          <div className="login__input-container">
            <TextField
              className={`login__input-field password ${
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
                className="login__inputVisibleIcon"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <VisibilityOffIcon
                className="login__inputVisibleIcon"
                onClick={() => setShowPassword(true)}
              />
            )}
            {errorMessage.password && (
              <div className="login__error-container">
                <ReportProblemIcon />
                <span className="login__error-message">
                  {errorMessage.password}
                </span>
              </div>
            )}
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
        <hr className="login__hr" />
        <div className="login__login">
          Doesn't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
