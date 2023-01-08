import React, {Component} from 'react';
import Education from "./Education"
import Details from "./Details"
import Skill from "./Skill"


export class Editor extends Component {
  state = {
    step: 1,
    // Personal Profile Details...
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',

    // Education Information
    college: '',
    fromyear1: '',
    toyear1: '',
    qualification1: '',
    description1: '',
    school: '',
    fromyear2: '',
    toyear2: '',
    qualification2: '',
    description2: '',

    // Project Information...
    title1: '',
    link1: '',
    projectDescription1: '',
    title2: '',
    link2: '',
    projectDescription2: '',
    title3: '',
    link3: '',
    projectDescription3: '',

    // Experience Information
    institute1: '',
    position1: '',
    duration1: '',
    experienceDescription1: '',
    institute2: '',
    position2: '',
    duration2: '',
    experienceDescription2: '',

    // Extra Information
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
    interest5: '',
    interest6: '',
  };
  
  nextStep = () => {
      const {step} = this.state;
      this.setState ({
          step: step + 1,
        });
    };
    
    prevStep = () => {
      const {step} = this.state;
      this.setState ({
        step: step - 1,
      });
    };
  

  handleChange = ({target: {value, name}}) => {
    this.setState ({[name]: value});
  };
    

  render () {
    const {step} = this.state;
    const {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
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

      // Extra Information
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
    } = this.state;
    const values = {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
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

      // Extra Information
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
    };
    switch (step) {
      case 1:
        return (
          <Education
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Details
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Skill
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default: return <div/>;
      };

    

  }
  
   
  
  
}

export default Editor;