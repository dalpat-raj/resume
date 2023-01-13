import React from 'react'
import {RxInstagramLogo} from "react-icons/rx"
import {FaLinkedinIn} from "react-icons/fa"
import {FaPinterestP} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col icon">
                <h4>Connect with us<br></br> on social media</h4>
                <ul>
                    <li className='insta'><RxInstagramLogo/></li>
                    <li className='linked'><FaLinkedinIn/></li>
                    <li pint><FaPinterestP/></li>
                    <li whats><FaWhatsapp/></li>
                    <li className='faceb'><FaFacebookF/></li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li className='head'>JOB SEEKERS</li>
                    <li>Create a Resume</li>
                    <li>Resume Examples</li>
                    <li>Resume Templates</li>
                    <li>Cover Templates</li>
                    <li>Job Search</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li className='head'>CAREER RESOURCES</li>
                    <li>Resume Help</li>
                    <li>Job Interview</li>
                    <li>Career</li>
                    <li>Cover Letter</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li className='head'>OUR COMPANY</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Product Updates</li>
                    <li>Sponsorship Program</li>
                    <li>Media Kit</li>
                    <li>Affiliates</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li className='head'>SUPPORT</li>
                    <li>CONTACT Us</li>
                    <li>Terms of Service</li>
                    <li>Privacy</li>
                    <li>Right of Withdrawal Letter</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer