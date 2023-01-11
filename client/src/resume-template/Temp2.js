import React from "react";

const Temp2 = (props) => {

  const {
    // Profile-Information
    firstname,
    lastname,
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
  } = props.data;


  return (
    <div className="Template1-container">
      {
        // information
      }
      <div className="name-info">
        <h2>{firstname} {lastname}</h2>
        <span>{address}</span> | <span>{email}</span> | {phone}
        <span>{website}</span>
      </div>

      {
        // techincal skill
      }

      <div className="Tech-skill">
        <h2 className="heading">TECHNICAL SKILL</h2>
        <div className="inner-tech-skill">
          <ul>
            <li>{skill1}</li>
            <li>{skill2}</li>
            <li>{skill3}</li>
            <li>{skill4}</li>
            <li>{skill5}</li>
            <li>{skill6}</li>
          </ul>
        </div>
      </div>

      {
        //PROJECT
      }

      <div className="project">
        <h2 className="heading">PROJECT</h2>
        <div className="inner-project">
          <h4 className="project-name">
            {title1 } | <span>{link1}</span>
          </h4>
          <ul className="project-details">
            <li>{projectDescription1}</li>
          </ul>
        </div>

        <div className="inner-project">
          <h4 className="project-name">
            {title2} | <span>{link2}</span>
          </h4>
          <ul className="project-details">
          <li>{projectDescription2}</li>
          </ul>
        </div>
      </div>

      {
        //education
      }

      <div className="education">
        <h2 className="heading">EDUCATION</h2>
        <div className="temp1-inner-education">
          <div>
            <div className="college-container">
              <h4 className="college-name">
                {college}
              </h4>{" "}
              <span>{fromyear1} to {toyear1}</span>
            </div>
          </div>
          <ul className="education-details">
            <li>{qualification1}</li>
            <li>{description1}</li>
          </ul>
        </div>

        <div className="temp1-inner-education">
          <div>
            <div className="college-container">
              <h4 className="college-name">
                {school}
              </h4>{" "}
              <span>{fromyear2} to {toyear2}</span>
            </div>
          </div>
          <ul className="education-details">
            <li>{qualification2}</li>
            <li>{description2}</li>
          </ul>
        </div>
      </div>

      {
        //work-exprience
      }
      <div>
        <h2 className="heading">WORK-EXPRIENCE</h2>

        <div className="inner-workexp">
          <div className="workexp-container">
            <h4 className="company-name">{institute1}</h4>{" "}
            <span>{duration1}</span>
          </div>

          <ul className="education-details">
            <li>{position1}</li>
            <li>
              {experienceDescription1}
            </li>
          </ul>
        </div>
       
        <div className="inner-workexp">
          <div className="workexp-container">
            <h4 className="company-name">
              {institute2}
            </h4>{" "}
            <span>{duration2}</span>
          </div>

          <ul className="workexp-details">
            <li>{position2}</li>
            <li>
              {experienceDescription2}
            </li>
          </ul>
        </div>
      </div>

      {
        // award-achivement
      }

      <div>
        <h2 className="heading">AWARD & ACHIVEMENTS</h2>

        <div className="inner-award">
          <ul className="award-details">
            <li>Most Inoviatetive Employee of the yaear 2021 (LaxMark)</li>
            <li>Project Leader Dandlition (2021)</li>
            <li> Overall best New Employee ,crystaPonite(2019)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Temp2;