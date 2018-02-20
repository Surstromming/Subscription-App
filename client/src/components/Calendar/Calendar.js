import React from 'react';
import moment from 'moment';

import './Calendar.scss';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.dates = [];
    this.highlighted = [];
    this.currentDateIndex = null;
  }

  componentWillMount() {
    this.dates = this.createCalendar();
  }

  createCalendar() {
    const now = moment();
    const weekday = now.isoWeekday();
    const diff = this.isWeekend(now) ? 0 : 7;
    const currentDateIndex = this.isWeekend(now) ? 5 : 4 + weekday;

    const startDate = now.clone().subtract(weekday + diff, 'days');
    const endDate = startDate.clone().add(8, 'weeks');

    this.currentDateIndex = currentDateIndex;

    return this.getDates(startDate, endDate);
  }

  getDates(startDate, endDate) {
    const now = startDate.clone();
    const dates = [];

    while (now.isSameOrBefore(endDate)) {
      const isWeekend = this.isWeekend(now);

      if (!isWeekend) {
        dates.push(now.date());
      }

      now.add(1, 'days');
    }

    return dates;
  }

  isWeekend(moment) {
    const weekday = moment.isoWeekday();
    return (weekday === 6) || (weekday === 7);
  }

  highlightDates() {
    if (this.props.moment) {
      this.highlighted = [];
      const n = this.props.frequency === '2' ? 10 : 20;
      const firstIndex = 9 + parseInt(this.props.moment);
      for (let i = firstIndex; i < this.dates.length; i += n) {
        this.highlighted.push(i);
      }
    } else {
      this.highlighted = [];
    }
  }

  renderDates = (date, i) => {
    return(
      <div key={`date-${i}`} className={`calendar__cell${i === this.currentDateIndex ? ` is-active` : ''}${this.highlighted.includes(i) ? ` is-highlighted` : ''}`}>
        <span className="calendar__date">{date}</span>
      </div>
    )
  }

  render() {
    this.highlightDates();
    return(
      <div className="calendar">
        <div className="calendar__header">
          <div className="calendar__cell">M</div>
          <div className="calendar__cell">T</div>
          <div className="calendar__cell">W</div>
          <div className="calendar__cell">T</div>
          <div className="calendar__cell">F</div>
        </div>
        <div className="calendar__body">
          {this.dates.map(this.renderDates)}
        </div>
      </div>
    )
  }
}
