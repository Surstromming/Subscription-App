import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import './Subscription.scss';

import Calendar from './../Calendar/Calendar';
import Form from './../Form/Form';

export default class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenName: '',
      chosenCountryId: '',
      chosenMomentId: '',
      chosenFrequencyId: '2',
      countries: [],
      moments: [],
      fireRedirect: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const countriesPromise = axios.get('/api/v1/countries');
    const deliveryPromise = axios.get('/api/v1/delivery');
    const [countriesResponse, deliveryResponse] = await Promise.all([countriesPromise, deliveryPromise]);
    const countries = countriesResponse.data;
    const moments = deliveryResponse.data;

    this.setState({ countries, moments });
  }

  handleChange = (event) => {
    const field = event.target;
    const state = {...this.state};

    state[field.name] = field.value;

    if (field.name === 'chosenCountryId') {
      state['chosenMomentId'] = '';
    }

    this.setState(state);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const state = {...this.state};

    localStorage.setItem('summaryState', JSON.stringify(state));

    this.setState({ fireRedirect: true });
  }

  render() {
    const fireRedirect = this.state.fireRedirect;

    return(
      <main role="main">
        <div className="container">
          <div className="subscription">
            <div className="subscription__column">
              <Calendar
                moment={this.state.chosenMomentId}
                frequency={this.state.chosenFrequencyId}
              />
            </div>
            <div className="subscription__column">
              <Form
                countries={this.state.countries}
                moments={this.state.moments}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                chosenCountryId={this.state.chosenCountryId}
                chosenMomentId={this.state.chosenMomentId}
                chosenFrequencyId={this.state.chosenFrequencyId}
              />
              { fireRedirect && (<Redirect to={'/summary'} />) }
            </div>
          </div>
        </div>
      </main>
    )
  }
}
