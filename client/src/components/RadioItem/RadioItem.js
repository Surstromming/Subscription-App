import React from 'react';

import './RadioItem.scss';

export default class RadioItem extends React.Component {
  render() {
    return(
      <div className="radio-item">
        <input
          type="radio"
          className="radio-item__input visually-hidden"
          id={this.props.id}
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          checked={this.props.checked}
        />
        <label className="radio-item__label" htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    )
  }
}
