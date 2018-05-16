import React from "react";

const List = ({ name, height, gender, haircolor }) => {
	return (
		<div className="col-sm-12 col-md-6 col-lg-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					Height: {height}<br/>
					Gender: {gender}<br/>
					Haircolor: {haircolor}
				</div>
			</div>
		</div>
	)
}

export default List;