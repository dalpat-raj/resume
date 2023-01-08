import React from 'react'
import {FaArrowRight} from "react-icons/fa";
import banner1 from "../assets/banner1.png"

const Header = () => {
  return (
    <div className='header'>
      <div className="container_fluid row">
        <div className="col">
          <p>FREE RESUME MAKER AND CV BUILDER ONLINE</p>
          <h2>Create Professional Resume In Just Minutes</h2>
          <small>Create your resume easily with our free builder and professional templates and Build your brand-new resume in as little as 5 minutes</small>
          <h4>Try For Free</h4>
          <span><button>Create Resume</button><FaArrowRight /></span>
        </div>
        <div className="col">
          <img src={banner1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header