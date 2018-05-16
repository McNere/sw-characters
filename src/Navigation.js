import React from "react";

const Navigation = ({ next, previous }) => {
	return (
		<div>
			<button className="btn btn-primary btn-sm" onClick={previous}>Prev</button>
			<button className="btn btn-primary btn-sm" onClick={next}>Next</button>
		</div>
	)
}

export default Navigation;