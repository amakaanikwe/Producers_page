import React from 'react';
import "./ProjectStyle.css"

class ProjectComponent extends React.Component{
  
  

  render () {
    console.log(this.props.producers);
    return (
      <React.Fragment>
          <section className="container">
              <div className="row">
                  <div className="col-sm-4">
                    <a href={this.props.producers.site}><img
                    className="img-responsive"
                    src={this.props.producers.image} alt="banner image"
                    width="350"
                    /></a>
                  </div>
                  <div className="col-sm-8">
                    <h2>{this.props.producers.title}</h2>
                    <p>
                        {this.props.producers.features}
                    </p>
                    <footer>
                      <div className="panel-footer">
                        <a href={this.props.producers.git}>
                          <button class="btn btn-lg">
                            <i className="fab fa-github" aria-hidden="true"></i>
                          </button>
                        </a>
                        <a href={this.props.producers.site}>
                          <button className="btn btn-lg">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                          </button>
                          </a>
                      </div>
                    </footer>
                  </div>
              </div>
          </section>

      </React.Fragment>
    );
  }
}

export default ProjectComponent;