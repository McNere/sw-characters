import React, { Component } from 'react';
import './App.css';
import People from "./People";
import Navigation from "./Navigation";

class App extends Component {
	constructor() {
		super();
		this.state = {
			people: [],
			next: "",
			previous: ""
		}
	}

	previous = () => {
		//get previous page of results
		if (this.state.previous) {
			fetch(this.state.previous)
			.then(newRes => newRes.json())
			.then(newData => this.setState({people: newData.results, previous: newData.previous, next: newData.next}))
		}
	}

	next = () => {
		//get next page of results
		fetch(this.state.next)
		.then(newRes => newRes.json())
		.then(newData => this.setState({people: newData.results, previous: newData.previous, next: newData.next}));
	}

	render() {
		const { people } = this.state;
		if (!people.length) {
			return <p>Loading</p>
		} else {
		  	return (
			    <div>
			      <Navigation next={this.next} previous={this.previous}/>
			      <People people={people}/>
			    </div>
		  	);	
		}
	}

	componentDidMount() {
		//fetch people from swapi and convert it to JS object, and update state
		fetch("https://swapi.co/api/people/?format=json")
		.then(data => data.json())
		.then(persons => this.setState({people: persons.results, next: persons.next}))
	}
}

export default App;
