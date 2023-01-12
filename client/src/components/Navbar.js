import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  return (
    <div className="navbar animate__animated animate__backInDown">
      <div className="row container_fluid">
        <div className="col">
          <h2>
            <Link to={"/"}>ResumeBuildIn.Com</Link>
          </h2>
        </div>
        <div className="col row">
          <ul
            className={mobile ? "show_menu" : "hide_menu"}
            onClick={() => setMobile(false)}
          >
            <li>
              <NavLink to={"/resume"}>Resume</NavLink>
            </li>
            <li>
              <NavLink>Cover Letter</NavLink>
            </li>
            <li>
              <NavLink>Resume Guids</NavLink>
            </li>
            <li>
              <NavLink>Blog</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
          <span className="button">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </span>
          <span className="menu_icon">
            <HiMenu onClick={() => setMobile(!mobile)} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
