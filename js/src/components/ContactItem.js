import React from "react";
import $ from 'jquery';

export default class ContactItem extends React.Component {
    
    clickHandler(e) {
        $('.contact-list li').each(function(){
            $(this).removeClass('is-active')
        })
        $(e.currentTarget).addClass('is-active')
        this.props.onClick(this.props.obj);
    }

	render() {
		return(
            <li className="contact-item" onClick={this.clickHandler.bind(this)}>
                <div className="img-container">
                    <img src={this.props.obj.smallImageURL} alt="" />
                </div>
                <div className="contact-item-info">
                    <h4 className="contanct-name">{this.props.obj.name}</h4>
                    <span className="contanct-tel">{this.props.obj.company}</span>
                </div>
            </li>
		);
	}
}