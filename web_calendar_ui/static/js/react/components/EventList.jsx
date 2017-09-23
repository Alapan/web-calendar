import React from 'react';
const $ = require('jquery');
import { daysOfWeek, monthsOfYear } from '../../constants';
import {
  showTimeInDayAndMonth,
  showTimeInHoursAndMinutes
} from '../../utils';

export default class EventList extends React.Component {
  renderEventList() {
    return (
      <ul className="list-group">
        { this.props.events.map((item, i) => {
          const eventDetailsUrl = `/event-details/?id=${i}`;
          return (
            <li key={i} className="list-group-item">
              <a href={eventDetailsUrl}>
                <h3>{item.title}</h3>
                {showTimeInHoursAndMinutes(item)}
                <div>
                  {showTimeInDayAndMonth(item)}
                </div>
                <p>{item.description}</p>
              </a>
            </li>
          )
        })}
      </ul>
    );
  }

  render() {
    if (this.props.events) {
      return this.renderEventList();
    }
    return null;
  }
}

EventList.propTypes = {
  events: React.PropTypes.array
};
