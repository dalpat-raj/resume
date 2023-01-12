import React, {Component} from 'react';


class Interest extends Component {
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
                <h2>interest field</h2>
            </div>
            <div className="form">

              <div className="input__box">
                <label htmlFor="">Interest 1</label>
                <input type="text" placeholder='interest1'
                  value={values.interest1}
                  onChange={this.props.handleChange}
                  name="interest1"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Interest 2</label>
                <input type="text" placeholder='interest2'
                  value={values.interest2}
                  onChange={this.props.handleChange}
                  name="interest2"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Interest 3</label>
                <input type="text" placeholder='interest3'
                  value={values.interest3}
                  onChange={this.props.handleChange}
                  name="interest3"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Interest 4</label>
                <input type="text" placeholder='interest4'
                  value={values.interest4}
                  onChange={this.props.handleChange}
                  name="interest4"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Interest 5</label>
                <input type="text" placeholder='interest5'
                  value={values.interest5}
                  onChange={this.props.handleChange}
                  name="interest5"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Interest 6</label>
                <input type="text" placeholder='interest6'
                  value={values.interest6}
                  onChange={this.props.handleChange}
                  name="interest6"
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

export default Interest;