import React, { Component } from 'react';

class Total extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: this.props.selected
		};
		this.total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
	};	
	render() {
		return (
	    <div className="summary__total">
	      <div className="summary__total__label">Total</div>
	      <div className="summary__total__value">
	        {this.props.USCurrencyFormat.format(this.total)}
	      </div>
	    </div>
		)
	};
}
export default Total;