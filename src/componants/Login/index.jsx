import index from "./index.css";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navbar } from "../../Navbar";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "mongodb+srv://aniket:aniket123@cluster0.5h10b.mongodb.net";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
      <div className="login_container">
        <div className="login_form_container">
          <div className="left">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>Log In to Your Account</h1>

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
              <button type="submit" className="btn btn primary">
                Sign in
              </button>
            </form>
          </div>
          <div className="right">
            <h1>Welcome to Book My show</h1>
            <Link to="/Signup">
              <button type="button" className="login btn btn-success">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
