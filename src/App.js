import React from 'react';
import ProjectComp from './components/ProjectComp.jsx'
import data from './project_page_data.json'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        data: data,
        
      }

  }
  render () {
    return (
      <div>
        <header>Projects Page</header>
        {this.state.data.map((producers, i) => <ProjectComp key = {i} producers = {producers} data={this.state} />)}

        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <a className="backButton" href="https://amakaanikwe.github.io/" type="button" target="_blank">Back to Site</a>
              {/* <a className="backButton" href="https://amakaanikwe.github.io/" type="button" target="_blank">Download Resume</a> */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default App;