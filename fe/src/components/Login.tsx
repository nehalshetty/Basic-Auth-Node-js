import axios from "axios";
import React, { FormEventHandler, useState } from "react";
import "./Login.css";

const Login = () => {
  const [user, setUser]: any = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    let { email, password } = user;
    try {
      let userResult = await axios.post("http://localhost:4000/api/login", {
        email,
        password,
      });
      console.log(userResult);
    } catch (er) {
      console.log(er);
    }
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let newUser: { [key: string]: string } = { ...user };

    newUser[ev.target.name] = ev.target.value;

    setUser(newUser);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            className="field__input"
            placeholder=" "
          />
          <label htmlFor="email" className="field__label">
            Email
          </label>
        </div>

        <div className="field">
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            className="field__input"
            placeholder=" "
          />
          <label htmlFor="password" className="field__label">
            Password
          </label>
        </div>

        <button className="form__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
