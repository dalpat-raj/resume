import React from "react";

const Temp3 = (props) => {

  const {
    // Profile-Information
    firstname,
    lastname,
    currenProfession,
    email,
    phone,
    address,
    website,
    github,
    linkedin,
    twitter,
    facebook,
    instagram,

    // Education Information
    college,
    fromyear1,
    toyear1,
    qualification1,
    description1,
    school,
    fromyear2,
    toyear2,
    qualification2,
    description2,

    // Project Information...
    title1,
    link1,
    projectDescription1,
    title2,
    link2,
    projectDescription2,
    title3,
    link3,
    projectDescription3,

    // Experience Information
    institute1,
    position1,
    duration1,
    experienceDescription1,
    institute2,
    position2,
    duration2,
    experienceDescription2,

    // skill hobby Information
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    interest1,
    interest2,
    interest3,
    interest4,
    interest5,
    interest6,

    // summary
    summary,
    reference,
  } = props.data;


  return (
    <div className="Template2-container">
      {
        //Information
      }
      <div className="temp2-info">
        <h2>
          <span className="fname">{firstname}</span> <span>{lastname}</span>
        </h2>
        <p>{currenProfession}</p>
        <p>
          <span className="temp20address">{address}</span> |&nbsp;
          <span className="temp2-phone">{phone}</span> |&nbsp;
          <span className="temp2-email">{email}</span>
        </p>
      </div>
      <hr className="line" />

      {
        //professional-summary
      }
      <div className="temp2-summary">
        <p className="temp2-haeding">PROFESSIONAL SUMMARY</p>
        <p className="summary">
          {/* {summary} */}
        </p>
      </div>
      <hr />

      {
        //skill
      }

      <div className="temp2-skill">
        <div className="temp-2-pro-skill">
          <p className="temp2-haeding">PROFESSIONAL SKILL</p>

          <div className="all-pro-skill">
            <span className="skill">{skill1}</span>{" "}
            <span className="skill">{skill2}</span>
            <span className="skill">{skill3}</span>{" "}
          </div>
        </div>
        <div className="temp-2-tech-skill">
          <p className="temp2-haeding">TECHNICAL SKILL</p>

          <div className="all-tech-skill">
            <span className="skill">{skill4}</span>{" "}
            <span className="skill">{skill5}</span>
            <span className="skill">{skill6}</span>{" "}
          </div>
        </div>
      </div>
      <hr />
      {
        //Education
      }
      <div className="temp2-education">
        <p className="temp2-haeding">EDUCATION</p>
        <div className="temp2-inner-education">
          <div className="temp2-education1">
            <div className="temp2-education-details ">
              <h3>Educational Qualification/ Degree, Major</h3>
              <span>{fromyear1} - {toyear1}</span>
            </div>
            <div className="education-details">
              <p>{college}</p>
            </div>
            <p>
              {description1}
            </p>
          </div>
          <div className="temp2-education1">
            <div className="temp2-education-details ">
              <h3>Educational Qualification/ Degree, Major</h3>
              <span>{fromyear2} - {toyear2}</span>
            </div>
            <div className="education-details">
              <p>{school}</p>
            </div>
            <p>
              {description2}
            </p>
          </div>
        </div>
      </div>
 <hr/>

      {

        //work-exprienece
      }

    <div className="temp2-work-exp">
    <p className="temp2-haeding">WORK-EXPRIENCE</p>
  <div className="temp2-exp1">
  
  <div className="temp2-exp-details ">
  <h3>{institute1}</h3>
  <span>{duration1}</span>
</div>
<div className="temp2-exp-details">
<p>{position1}</p>
</div>

<div className="temp2-exp-points">
<ul>
<li>{experienceDescription1}</li>
</ul>

</div>
  </div>
<br/>

  <div className="temp2-exp1">
  
  <div className="temp2-exp-details ">
  <h3>{institute2}</h3>
  <span>{duration2}</span>
</div>

<div className="temp2-exp-points">
<ul>


</ul>

</div>
  </div>

    </div>
    </div>
  );
};

export default Temp3;