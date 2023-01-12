import React, { useState } from "react";
import banner2 from "../assets/banner2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const getData = () => {
    console.log(email, pass);
  };

  return (
    <div className="sign_up">
      <div className="container row">
        <div className="col-1">
          <img
            className="animate__animated animate__fadeInUp"
            src={banner2}
            alt=""
          />
        </div>
        <div className="col-2">
          <div className="heading">
            <h2>Log In</h2>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button className="heading" onClick={() => getData()}>
              Login
            </button>
          </div>
          <div className="heading">
            <button>Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
