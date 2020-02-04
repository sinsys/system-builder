import React, { Component } from 'react';
import Part from './Part/Part';
import Total from './Total/Total';

class Cart extends Component {

	render() {
		const summary = Object.keys(this.props.selected).map((feature, idx) => {
		  return (
		  	<Part
		  		key = {'part-' + feature}
		  		featureHash = {feature + '-' + idx}
		  		part = {this.props.selected[feature]}
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
 					selected = {this.props.selected}
 					total = {this.props.total}
 					USCurrencyFormat = {this.props.USCurrencyFormat}
 				/>
			</section>
		)
	};
}
export default Cart;