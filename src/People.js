import React from "react";
import List from "./List";

const Test = ({ people }) => {
	return (
		<div>
			<div className="row">
			{
				people.map(person => {
					return <List
							name= {person.name}
							height= {person.height}
							gender= {person.gender}
							haircolor= {person.hair_color} 
							/>
				})
			}
			</div>
		</div>
	)
}

export default Test;