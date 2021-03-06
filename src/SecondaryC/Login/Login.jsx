import React, { useState } from "react";
import "./Login.css";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../../Navbar";
const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("https://backendhackathon.herokuapp.com/login", user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        history.push("/");
      });
  };

  return (
    <>
      <Navbar />
      <div className="login">
        {console.log(user, user)}
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter Your password"
          onChange={handleChange}
        />
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/register")}>
          Register
        </div>
      </div>
    </>
  );
};

export default Login;
