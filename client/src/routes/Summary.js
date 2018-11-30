import React from 'react';
import moment from 'moment';
import { parseWeekday } from './../general/js/utils';

import Header from './../components/Header/Header';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const state = localStorage.getItem('summaryState');
    const parsedState = JSON.parse(state);

    this.setState(parsedState);
  }

  getDeliveryDate() {
    const now = moment();
    const weekday = now.isoWeekday();
    const diff = 7 - weekday;
    const startDate = now.clone().add(diff + parseInt(this.state.chosenMomentId), 'days');
    const nights = startDate.diff(now, 'days');

    return [startDate.format('Do MMMM'), nights];
  }

  render() {
    const [startDate, nights] = this.getDeliveryDate();
    return (
      <div>
        <Header title="Your Summary" />
        <div className="container">
          <div className="summary">
            <p>Thanks for creating a subscription for <strong>{this.state.chosenName}</strong>!</p>
            <p>Our first package will be delivered on <strong>{startDate}</strong>.</p>
            <p>Just <strong>{nights}</strong> nights of sleep left...</p>
            <p>After that <strong>{this.state.chosenName}</strong> will receive our beautiful packages every <strong>{this.state.chosenFrequencyId}</strong> weeks on <strong>{parseWeekday(this.state.chosenMomentId)}</strong>.</p>
          </div>
        </div>
      </div>
    );
  }
}
