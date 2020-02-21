import React from 'react';
import "./ProjectStyle.css"
import FooterComp from './FooterComp.jsx'

class ProjectComponent extends React.Component{
  
  

  render () {

    return (
      <React.Fragment>
          <section className="container">
              <div className="row">

                  <div className="col-sm-4" style={{paddingRight: 0 }}>
                    <a href={this.props.producers.site}><img
                    className="img-responsive"
                    src={this.props.producers.image} alt="banner image"
                    width="350"
                    /></a>
                  </div>
                  <div className="col-sm-8 secPosition" style={{paddingLeft: 0 }}>
                    <div id="infoSection">
                      <h1>{this.props.producers.title}</h1>
                      <ul>
                        {this.props.producers.features.map((listItem, i) => <li key = {i} listItem = {listItem}>{listItem}</li>)}
                      </ul>
                    </div>

                    <FooterComp data={this.props} />

                  </div>

              </div>
          </section>

      </React.Fragment>
    );
  }
}

export default ProjectComponent;