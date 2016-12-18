import React from 'react';
const $ = require('jquery');
import { daysOfWeek, monthsOfYear } from '../constants';

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: ''
    };
  }

  componentWillMount() {
    $.get('http://localhost:3000/events', (data) => {
      this.setState({
        events: data
      });
    });
  }

  showDateAndTime(row) {
    const startDate = new Date(row.start_date);
    const endDate = new Date(row.end_date);
    let day = '';
    let month = '';
    let date = '';

    // If start and end dates are the same
    if (startDate.getTime() === endDate.getTime()) {
      const d = new Date(startDate);
      day =  daysOfWeek[d.getDay()];
      month = monthsOfYear[d.getMonth()];
      date = d.getDate();
    }
    return (<b>{`${day}\t${month}\t${date}\t${row.start_time}\t-\t${row.end_time}`}</b>);
  }

  render() {
    if (this.state.events) {
      return (
        <ul className="list-group">
          {this.state.events.map((row, i) => {
            return (
              <li key={i} className="list-group-item">
                <h3>{row.name}</h3>
                {this.showDateAndTime(row)}
                <p>{row.description}</p>
              </li>
            )
          })}
        </ul>
      )
    }
    return null;
  }
}
