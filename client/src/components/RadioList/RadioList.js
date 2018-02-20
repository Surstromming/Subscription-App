import React from 'react';

import './RadioList.scss';

import RadioItem from './../RadioItem/RadioItem';

export default class RadioList extends React.Component {
  renderOptions = (option, i) => {
    return(
      <RadioItem
        key={i}
        id={`radio-option-${i}`}
        label={option}
        name={this.props.name}
        value={this.props.optionValues[i]}
        onChange={this.props.handleChange}
        checked={this.props.chosenFrequencyId === this.props.optionValues[i]}
      />
    )
  }

  render() {
    return(
      <div className="form__row">
        <div className="form__label">{this.props.label}</div>
        <div className="radio-list">
          {this.props.options.map(this.renderOptions)}
        </div>
      </div>
    )
  }
}
