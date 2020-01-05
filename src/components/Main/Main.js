import React, { Component } from 'react';
import Cart from './Cart/Cart';
import Customize from './Customize/Customize';

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
		};
		this.updateFeature = (feature, newValue) => {
      const selected = Object.assign({}, this.state.selected);
      selected[feature] = newValue;
      this.setState({
        selected
      });
    };
	};

	render() {
		console.log(this.props)
		return (
			<main className="Main">
				<Customize 
					features = {this.props.features}
					selected = {this.state.selected}
					USCurrencyFormat = {this.props.USCurrencyFormat}
					updateFeature = {this.updateFeature}
				/>
				<Cart 
					selected = {this.state.selected}
					USCurrencyFormat = {this.props.USCurrencyFormat}
				/>
			</main>
		)
	};
}
export default Main;



    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.state.selected[feature];

    //   return (
    //     <div className="summary__option" key={featureHash}>
    //       <div className="summary__option__label">{feature} </div>
    //       <div className="summary__option__value">{selectedOption.name}</div>
    //       <div className="summary__option__cost">
    //         {this.props.USCurrencyFormat.format(selectedOption.cost)}
    //       </div>
    //     </div>
    //   );
    // });