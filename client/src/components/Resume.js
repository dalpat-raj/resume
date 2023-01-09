import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import t1 from "../assets/template/t1.png"

const Resume = () => {
    const [param, setParam] = useState()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    
  return (
    <div className='resume'>
        <div className="heading container_fluid">
            <h2>Choose Template</h2>
        </div>
        <div className="template row">
            <div className="col">
                <img src={t1} alt="" />
                <button onClick={()=>{
                    navigate(`/editor/${"id123"}`)
                }}>use template</button>
            </div>
        </div>
    </div>
  )
}

export default Resume