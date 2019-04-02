// Import default component from react;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Name extends Component {
	constructor(props) {
		//Since we are extending the default constructor, 
		//handle default activities first.
		super(props);
		
		//Extract the first-name from the prop
		const firstName = this.props.name.split(" ")[0];

		//In the constructor, feel free to modify the
		//state property on the current context. 
		this.state = {
    	name: firstName
    }
	} //Look maa, no comma required in JSX based class defs!

	render() {
		return <h1>Hello, {this.state.name}!</h1>
	}
}

export default Hello;