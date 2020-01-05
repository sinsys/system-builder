import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class Customize extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: this.props.selected
		};
		this.handleOption = (e) => {
			console.log({e});
		}
	};

	render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type = "radio"
              id = {itemHash}
              className = "feature__option"
              nam = {slugify(feature)}
              checked = {item.name === this.state.selected[feature].name}
              onChange = {this.handleOption}
            />
            <label htmlFor = {itemHash} className="feature__label">
              {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

		return (
			<form className="main__form">
				<h2>
					Customize your laptop
				</h2>
				{features}
			</form>
		)
	};
}

export default Customize;

        // <main>
        //   <form className="main__form">
        //     <h2>Customize your laptop</h2>
        //     {features}
        //   </form>
        //   <section className="main__summary">
        //     <h2>Your cart</h2>
        //     {summary}
        //     <div className="summary__total">
        //       <div className="summary__total__label">Total</div>
        //       <div className="summary__total__value">
        //         {USCurrencyFormat.format(total)}
        //       </div>
        //     </div>
        //   </section>
        // </main>

        // onChange={e => this.updateFeature(feature, item)}