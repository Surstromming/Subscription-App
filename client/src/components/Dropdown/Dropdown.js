import React from 'react';

export default class Dropdown extends React.Component {
  renderOptions = (option, i) => {
    return(
      <option value={this.props.optionValues[i]} key={i}>{option}</option>
    )
  }

  render() {
    return(
      <div className="form__row">
      <label className="form__label">
        {this.props.label}
      </label>
      <div className="form__select">
        <select
          className="form__field"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.handleChange}
          required={true}
        >
          <option value="" disabled>{this.props.placeholder}</option>
          {this.props.options.map(this.renderOptions)}
        </select>
        <svg className="form__icon icon" width="13" height="8" aria-hidden="true" focusable="false"><use xlinkHref="#icon-chevron-down"/></svg>
      </div>
    </div>
    )
  }
}
