import React from 'react'
import banner2 from '../assets/banner2.png'; 


const SignUp = () => {
  return (
    <div className='sign_up'>
        <div className="container row">
            <div className="col-1">
                <img src={banner2} alt="resumemaker" />
            </div>
            <div className="col-2">
                <div className="heading">
                    <h2>Sign Up</h2>
                </div>
                <div className="form">
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Password'/>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="heading">
                <button>Sign Up</button>
                </div>
                <div className="heading">
                <button>Login With Google</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp