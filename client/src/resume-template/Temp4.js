import React from "react";

const Temp4 = (props) => {
  const {data, All_Heading} = props;

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
  } = data;
  

  return (
    <div className="template3-container">
      <div className="temp3-main-inner">
        <div className="temp3-info">
          <h2>{firstname} {lastname}</h2>
          <p>{currenProfession}</p>
        </div>
        {
          //row-1
        }
        <div className="temp3-row-1">
          <div className="temp3-col-1">
            <div className="temp3-heading">
            </div>
            <div className="temp3-contact-details">
              <p className="temp3-mobile">{phone}</p>
              <p className="temp3-gmail">{email}</p>
              <p className="temp3-web">{website}</p>
            </div>
          </div>
          <div className="temp3-col-2">
            <div className="temp3-heading">
              <h4 ref={href} className="h4">SUMMARY</h4>
            </div>
            <div className="temp3-summary-details">
              <p className="temp3-summary-ph">
                {summary}{" "}
              </p>
            </div>
          </div>
        </div>

        <br />

        {
          // row-2
        }

        <div className="temp3-row-2">
          <div className="temp3-row2-col-1">
            <div className="temp3-row-2-education">
              <div className="temp3-heading">
                <h4 ref={href} className="h4">EDUCATION</h4>
              </div>
              <p className="temp3-sub-heading">{qualification1}</p>
              <p className="temp3-sub-inner-heading">{college}</p>
              <p className="temp-3-edu-time">{fromyear1} - {toyear1}</p>

              <br />

              <p className="temp3-sub-heading">{qualification2}</p>
              <p className="temp3-sub-inner-heading">{school}</p>
              <p className="temp-3-edu-time">{fromyear2} - {toyear2}</p>
            </div>
            <br />
            <div className="temp3-row-2-skills">
              <div className="temp3-heading">
                <h4 className="h4">SKILLS</h4>
              </div>
              <div className="temp3-all-skill">
                <p>{skill1}</p>

                <p>{skill2}</p>
                <p>{skill3}</p>
                <p>{skill4}</p>
              </div>
            </div>

            <br />

            <div className="temp3-row-2-reference">
              <div className="temp3-heading">
                <h4 className="h4">REFERENCE</h4>
              </div>
              <div>
                <p>{reference}</p>
              </div>
            </div>
          </div>

          <div className="temp3-row2-col-2">
            <div className="temp3-row2-workexp">
              <div className="temp3-heading">
                <h4 className="h4">WORK-EXPERIENCE</h4>
              </div>
              <p className="temp3-exp-subheading">{position1}</p> <br />
              <p className="temp3-exp-company-name">{institute1}</p>
              <p className="temp3-exp-time">{duration1}</p>
              <p className="temp3-exp-details">
                <li>{experienceDescription1}</li>
              </p>
            </div>

            <div className="temp3-row2-workexp">
              <p className="temp3-exp-subheading">{position2}</p> <br />
              <p className="temp3-exp-company-name">{institute2}</p>
              <p className="temp3-exp-time">{duration2}</p>
              <p className="temp3-exp-details">
                <li>{experienceDescription2}</li>
              </p>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp4;