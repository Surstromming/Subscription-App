import React from 'react';

import './From.scss';

import Input from './../Input/Input';
import Dropdown from './../Dropdown/Dropdown';
import RadioList from './../RadioList/RadioList';

import { parseWeekday } from './../../general/js/utils';

export default class Form extends React.Component {
  getCountryNames = (item, i) => {
    return item.country;
  }

  getCountryIds = (item, i) => {
    return item.id;
  }

  getMoments = (item, i) => {
    return item.country_id === parseInt(this.props.chosenCountryId);
  }

  getMomentNames = (item, i) => {
    return parseWeekday(item.weekday);
  }

  getMomentIds = (item, i) => {
    return item.weekday;
  }

  render() {
    const countryNames = this.props.countries.map(this.getCountryNames);
    const countryIds = this.props.countries.map(this.getCountryIds);
    const moments = this.props.moments.filter(this.getMoments);
    const momentNames = moments.map(this.getMomentNames);
    const momentIds = moments.map(this.getMomentIds);

    return(
      <form className="form" onSubmit={this.props.handleSubmit}>
        <h2 className="form__title title">Who is your recipient?</h2>
        <Input
          label="Full Name"
          placeholder="e.g. Jon Snow"
          id="chosenName"
          name="chosenName"
          handleChange={this.props.handleChange}
          value={this.props.chosenName}
        />
        <Dropdown
          options={countryNames}
          optionValues={countryIds}
          label='Country'
          placeholder='Choose the country'
          id="chosenCountryId"
          name="chosenCountryId"
          value={this.props.chosenCountryId}
          handleChange={this.props.handleChange}
        />
        <Dropdown
          options={momentNames}
          optionValues={momentIds}
          label='Delivery Moments'
          placeholder='Choose the delivery moment'
          id="chosenMomentId"
          name="chosenMomentId"
          value={this.props.chosenMomentId}
          handleChange={this.props.handleChange}
        />
        <RadioList
          options={['Every 2 weeks', 'Every 4 weeks']}
          optionValues={['2', '4']}
          chosenFrequencyId={this.props.chosenFrequencyId}
          handleChange={this.props.handleChange}
          label="Delivery Frequencies"
          name="chosenFrequencyId"
        />
        <div className="form__row">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}
