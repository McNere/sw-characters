import React from "react";

const List = ({ name, height, gender, haircolor }) => {
	return (
		<div className="card col-md-6 col-sm-12 col-lg-3">
			<div className="card-body">
				<h5 className="cart-title">{name}</h5>
				Height: {height}<br/>
				Gender: {gender}<br/>
				Haircolor: {haircolor}
			</div>
		</div>
	)
}

export default List;