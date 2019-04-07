// Import default component from react;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key: "";
const ranting = null;

// Search example
//const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");

class Gifs extends React.Component {
	// Add constructor
	constructor() {
		super();
		
		this.state = {
			trends: {},			// Or array type { trends: [] }
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
		$.get('https://api.giphy.com/v1/gifs/trending') // Or http://api.giphy.com/v1/gifs/trending
			.then(response => response.json())
			.then(json => this.setState({ trends : json.data }));
	}

	render() {
		return (
		<div>
	    <h1>Trending Gifs</h1>
	    {
				this.state.trends.length == 0
				? 'Loading gifs...'
				: this.state.trends.map(user => (
          <figure key={user.id}>
          <img src={user.avatar} />
          <figcaption>
            {user.name}
          </figcaption>
				</figure> ))
			} </div>);
		}
	}
}

ReactDOM.render(<Gifs />, document.getElementById('root'));