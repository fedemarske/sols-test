import React from "react";
import Contact from "./Contact";
import Detail from "./Detail";
import $ from 'jquery';

export default class Layout extends React.Component {

	constructor(){
		super();

		this.state = {
			url: 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json',
			contacts: [],
			contact: {},
			isLoading: true,
		}
	}

	componentDidMount() {
	    $.ajax({
	      url: this.state.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({
	        	contacts: data,
	        	isLoading: false,
	        });
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.state.url, status, err.toString());
	      }.bind(this)
	    });
  	}

  	contactClickHandler(obj) {
  		this.setState({
  			contact: obj
  		})

  		$('.contacts').addClass('off-mobile');
  		$('.detail').addClass('show-mobile');
  	}

  	backContactsHandler(){
        $('.contact-list li').each(function(){
            $(this).removeClass('is-active')
        })

  		$('.contacts').removeClass('off-mobile');
  		$('.detail').removeClass('show-mobile');
  	}


	render() {
		if(this.state.isLoading){
          return (<p>Loading...</p>)
       	}
		return(
			<div className="container">
				<Contact contacts={this.state.contacts} onClick={this.contactClickHandler.bind(this)}/>
				<Detail contact={this.state.contact} onClick={this.backContactsHandler.bind(this)}/>
			</div>
		);
	}
}