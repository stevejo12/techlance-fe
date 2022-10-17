import React from "react";
import Logo from "../../assets/techlance-logo.jpg";
import './Signup.scss';

const Signup = () => {
  const handleSignup = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const payload = Object.fromEntries(data.entries());

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
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup