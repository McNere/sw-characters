import React from "react";
import List from "./List";

const Test = ({ people }) => {
	return (
		<div className="people">
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
	)
}

export default Test;