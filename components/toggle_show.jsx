// TODO: update dependencies if needed
// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// TODO: listen to the click event on `.article`
// TODO: code the `handleClick` function (which adds a 'clicked' class to the `.article`)

// TODO: transform the following functional component into a class based component
class Article extends Component {
  constructor (props) {
  	super(props);
  
  // TODO: set the initial state { clicked: false }
  this.state = { clicked: false };
	}

	handleClick = () => {  // Fat arrow to reference self 
		this.setState({			 // for this in state change
			clicked: !this.state.clicked
		});
	}

	render() {
		return (
	    <div className ={this.state.clicked ? "article clicked" : "article" }
	    onClick={this.handleClick} >
	    <h2 className="article-title" >
	    	Hello World
      </h2>
	    </div>
	  );
	}
}

// Export Class
export default Article;
