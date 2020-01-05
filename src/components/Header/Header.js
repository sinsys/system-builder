import React, { Component } from 'react';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	};

	render() {
		return (
			<header className="Header">
				<h1>ELF Computing | Laptops</h1>
			</header>
		)
	};
}
export default Header;