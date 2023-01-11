import React from "react";

const Temp4 = () => {
  return (
    <div className="template3-container">
      <div className="temp3-main-inner">
        <div className="temp3-info">
          <h2>AVERY DAVIS</h2>
          <p>Digital Designer</p>
        </div>
        {
          //row-1
        }
        <div className="temp3-row-1">
          <div className="temp3-col-1">
            <div className="temp3-heading">
              <p>CONTACT</p>
            </div>
            <div className="temp3-contact-details">
              <p className="temp3-mobile">123-456-7890</p>
              <p className="temp3-gmail">hello@reallygreatsite.com</p>
              <p className="temp3-web">reallygreatsite.com</p>
            </div>
          </div>
          <div className="temp3-col-2">
            <div className="temp3-heading">
              <p>SUMMARY</p>
            </div>
            <div className="temp3-summary-details">
              <p className="temp3-summary-ph">
                A passionate digital designer with over 10 years experience in
                online content, design and development. Known for my hardworking
                ethic and exceptional people skills.{" "}
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
                <p>EDUCATION</p>
              </div>
              <p className="temp3-sub-heading">EDUCATIONAL QUALIFICATION</p>
              <p className="temp3-sub-inner-heading">University</p>
              <p className="temp-3-edu-time">2017-2020</p>

              <br />

              <p className="temp3-sub-heading">EDUCATIONAL QUALIFICATION</p>
              <p className="temp3-sub-inner-heading">High School</p>
              <p className="temp-3-edu-time">2010 - 2016</p>
            </div>
            <br />
            <div className="temp3-row-2-skills">
              <div className="temp3-heading">
                <p>SKILLS</p>
              </div>
              <div className="temp3-all-skill">
                <p>Content Writing</p>

                <p>Web Design</p>
                <p>Illustration</p>
                <p>Graphic Design</p>
              </div>
            </div>

            <br />

            <div className="temp3-row-2-reference">
              <div className="temp3-heading">
                <p>REFERENCE</p>
              </div>
              <div>
                <p>Provided upon request.</p>
              </div>
            </div>
          </div>

          <div className="temp3-row2-col-2">
            <div className="temp3-row2-workexp">
              <div className="temp3-heading">
                <p>WORK-EXPERIENCE</p>
              </div>
              <p className="temp3-exp-subheading">WEB DESIGNER</p> <br />
              <p className="temp3-exp-company-name">Really Great Company</p>
              <p className="temp3-exp-time">2020 - Present</p>
              <p className="temp3-exp-details">
                <li>Website design and development </li>
                <li>Delivered 20 websites from concept to completion </li>
                <li>Developed visual style guide</li>
              </p>
            </div>

            <div className="temp3-row2-workexp">
              <p className="temp3-exp-subheading">WEB DEVELOPER</p> <br />
              <p className="temp3-exp-company-name">Really Great Company</p>
              <p className="temp3-exp-time">2014 - 2016</p>
              <p className="temp3-exp-details">
                <li>Database administration and IT management </li>
                <li>Website back ups and server migration</li>
                <li>Front end and back end development</li>
              </p>
            </div>
            <br/>

            <div className="temp3-row2-workexp">
              <p className="temp3-exp-subheading">CONTENT MANAGER</p> <br />
              <p className="temp3-exp-company-name">Really Great Company</p>
              <p className="temp3-exp-time">2010 - 2016</p>
              <p className="temp3-exp-details">
                <li>Content writing and editing </li>
                <li>Developed and maintained editorial content plan </li>
                <li>Created and trained staff on editorial style guide</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp4;