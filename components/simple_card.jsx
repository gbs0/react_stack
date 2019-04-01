// Import default component from react;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import .scss file;

// const Hello = (props) => {					// React component
// 	return <div> Hello World!</div>;
// }

class SimpleCard extends Component {			// Rewriting as class
	constructor(props) {							// Must have a constructor method
		super(props);
		this.state = {
			clicked: true;
		};
	}

	render() {												// Must have a render method for build and return HTML
		return(
			<div>
			<img url={this.props.imageUrl}/>
			<h2>{this.props.title}</h2>
			<p>{this.props.description}</p>
			</div>
		)
	}											
}

// locate DOM element for render
const root = document.getElementById('root');
// Render the element
if (root) {
	ReactDOM.render(
		<SimpleCard imageUrl="",
		title="",
		description=""
		/>,
		root);
}