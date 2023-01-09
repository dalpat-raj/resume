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
                <h2>education field</h2>
            </div>
            <div className="form">

                <input type="text" placeholder='title1'
                  value={values.title1}
                  onChange={this.props.handleChange}
                  name="title1"
                />
                <input type="text" placeholder='link1'
                  value={values.link1}
                  onChange={this.props.handleChange}
                  name="link1"
                />
                <input type="text" placeholder='projectDescription1'
                  value={values.projectDescription1}
                  onChange={this.props.handleChange}
                  name="projectDescription1"
                />
                <input type="text" placeholder='title2'
                  value={values.title2}
                  onChange={this.props.handleChange}
                  name="title2"
                />
                <input type="text" placeholder='link2'
                  value={values.link2}
                  onChange={this.props.handleChange}
                  name="link2"
                />
                <input type="text" placeholder='projectDescription2'
                  value={values.projectDescription2}
                  onChange={this.props.handleChange}
                  name="projectDescription2"
                />
                <input type="text" placeholder='title3'
                  value={values.title3}
                  onChange={this.props.handleChange}
                  name="title3"
                />
                <input type="text" placeholder='link3'
                  value={values.link3}
                  onChange={this.props.handleChange}
                  name="link3"
                />
                <input type="text" placeholder='projectDescription3'
                  value={values.projectDescription3}
                  onChange={this.props.handleChange}
                  name="projectDescription3"
                />
                <input type="text" placeholder='description2'
                  value={values.description2}
                  onChange={this.props.handleChange}
                  name="description2"
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

export default Project;