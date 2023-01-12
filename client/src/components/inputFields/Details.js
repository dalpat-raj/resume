import React, { Component } from "react";

class Details extends Component {
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
            <h2>Details field</h2>
          </div>
          <div className="form">
            <div className="input__box">
              <label htmlFor="">first Name</label>
              <input
                type="text"
                placeholder="first name"
                value={values.firstname}
                onChange={this.props.handleChange}
                name="firstname"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="last name"
                value={values.lastname}
                onChange={this.props.handleChange}
                name="lastname"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Current Profession</label>
              <input
                type="text"
                placeholder="Profession"
                value={values.currenProfession}
                onChange={this.props.handleChange}
                name="currenProfession"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">email</label>
              <input
                type="text"
                placeholder="email"
                value={values.email}
                onChange={this.props.handleChange}
                name="email"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">phone</label>
              <input
                type="text"
                placeholder="phone"
                value={values.phone}
                onChange={this.props.handleChange}
                name="phone"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Address</label>
              <input
                type="text"
                placeholder="address"
                value={values.address}
                onChange={this.props.handleChange}
                name="address"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Git Hub</label>
              <input
                type="text"
                placeholder="github"
                value={values.github}
                onChange={this.props.handleChange}
                name="github"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Linked In</label>
              <input
                type="text"
                placeholder="linkedin"
                value={values.linkedin}
                onChange={this.props.handleChange}
                name="linkedin"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">FaceBook</label>
              <input
                type="text"
                placeholder="facebook"
                value={values.facebook}
                onChange={this.props.handleChange}
                name="facebook"
              />
            </div>

            <div className="input__box">
              <label htmlFor="">Instagram</label>
              <input
                type="text"
                placeholder="instagram"
                value={values.instagram}
                onChange={this.props.handleChange}
                name="instagram"
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

export default Details;
