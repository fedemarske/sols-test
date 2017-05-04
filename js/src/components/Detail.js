import React from "react";

export default class Contact extends React.Component {
	render() {
		return(
            <section class="detail">
                <div class="menu-container">
                    <div class="back-mobile">
                        <img class="svg-icons" src="img/left-arrow.svg" />
                        <span>All Contacts</span>
                    </div>
                    <div class="edit">
                        <img class="svg-icons" src="img/star.svg" />
                        <img class="svg-icons" src="img/edit.svg" />
                    </div>
                </div>

                <div class="contact-detail-form">
                    
                    <div class="basic-info">

                        <div class="img-container-large">
                            <img src="img/placeholder-large.png" />
                        </div>

                        <div class="name-company-block">
                            <div class="info-group">
                                <span class="label">Name:</span>
                                <p>John Smith</p>
                            </div>

                            <div class="info-group">
                                <span class="label">Company:</span>
                                <p>Sarsa</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="extra-info">

                        <div class="extra-item">
                            <div class="info-group">
                                <span class="label">Phone:</span>
                                <p>(555)555-5555</p>
                            </div>
                            <div class="info-group">
                                <p class="location">Home</p>
                            </div>
                        </div>

                        <div class="extra-item">
                            <div class="info-group">
                                <span class="label">Address:</span>
                                <p>asdasdasdasd</p>
                                <p>asdasdasd</p>
                                <p>asdasdasd</p>
                            </div>
                            <div class="info-group">
                                <p class="location">Work</p>
                            </div>
                        </div>

                        <div class="extra-item">
                            <div class="info-group">
                                <span class="label">Birthday:</span>
                                <p>321321321321</p>
                            </div>
                        </div>

                        <div class="extra-item">
                            <div class="info-group">
                                <span class="label">Email:</span>
                                <p>asdasdasdasdasdasdasd</p>
                            </div>
                            <div class="info-group">
                                <p class="location">Work</p>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </section>
		);
	}
}