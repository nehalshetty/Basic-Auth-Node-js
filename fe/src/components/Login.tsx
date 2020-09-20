import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="form">
        <div className="field">
          <input
            type="email"
            name="email"
            className="field__input"
            placeholder="Email"
          />
          <label htmlFor="email" className="field__label">
            Email
          </label>
        </div>

        <div className="field">
          <input
            type="password"
            name="password"
            className="field__input"
            placeholder="Password"
          />
          <label htmlFor="password" className="field__label">
            Password
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
