import React from "react";
import ContactItem from "./ContactItem";

export default class Contact extends React.Component {
	render() {
		return(
			<section className="contacts">
                <ul className="contact-list">
                    {this.props.contacts.map(function(object, i){
                        return <ContactItem obj={object} key={i} onClick={this.props.onClick}/>;
                    }.bind(this))}
                </ul>
			</section>
		);
	}
}