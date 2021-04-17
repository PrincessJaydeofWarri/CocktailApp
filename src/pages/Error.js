import React from "react";
import { Link } from "react-router-dom";
import drunk from "../images/drunk.png";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <div className="error-icon">
          <img src={drunk} alt="drunk emoji" className="icon" />
        </div>
        <h3>
          Oh Dear... Looks like this page might be hiding out in quarantine? Or
          maybe you have had too many cocktails and this page doesnt exist?{" "}
        </h3>
        <Link to="/" className="btn-primary">
          Lets get you home!
        </Link>
      </div>
    </section>
  );
};

export default Error;
