import React from "react";
import Theater from "../../Admin/Theater";

import "./HomePage.css";
const HomePage = ({ setLoginUser }) => {
  return (
    <>
      <div className="homepage">
        <div className="button" onClick={() => setLoginUser({})}>
          LogOut
        </div>
      </div>
    </>
  );
};

export default HomePage;
