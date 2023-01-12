import React, {Component} from 'react';


class Reference extends Component {
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
                <h2>Reference field</h2>
            </div>
            <div className="form">
                <div className="input__box">
                    <label htmlFor="">Reference</label>
                    <textarea style={{resize: "none"}} type="text" placeholder='reference'
                    value={values.reference}
                    onChange={this.props.handleChange}
                    name="reference"
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

export default Reference;