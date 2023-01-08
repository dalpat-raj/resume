import React, { useEffect, useState } from 'react';
import template from "./Template.json";

const Resume = () => {
    const [temp, setTemp] = useState("")
    const [data, setData] = useState("")

    useEffect(()=>{
        let result = JSON.stringify(template)
        setTemp(JSON.parse(result));
        setData(temp.template);
    },[])
    console.log(Object.values(data));
  return (
    <div className='resume'>
        <div className="heading container_fluid">
            <h2>Choose Template</h2>
        </div>
        <div className="template">
            {
                
            }
        </div>
    </div>
  )
}

export default Resume