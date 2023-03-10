import React, { Component } from "react";
import Details from "./inputFields/Details.js";
import Education from "./inputFields/Education";
import Project from "./inputFields/Project";
import Experience from "./inputFields/Experience";
import Skill from "./inputFields/Skill";
import Interest from "./inputFields/Interest";
import Summary from "./inputFields/Summary.js";
import Reference from "./inputFields/Reference.js";

export class Editor extends Component {
  state = {
    step: 1,
    // Personal Profile Details...
    firstname: "",
    lastname: "",
    currenProfession: "",
    email: "",
    phone: "",
    address: "",
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",

    // Education Information
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",

    // Project Information...
    title1: "",
    link1: "",
    projectDescription1: "",
    title2: "",
    link2: "",
    projectDescription2: "",
    title3: "",
    link3: "",
    projectDescription3: "",

    // Experience Information
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",

    // Extra Information
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",

    // summary
    summary: "",
    reference: "",
  };

  nextStep = () => {
    const { step } = this.state;
    if (step < 8) {
      this.setState({
        step: step + 1,
      });
    }
  };

  prevStep = () => {
    const { step } = this.state;
    if (step > 1) {
      this.setState({
        step: step - 1,
      });
    }
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, () => {
      const { getData } = this.props;
      getData(this.state);
    });
  };

  render() {
    const { step } = this.state;
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

      // summary
      summary,
      reference,
    } = this.state;
    const values = {
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

      // summary
      summary,
      reference,
    };

    switch (step) {
      case 1:
        return (
          <Details
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Education
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Experience
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Project
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Skill
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Interest
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <Reference
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
        return <div />;
    }
  }
}

export default Editor;
