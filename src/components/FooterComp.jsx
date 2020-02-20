import React from 'react';

class FooterComp extends React.Component{
  
  

  render () {

    return (
            <footer>
                <div className="panel-footer">
                    <a href={this.props.data.git}>
                        <button class="btn btn-lg">
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </button>
                    </a>
                    <a href={this.props.data.site}>
                        <button className="btn btn-lg">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>
            </footer>

    );
  }
}

export default FooterComp;