import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import banner1 from "../assets/banner1.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header container_fluid">
      <div className="row">
        <div className="col animate__animated animate__lightSpeedInLeft">
          <p className="">FREE RESUME MAKER AND CV BUILDER ONLINE</p>
          <h2>Create Professional Resume In Just Minutes</h2>
          <small>
            Create your resume easily with our free builder and professional
            templates and Build your brand-new resume in as little as 5 minutes
          </small>
          <h5>Try For Free</h5>
          <span>
            <button onClick={() => navigate("/resume")}>Create Resume</button>
            <FaArrowRight />
          </span>
        </div>
        <div className="col">
          <img
            className="animate__animated animate__lightSpeedInRight"
            src={banner1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
