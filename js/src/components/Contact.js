import React from "react";

export default class Contact extends React.Component {
	render() {
		return(
			<section className="contacts">
                <ul className="contact-list">
                    <li className="contact-item">
                        <div className="img-container">
                            <img src="img/placeholder.png" alt="" />
                        </div>
                        <div className="contact-item-info">
                            <h4 className="contanct-name">Contact Name</h4>
                            <span className="contanct-tel">54564564564564</span>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="img-container">
                            <img src="img/placeholder.png" alt="" />
                        </div>
                        <div className="contact-item-info">
                            <h4 className="contanct-name">Contact Name</h4>
                            <span className="contanct-tel">54564564564564</span>
                        </div>
                    </li>
                </ul>
			</section>
		);
	}
}