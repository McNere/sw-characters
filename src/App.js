import React, { Component } from 'react';
import './App.css';
import People from "./People";
import Navigation from "./Navigation";
import Search from "./Search";

class App extends Component {
	constructor() {
		super();
		this.state = {
			people: [],
			next: "",
			previous: "",
			page: 1,
			searchField: ""
		}
	}

	previous = () => {
		//get previous page of results
		if (this.state.previous) {
			fetch(this.state.previous)
			.then(newRes => newRes.json())
			.then(newData => this.setState({people: newData.results, previous: newData.previous, next: newData.next, searchField: ""}))
		}
	}

	next = () => {
		//get next page of results
		fetch(this.state.next)
		.then(newRes => newRes.json())
		.then(newData => this.setState({people: newData.results, previous: newData.previous, next: newData.next, searchField: ""}));
	}

	searchChange = (event) => {
		this.setState({searchField: event.target.value});
	}

	render() {
		const { people, searchField } = this.state;
		const filteredPeople = people.filter(person => {
			const search = new RegExp(searchField.toLowerCase());
			return search.test(person.name.toLowerCase());
		})
		if (!people.length) {
			return <h1>Loading</h1>
		} else {
		  	return (
			    <div>
			    	<Search search={this.searchChange} />
			    	<People people={filteredPeople}/>
			    	<Navigation next={this.next} previous={this.previous}/>
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
