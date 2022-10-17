import React, { useState } from "react";
import Logo from "../../assets/techlance-logo.jpg";
import './Signup.scss';

const Signup = () => {
  const handleSignup = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const payload = Object.fromEntries(data.entries());

    // check if the 
    if (data.has("agreement")) {
      console.log("it is checked")
    } else {
      console.log("it is not checked")
    }

    console.log("payload: ", JSON.stringify(payload));
  }

  return (
    <div className="signup__page">
      <div className='signup__container'>
        <div className="signup__headerContainer">
          <img src={Logo} alt="company-logo" />
          <h2 className="signup__title">Sign up</h2>
        </div>
        <form onSubmit={handleSignup} className="signup__inputContainer">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <div className="signup__agreement-container">
            <input type="checkbox" name="agreement" id="agreement" />
            <label>I agree to the TechLance User Agreement and Privacy Policy.</label>
          </div>
          <button type="submit">Sign up</button>
        </form>
        <hr className="signup__hr" />
        <div className="signup__login">
          Already have an account? 
          {" "}
          <a href="#!">Log in</a>
        </div>
      </div>
    </div>
  )
}

export default Signup