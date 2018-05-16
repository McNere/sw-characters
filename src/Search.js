import React from "react";

const Search = ({ search }) => {
	return (
		<div className="input-group mb-3 searchbar">
			<div className="input-group-prepend">
				<span className="input-group-text" id="basic-addon1">Name</span>
			</div>
			<input onChange={search} type="text" className="form-control" aria-describedby="basic-addon2"/>
		</div>
	)
}

export default Search;