import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import Option from './Option/Option';

class Customize extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: this.props.selected
		};
	};

  render() {
    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        </div>
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Object.keys}
      </form>
    )
  }
}

export default Customize;