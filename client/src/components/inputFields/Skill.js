import React, {Component} from 'react';


class Skill extends Component {
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
                <h2>Skill from</h2>
            </div>
            <div className="form">
              <input type="text" placeholder='skill1'
                value={values.skill1}
                onChange={this.props.handleChange}
                name="skill1"
              />
              <input type="text" placeholder='skill2'
                value={values.skill2}
                onChange={this.props.handleChange}
                name="skill2"
              />
              <input type="text" placeholder='skill3'
                value={values.skill3}
                onChange={this.props.handleChange}
                name="skill3"
              />
              <input type="text" placeholder='skill4'
                value={values.skill4}
                onChange={this.props.handleChange}
                name="skill4"
              />
              <input type="text" placeholder='skill5'
                value={values.skill5}
                onChange={this.props.handleChange}
                name="skill5"
              />
              <input type="text" placeholder='skill6'
                value={values.skill6}
                onChange={this.props.handleChange}
                name="skill6"
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

export default Skill;