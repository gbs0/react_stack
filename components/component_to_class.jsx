// Import default component from react;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import .scss file;

// const Hello = (props) => {					// React component
// 	return <div> Hello World!</div>;
// }

class Hello extends Component {			// Rewriting as class
	constructor(props) {										// Must have a constructor method
		super(props);
		this.state = {
			clicked: false
		};
	}

	render() {												// Must have a render method for build and return HTML
		return(
			<div>Hello {this.props.city}</div
		)
	}											
}

// locate DOM element for render
const root = document.getElementById('root');
// Render the element
if (root) {
	ReactDOM.render(
		<Hello city="São Paulo" />, root);
}