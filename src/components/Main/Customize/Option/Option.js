import React, { Component } from 'react';
import slugify from 'slugify';

class Option extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	};

	render() {
		const itemHash = slugify(JSON.stringify(this.props.item));
		console.log(this.props)
		return (
			<div>
				{this.props.feature}
			</div>
		)
	};
}
export default Option;