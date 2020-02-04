import React, { Component } from 'react';
import Cart from './Cart/Cart';
import Customize from './Customize/Customize';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Main extends Component {

	render() {

		return (

			<main 
        className="Main"
      >

				<Customize 
					features = {this.props.features}
					selected = {this.props.selected}
					USCurrencyFormat = {USCurrencyFormat}
					updateFeature = {this.props.updateFeature}
				/>

				<Cart 
					selected = {this.props.selected}
					USCurrencyFormat = {USCurrencyFormat}
				/>

			</main>
		);

	};

}

export default Main;