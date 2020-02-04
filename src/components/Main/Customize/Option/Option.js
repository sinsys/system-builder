import React, { Component } from 'react';

class Option extends Component {

	render() {
		return (
      <div>
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={this.props.item.name}
          checked={this.props.checked}
          onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
		)
	};
}
export default Option;