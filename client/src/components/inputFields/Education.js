import React, { Component } from "react";

class Education extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div className="container_fluid input__fields">
        <div className="col">
          <div className="heading">
            <h2>Education field</h2>
          </div>
          <div className="form">
            <div className="input__box">
              <label htmlFor="">College</label>
              <input
                type="text"
                placeholder="college"
                value={values.college}
                onChange={this.props.handleChange}
                name="college"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">From Year</label>
              <input
                type="text"
                placeholder="fromyear1"
                value={values.fromyear1}
                onChange={this.props.handleChange}
                name="fromyear1"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">To Year</label>
              <input
                type="text"
                placeholder="toyear1"
                value={values.toyear1}
                onChange={this.props.handleChange}
                name="toyear1"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Qualification</label>
              <input
                type="text"
                placeholder="qualification1"
                value={values.qualification1}
                onChange={this.props.handleChange}
                name="qualification1"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Description</label>
              <input
                type="text"
                placeholder="description1"
                value={values.description1}
                onChange={this.props.handleChange}
                name="description1"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">School</label>
              <input
                type="text"
                placeholder="school"
                value={values.school}
                onChange={this.props.handleChange}
                name="school"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Fromyear</label>
              <input
                type="text"
                placeholder="fromyear2"
                value={values.fromyear2}
                onChange={this.props.handleChange}
                name="fromyear2"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">To Year</label>
              <input
                type="text"
                placeholder="toyear2"
                value={values.toyear2}
                onChange={this.props.handleChange}
                name="toyear2"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Qualification</label>
              <input
                type="text"
                placeholder="qualification2"
                value={values.qualification2}
                onChange={this.props.handleChange}
                name="qualification2"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Description</label>
              <input
                type="text"
                placeholder="description2"
                value={values.description2}
                onChange={this.props.handleChange}
                name="description2"
              />
            </div>
          </div>

          <div className="button">
            <button className="btn" onClick={this.back}>
              back
            </button>
            <button className="btn" onClick={this.continue}>
              continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
