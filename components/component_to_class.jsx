import React,  from 'react';
import ReactDOM from 'react-dom';

// import .scss file;

const Hello = (props) => {					// React component
	return <div> Hello World!</div>;
}

class Hello extends Component {			// Component as class
	constructor() {										// Must have a constructor method

	}
	render() {												// Must have a render method

	}											
}

// locate DOM element for render
const root = document.getElementById('root');
// Render the element
if (root) {
	ReactDOM.render(
		<Hello city="São Paulo" />, root);
}