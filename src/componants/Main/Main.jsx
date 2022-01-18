import index from "./index.css";

import React from "react";

function Main() {
  const handlelogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="main_container">
      <nav className="navbar">
        <h1>Book MY Show</h1>
        <button onClick={handlelogout}>Log Out</button>
      </nav>
    </div>
  );
}

export default Main;
