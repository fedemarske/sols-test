import React from "react";
import Contact from "./Contact";
import Detail from "./Detail";

export default class Layout extends React.Component {
	render() {
		return(
			<div className="container">
				<Contact />
				<Detail />
			</div>
		);
	}
}