import React, { Component } from 'react';

class Part extends Component {

	render() {

		return (
	    <div 
	    	className="summary__option"
	    	key={this.props.featureHash}
	    >
	      <div 
	      	className="summary__option__label"
	      >
	      	{this.props.feature}
	      </div>
	      <div
	      	className="summary__option__value"
	      >
	      	{this.props.part.name}
	      </div>
	      <div 
	      	className="summary__option__cost"
	      >
	        {this.props.USCurrencyFormat.format(this.props.part.cost)}
	      </div>
	    </div>
		)
	};
}
export default Part;