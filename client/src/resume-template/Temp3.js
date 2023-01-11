import React from "react";

const Temp3 = () => {
  return (
    <div className="Template2-container">
      {
        //Information
      }
      <div className="temp2-info">
        <h2>
          <span className="fname">PAULA</span> <span>WILSON</span>
        </h2>
        <p>Junior Data Analyst</p>
        <p>
          <span className="temp20address">123 Anywhere St., Any City</span>|
          <span className="temp2-phone">+123-456-7890</span>|
          <span className="temp2-email">hello@reallygreatsite.com</span>
        </p>
      </div>
      <hr className="line" />

      {
        //professional-summary
      }
      <div className="temp2-summary">
        <p className="temp2-haeding">PROFESSIONAL SUMMARY</p>
        <p className="summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          molestie orci ac nulla dapibus, eget suscipit felis porta. Suspendisse
          fringilla et libero nec commodo. In hac habitasse platea dictumst. Ut
          dictum faucibus urna id varius. Fusce ac felis ut diam elementum
          bibendum ac eu arcu. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
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
            <span className="skill">your skill here</span>{" "}
            <span className="skill">your skill here</span>
            <span className="skill">your skill here</span>{" "}
            <span className="skill">your skill here</span>
          </div>
        </div>
        <div className="temp-2-tech-skill">
          <p className="temp2-haeding">TECHNICAL SKILL</p>

          <div className="all-tech-skill">
            <span className="skill">your skill here</span>{" "}
            <span className="skill">your skill here</span>
            <span className="skill">your skill here</span>{" "}
            <span className="skill">your skill here</span>
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
              <span>2000 - 2000</span>
            </div>
            <div className="education-details">
              <p>University Name, Any City</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie orci ac nulla dapibus, eget suscipit felis porta.
            </p>
          </div>
          <div className="temp2-education1">
            <div className="temp2-education-details ">
              <h3>Educational Qualification/ Degree, Major</h3>
              <span>2000 - 2000</span>
            </div>
            <div className="education-details">
              <p>University Name, Any City</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie orci ac nulla dapibus, eget suscipit felis porta.
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
  <h3>Company Name, Any City</h3>
  <span>Month, Year - Month, Year</span>
</div>

<div className="temp2-exp-details">
<p>Company Name, Any City</p>
</div>

<div className="temp2-exp-points">
<ul>
<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
<li> Praesent molestie orci ac nulla dapibus, eget suscipit felis porta.</li>
<li>Suspendisse fringilla et libero nec commodo. In hac habitasse platea dictumst.</li>

</ul>

</div>
  </div>
<br/>

  <div className="temp2-exp1">
  
  <div className="temp2-exp-details ">
  <h3>Company Name, Any City</h3>
  <span>Month, Year - Month, Year</span>
</div>

<div className="temp2-exp-details">
<p>Company Name, Any City</p>
</div>

<div className="temp2-exp-points">
<ul>
<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
<li> Praesent molestie orci ac nulla dapibus, eget suscipit felis porta.</li>
<li>Suspendisse fringilla et libero nec commodo. In hac habitasse platea dictumst.</li>

</ul>

</div>
  </div>

    </div>
    </div>
  );
};

export default Temp3;