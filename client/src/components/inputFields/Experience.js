import React, {Component} from 'react';


class Experience extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render () {
    const {values} = this.props;
    return (
      <div className="container_fluid input__fields">
        <div className="col">
            <div className="heading">
                <h2>Experience field</h2>
            </div>
            <div className="form">

              <input type="text" placeholder='institute1'
                value={values.institute1}
                onChange={this.props.handleChange}
                name="institute1"
              />
              <input type="text" placeholder='position1'
                value={values.position1}
                onChange={this.props.handleChange}
                name="position1"
              />
              <input type="text" placeholder='duration1'
                value={values.duration1}
                onChange={this.props.handleChange}
                name="duration1"
              />
              <input type="text" placeholder='experienceDescription1'
                value={values.experienceDescription1}
                onChange={this.props.handleChange}
                name="experienceDescription1"
              />
              <input type="text" placeholder='institute2'
                value={values.institute2}
                onChange={this.props.handleChange}
                name="institute2"
              />
              <input type="text" placeholder='position2'
                value={values.position2}
                onChange={this.props.handleChange}
                name="position2"
              />
              <input type="text" placeholder='duration2'
                value={values.duration2}
                onChange={this.props.handleChange}
                name="duration2"
              />
              <input type="text" placeholder='experienceDescription2'
                value={values.experienceDescription2}
                onChange={this.props.handleChange}
                name="experienceDescription2"
              />
            </div>

            <div className="button">
                <button onClick={this.back}>back</button>
                <button onClick={this.continue}>continue</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Experience;