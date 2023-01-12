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

              <div className="input__box">
                <label htmlFor="">Skill 1</label>
                <input type="text" placeholder='skill1'
                  value={values.skill1}
                  onChange={this.props.handleChange}
                  name="skill1"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Skill 2</label>
                <input type="text" placeholder='skill2'
                  value={values.skill2}
                  onChange={this.props.handleChange}
                  name="skill2"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Skill 3</label>
                <input type="text" placeholder='skill3'
                  value={values.skill3}
                  onChange={this.props.handleChange}
                  name="skill3"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Skill 4</label>
                <input type="text" placeholder='skill4'
                  value={values.skill4}
                  onChange={this.props.handleChange}
                  name="skill4"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Skill 5</label>
                <input type="text" placeholder='skill5'
                  value={values.skill5}
                  onChange={this.props.handleChange}
                  name="skill5"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Skill 6</label>
                <input type="text" placeholder='skill6'
                  value={values.skill6}
                  onChange={this.props.handleChange}
                  name="skill6"
                />
              </div>
            </div>
            
            <div className="button">
                <button className='btn' onClick={this.back}>back</button>
                <button className='btn' onClick={this.continue}>continue</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Skill;