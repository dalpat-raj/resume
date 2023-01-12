import React, {Component} from 'react';


class Project extends Component {
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
                <h2>Project Field's field</h2>
            </div>
            <div className="form">

              <div className="input__box">
                <label htmlFor="">Title</label>
                <input type="text" placeholder='title1'
                  value={values.title1}
                  onChange={this.props.handleChange}
                  name="title1"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Link</label>
                <input type="text" placeholder='link1'
                  value={values.link1}
                  onChange={this.props.handleChange}
                  name="link1"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Project Description</label>
                <input type="text" placeholder='projectDescription1'
                  value={values.projectDescription1}
                  onChange={this.props.handleChange}
                  name="projectDescription1"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Title</label>
                <input type="text" placeholder='title2'
                  value={values.title2}
                  onChange={this.props.handleChange}
                  name="title2"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Link</label>
                <input type="text" placeholder='link2'
                  value={values.link2}
                  onChange={this.props.handleChange}
                  name="link2"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Project Description</label>
                <input type="text" placeholder='projectDescription2'
                  value={values.projectDescription2}
                  onChange={this.props.handleChange}
                  name="projectDescription2"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Title</label>
                <input type="text" placeholder='title3'
                  value={values.title3}
                  onChange={this.props.handleChange}
                  name="title3"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Link</label>
                <input type="text" placeholder='link3'
                  value={values.link3}
                  onChange={this.props.handleChange}
                  name="link3"
                />
              </div>

              <div className="input__box">
                <label htmlFor="">Project Description</label>
                <input type="text" placeholder='projectDescription3'
                  value={values.projectDescription3}
                  onChange={this.props.handleChange}
                  name="projectDescription3"
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

export default Project;