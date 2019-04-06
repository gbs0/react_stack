// Import default component from react;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key: "";



class FetchClass extends React.Component {
	// Add constructor
	constructor() {
		super();
		
		this.setter = stateSetter(this);
		this.state = {
			search: {},
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
		this.fetchTrending();
	}

	// Asynchronous function
	fetchTrending() {
		$.get('https://api.giphy.com/v1/gifs/trending')
			.then((user) => {
				this.setState({user : user});
			});
		this.setState({xhr:xhr});
	}

	render() {
		return <div>{this.state.user}</div>;
	}
}
