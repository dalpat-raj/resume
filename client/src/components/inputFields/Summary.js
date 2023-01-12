import React, { Component } from "react";

class Summary extends Component {
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
            <h2>Summary field</h2>
          </div>
          <div className="form">
            <div className="input__box">
              <label htmlFor="">Summary</label>
              <textarea
                style={{ resize: "none" }}
                type="text"
                placeholder="summary"
                value={values.summary}
                onChange={this.props.handleChange}
                name="summary"
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

export default Summary;
