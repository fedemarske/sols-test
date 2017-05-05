import React from "react";
import Phone from "./Phone";

export default class Contact extends React.Component {

    timeConverter(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['January','February','March','April','May','June','July','August',
                    'September','October','November','December'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time = month + ' ' + date + ', ' + year;
      return time;
    }

    getFavoriteIcon(){
        return this.props.contact.favorite ? 'img/star-full.svg' : 'img/star.svg';
    }

    clickHandler(e) {
        this.props.onClick(this.props.obj);
    }

	render() {
        if(Object.keys(this.props.contact).length === 0){
            return(
                <section class="detail">
                    <h3>Select a contact from the list</h3>
                </section>
            )
        }

		return(
            <section class="detail">
                <div class="menu-container">
                    <div class="back-mobile" onClick={this.clickHandler.bind(this)}>
                        <img class="svg-icons" src="img/left-arrow.svg" />
                        <span>All Contacts</span>
                    </div>
                    <div class="edit">
                        <img class="svg-icons" src={this.getFavoriteIcon()} />
                        <img class="svg-icons" src="img/edit.svg" />
                    </div>
                </div>

                <div class="contact-detail-form">
                    
                    <div class="basic-info">

                        <div class="img-container-large">
                            <img src={this.props.contact.largeImageURL} />
                        </div>

                        <div class="name-company-block">
                            <div class="info-group">
                                <span class="label">Name:</span>
                                <p>{this.props.contact.name}</p>
                            </div>

                            <div class="info-group">
                                <span class="label">Company:</span>
                                <p>{this.props.contact.company}</p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="extra-info">

                        <div class="extra-item">
                            <span class="label">Phone:</span>
                            {Object.keys(this.props.contact.phone).map(function(key){
                                return <Phone num={this.props.contact.phone[key]} category={key} key={key} />;
                            }.bind(this))}
                        </div>

                        <div class="extra-item">
                            <span class="label">Address:</span>
                            <div class="info-group">
                                <p>{this.props.contact.address.street}</p>
                                <p>{this.props.contact.address.city}, {this.props.contact.address.state} {this.props.contact.address.zip}</p>
                            </div>
                        </div>

                        <div class="extra-item">
                            <span class="label">Birthday:</span>
                            <div class="info-group">
                                <p>{this.timeConverter(this.props.contact.birthdate)}</p>
                            </div>
                        </div>

                        <div class="extra-item">
                            <span class="label">Email:</span>
                            <div class="info-group">
                                <p>{this.props.contact.email}</p>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </section>
		);
	}
}