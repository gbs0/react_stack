// Import default component from react;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FetchClass extends React.Component {
	// Add constructor
	constructor() {
		super();

		this.state = {
			user: {},
			xhr: null
		};
	}
	
	componentWillUnmount() {
		xhr = this.state.xhr;

		// Cancel the xhr request, so the callback is never called
		if (xhr && xhr.readyState != 4) {
			xhr.abort();
		}
	}
	// Check if component is mounted
	componentDidMount() {
		this.fetchUser();
	}

	// Asynchronous function
	fetchUser() {
		$.get('/api/users/self')
			.then((user) => {
				this.setState({user : user});
			});
	}

	render() {
		return <h1>{this.state.user}</h1>;
	}
}
