import React, {Component} from 'react';




class Education extends Component {
  continue = e => {
    // e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    // e.preventDefault();
    this.props.prevStep();
  };



  render () {
    const {values} = this.props;
    // console.log(this.props.handleChange);
    return (
      <div className="container_fluid education row">
        <div className="col">
            <div className="heading">
                <h2>Details field</h2>
            </div>
            <div className="form">

               
                <input type="text" placeholder='precent'/>
                <input type="text" placeholder='marks'/>
                <input type="text" placeholder='pass'/>
                <input type="text" placeholder='first'/>
            </div>
            <div className="button">
                <button onClick={this.back}>back</button>
                <button onClick={this.continue}>continue</button>
            </div>
        </div>
        <div className="col">
            <h2>{this.props.firstname}</h2>
            <p>raj</p>
        </div>
      </div>
    );
  }
}

export default Education;