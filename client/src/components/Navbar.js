import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {HiMenu} from "react-icons/hi"

const Navbar = () => {
    const navigate = useNavigate()
    const [mobile, setMobile] = useState(false)
  return (
    <div className='navbar'>
        <div className="row container_fluid">
            <div className="col">
                <h2><Link to={'/'}>ResumeBuildIn.Com</Link></h2>
            </div>
            <div className="col row">
                <ul className={ mobile ? "show_menu" : "hide_menu" } onClick={()=>setMobile(false)}>
                    <li><Link to={'/resume'}>Resume</Link></li>
                    <li><Link>Cover Letter</Link></li>
                    <li><Link>Resume Guids</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
                <span className="button">
                    <button onClick={()=>navigate('/login')}>Login</button>
                    <button onClick={()=>navigate('/signup')}>Sign Up</button>
                </span>
                <span className='menu_icon'>
                    <HiMenu onClick={()=>setMobile(!mobile)} />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar