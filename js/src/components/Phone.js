import React from "react";

export default class Phone extends React.Component {
	render() {
		return(
            <div class="categories">
                <div class="info-group">
                    <p>{this.props.num}</p>
                </div>
                <div class="info-group">
                    <p class="location">{this.props.category}</p>
                </div>
            </div>
		);
	}
}