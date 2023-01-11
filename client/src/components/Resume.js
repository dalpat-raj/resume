import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
    const navigate = useNavigate()
    const [Temp_Data, setTemp_Data] = useState([])
    const TempImg = [
        {
            img: "./images/T1.jpg",
            id: 1
        },
        {
            img: "./images/T2.jpg",
            id: 2
        },
        {
            img: "./images/T3.jpg",
            id: 3
        },
        {
            img: "./images/T4.jpg",
            id: 4
        },
        {
            img: "./images/T5.jpg",
            id: 5
        },
        {
            img: "./images/T6.jpg",
            id: 6
        },
    ]
    useEffect(()=>{
        setTemp_Data(TempImg)
    },[])
    
  return (
    <div className='resume'>
        <div className="heading">
            <h2>Choose Template</h2>
        </div>
        <div className="template container_fluid row">
            {
                TempImg.map(item => {
                   return ( 
                        <div className="col" key={item.id}>
                           <img src={item.img} alt="" />
                           <button className='btn' onClick={()=>{
                               navigate(`/editor/${item.id}`)
                           }}>use template</button>
                       </div> 
                   )
                })
            }
        </div>
    </div>
  )
}

export default Resume