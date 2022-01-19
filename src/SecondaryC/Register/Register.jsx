import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Navbar } from "../../Navbar";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reenterpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reenterpassword } = user;
    if (name && email && password && password === reenterpassword) {
      // alert("posted");
      axios
        .post("https://backendhackathon.herokuapp.com/register", user)
        //.then cz promiss based response
        .then((res) => alert(res.data.message));
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <Navbar />
      <div className="register">
        {console.log("User", user)}
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder=" Your Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder=" Your email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter Your password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="reenterpassword"
          value={user.reenterpassword}
          placeholder="Re-enter Your password"
          onChange={handleChange}
        />
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/login")}>
          Login
        </div>
      </div>
    </>
  );
};

export default Register;
