import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Temp1 from "../resume-template/Temp1";
import Temp2 from "../resume-template/Temp2";
import Temp3 from "../resume-template/Temp3";
import Temp4 from "../resume-template/Temp4";
import Temp5 from "../resume-template/Temp5";
import Temp6 from "../resume-template/Temp6";

const Pre = (props) => {

  const {template_Id, data} = props;
  const [temp_Id, setTemp_Id] = useState(JSON.parse(template_Id))

  const downloadResume=()=>{
    const input = document.getElementById('resumePreview');
    html2canvas(input).then((canvas)=>{
      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imageData, 'JPEG', 0, 0,width,height);
      pdf.save("resume.pdf");
    }).catch(function(error){
      console.log(error);
    })
  }


  switch (temp_Id) {
    case 1:
      return (
      <>
      <div id='resumePreview'>
      <Temp1 data={data} />
      </div>  
      <button className="btnn" onClick={()=>downloadResume()}>Download Resume</button>
      </>
      )
    case 2:
      return (
        <>
        <div id='resumePreview'>
        <Temp2 data={data} />
        </div>  
        <button className="btnn" onClick={()=>downloadResume()}>Download Resume</button>
        </>
        )
    case 3:
      return (
        <>
        <div id='resumePreview'>
        <Temp3 data={data} />
        </div>  
        <button className="btnn" onClick={()=>downloadResume()}>Download Resume</button>
        </>
        )
    case 4:
      return (
        <>
        <div id='resumePreview'>
        <Temp4 data={data} />
        </div>  
        <button className="btnn" onClick={()=>downloadResume()}>Download Resume</button>
        </>
        )
    case 5:
      return (
        <>
        <div id='resumePreview'>
        <Temp5 data={data} />
        </div>  
        <button className="btnn" onClick={()=>downloadResume()}>Download Resume</button>
        </>
        )
    case 6:
      return (
        <>
        <div id='resumePreview'>
        <Temp4 data={data} />
        </div>  
        <button className="btnn" onClick={()=>downloadResume()}>Download Resume</button>
        </>
        )
      
    default:
      break;
  }
 
}

export default Pre