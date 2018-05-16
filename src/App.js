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
		const { previous, page } = this.state;
		//get previous page of results
		if (previous) {
			fetch(previous)
			.then(newRes => newRes.json())
			.then(newData => this.setState(
				{
					people: newData.results, 
					previous: newData.previous, 
					next: newData.next, 
					searchField: "",
					page: page-1
				}
			));
		}
	}

	next = () => {
		const { next, page } = this.state;
		//get next page of results
		fetch(next)
		.then(newRes => newRes.json())
		.then(newData => this.setState(
			{
				people: newData.results, 
				previous: newData.previous, 
				next: newData.next, 
				searchField: "",
				page: page+1
			}
		));
	}

	searchChange = (event) => {
		this.setState({searchField: event.target.value});
	}

	render() {
		//filters people array based on what's written in the searchfield
		const { people, searchField, page } = this.state;
		const filteredPeople = people.filter(person => {
			const search = new RegExp(searchField.toLowerCase());
			return search.test(person.name.toLowerCase());
		})
		//brings up loading screen while app is fetching data from API
		if (!people.length) {
			return <h1>Loading</h1>
		} else { //renders main content once data is loaded
		  	return (
			    <div className="container">
			    	<Search search={this.searchChange} />
			    	<People people={filteredPeople}/>
			    	<h6>Page: {page}</h6>
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
