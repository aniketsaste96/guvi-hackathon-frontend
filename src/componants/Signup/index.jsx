import "./style.css";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navbar } from "../../Navbar";

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const History = useHistory();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "mongodb+srv://aniket:aniket123@cluster0.5h10b.mongodb.net";
      const { data: res } = await axios.post(url, data);
      History.push("./login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left">
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className="login btn btn-success">
                Sign In
              </button>
            </Link>
          </div>
          <div className="right">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={data.firstName}
                required
                onChange={handleChange}
                className="input"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={data.lastName}
                required
                onChange={handleChange}
                className="input"
              />
              <input
                type="text"
                placeholder="email"
                name="email"
                value={data.email}
                required
                onChange={handleChange}
                className="input"
              />
              <input
                type="text"
                placeholder="password"
                name="password"
                value={data.password}
                required
                onChange={handleChange}
                className="input"
              />
              {error && <div className="green_btn">{error}</div>}
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
