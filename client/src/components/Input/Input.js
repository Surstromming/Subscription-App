import React from 'react';

export default class Input extends React.Component {
  render() {
    return(
      <div className="form__row">
        <label className="form__label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          className="form__field"
          type="text"
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
          required={true}
        />
      </div>
    )
  }
}
