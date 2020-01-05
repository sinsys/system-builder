import React, { Component } from 'react';
import Part from './Part/Part';
import Total from './Total/Total';

class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: this.props.selected
		}
	};

	render() {
		const summary = Object.keys(this.state.selected).map((feature, idx) => {
		  return (
		  	<Part
		  		key = {'part-' + feature}
		  		featureHash = {feature + '-' + idx}
		  		part = {this.state.selected[feature]}
		  		feature = {feature}
		  		USCurrencyFormat = {this.props.USCurrencyFormat}
		  	/>
		  );
		});

		return (
			<section className="main__summary">
	      <h2>Your cart</h2>
	      {summary}
 				<Total 
 					selected = {this.state.selected}
 					USCurrencyFormat = {this.props.USCurrencyFormat}
 				/>
			</section>
		)
	};
}
export default Cart;