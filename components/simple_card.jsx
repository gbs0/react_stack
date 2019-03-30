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
			<div>SimpleCard {this.props.imageUrl}</div>
		)
	}											
}

// locate DOM element for render
const root = document.getElementById('root');
// Render the element
if (root) {
	ReactDOM.render(
		<Image imageUrl="" />, root);
}