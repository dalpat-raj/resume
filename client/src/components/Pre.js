import React, { useState } from 'react'
import Temp1 from "../resume-template/Temp1";
import Temp2 from "../resume-template/Temp2";
import Temp3 from "../resume-template/Temp3";
import Temp4 from "../resume-template/Temp4";
import Temp5 from "../resume-template/Temp5";
import Temp6 from "../resume-template/Temp6";

const Pre = (props) => {
  const {template_Id, data} = props;
  const [temp_Id, setTemp_Id] = useState(JSON.parse(template_Id))

  switch (temp_Id) {
    case 1:
      return <Temp1 data={data} />
    case 2:
      return <Temp2 data={data} />
    case 3:
      return <Temp3 data={data} />
    case 4:
      return <Temp4 data={data} />
    case 5:
      return <Temp5 data={data} />
    case 6:
      return <Temp6 data={data} />
      
    default:
      break;
  }
 
}

export default Pre