import React from 'react'
import { AiOutlineMail , AiFillLinkedin } from 'react-icons/ai/';
import {  BsFillPhoneFill } from 'react-icons/bs';
import {ImLocation2} from "react-icons/im"

const Temp6 = () => {
  return (
    <div className='temp2-container'>
    {
        //main-info
    }
    <div className='temp2-info'>
    <h2 className='temp2-name '>Jane Doe</h2>
    <h3 className='temp2-post'>Bussiness Development manager</h3>
    <p className='temp2-summary'>Professional Business Developer with more than four years of experience in the business development processes.
    Involved in product testing, management, and development of new business opportunities.
    </p>
    </div>
<hr/>

    {
        //contact-detail
    }
    <div className='temp2-contact'>
    <div className='temp2-contact-contain'>
    <p><AiOutlineMail />jane.roe@gmail.com</p>
    <p> <BsFillPhoneFill/>123456789</p>
    <p><ImLocation2/>New,York </p>
    <p><AiFillLinkedin/> Linkedin.com/in/jon.roe   </p>
    </div>
    </div>
    
    {
        //skills
    }
    <div className='temp2-skill-new'>
    <h2>SKILLS</h2> 
    <div className='temp-2-All-skill'>
    <p>SEO</p>
    <p>Public-speaking  </p>
    <p>teamwork</p>
    <p>Descicion making</p>
    <p>Sales Markteing</p>

    </div>
    </div>

    {

        //work xp
    }
    
    <div className=" temp2-work-exp">
    <h2>Work-Exprience</h2> <br/>
    <h3>Business  Officer</h3>
    <ul>
      <div className="row-flex">
        <span>Jun 2021 - Present</span>
        <span>  New Delhi , India</span>
      </div>
      
      <div className="work-exp-detail">
        <li>
          The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections
        </li>
        <li>
          Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh
          oleh isi tulisan dari{" "}
        </li>
    
      </div>
    </ul>
  </div>

  {

    //wxp
  }

  <div className="temp2-work-exp">
    <h3>Business management Officer</h3>
    <ul>
      <div className="row-flex">
        <span>Jun 2021 - Present</span>
        <span>  New Delhi , India</span>
      </div>
      
      <div className="work-exp-detail">
        <li>
          The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections
        </li>
        <li>
          Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh
          oleh isi tulisan dari{" "}
        </li>
    
      </div>
    </ul>
  </div>

  {//Education
}

<div className="Education temp2-education">
        <h3>Education</h3>
        {
          //education-1
        }
        <div>
       <ul>
      <div  className="row-flex" >
      <span>University of Washington - Seattle, WA</span>
      
      <span>Jun 2021 - Present</span>
      </div>
      
      <li className="work-exp-detail">MSc in Economics and Business Administration</li>
      </ul>
        
        </div>

        {
          //education-2
        }
        <div>
        <ul>
       <div className="row-flex">
       <span>University of Washington - Seattle, WA</span>
       <span>Jun 2021 - Present</span>
       </div>
       
       <li className="work-exp-detail">Full Professional Proficiency
       Association of Private Enterprise Education</li>
       </ul>
         
         </div>


    
        </div>


    </div>
  )
}

export default Temp6;