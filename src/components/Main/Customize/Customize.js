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
    // console.log(this.props);
    const features = Object.keys(this.props.features).map((feature, idx) => {
      // console.log(feature);
      const featureHash = feature + '-' + idx;

      const options = this.props.features[feature].map(item => {
        // console.log(item);
        const itemHash = slugify(JSON.stringify(item));
        return (
          <fieldset 
            className = "feature" 
            key = {featureHash}
          >
            <legend 
              className = "feature__name">
              <h3>
                {feature}
              </h3>
            </legend>

            <Option
              key = {itemHash}
              itemHash = {itemHash}
              className = "feature__item"
              item = {item}
              feature = {feature}
            />
          </fieldset>

        );
      });
    });
    return (
      <form 
        className = "main__form"
      >
        <h2>
          Customize your laptop
        </h2>
        {Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <fieldset 
                className = "feature" 
                key = {featureHash}
              >
                <legend 
                  className = "feature__name">
                  <h3>
                    {feature}
                  </h3>
                </legend>

                <Option
                  key = {itemHash}
                  itemHash = {itemHash}
                  className = "feature__item"
                  item = {item}
                  feature = {feature}
                />
              </fieldset>
            );
          });
        })};
      </form>
    )
  };
}

export default Customize;


    // const features = Object.keys(this.props.features).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const options = this.props.features[feature].map(item => {
    //     const itemHash = slugify(JSON.stringify(item));
    //     return (
    //       <div key={itemHash} className="feature__item">
    //         <input
    //           type="radio"
    //           id={itemHash}
    //           className="feature__option"
    //           name={slugify(feature)}
    //           checked={item.name === this.state.selected[feature].name}
    //           onChange={e => this.updateFeature(feature, item)}
    //         />
    //         <label htmlFor={itemHash} className="feature__label">
    //           {item.name} ({USCurrencyFormat.format(item.cost)})
    //         </label>
    //       </div>
    //     );
    //   });

    //   return (
    //     <fieldset className="feature" key={featureHash}>
    //       <legend className="feature__name">
    //         <h3>{feature}</h3>
    //       </legend>
    //       {options}
    //     </fieldset>
    //   );
    // });