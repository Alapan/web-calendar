import React from 'react';
import BigCalendar from 'react-big-calendar';
import { getDateObjectFromTime } from '../../utils';
import moment from 'moment';
require('../../../scss/calendar.scss');

export default class EventCalendar extends React.Component {
  render() {
    if (this.props.events) {
      BigCalendar.setLocalizer(
        BigCalendar.momentLocalizer(moment)
      );

      return (
        <div className="calendar-container">
          <BigCalendar
            events={this.props.events}
            defaultView='month'
            defaultDate={new Date()}
            startAccessor={(event) => getDateObjectFromTime(event.start)}
            endAccessor={(event) => getDateObjectFromTime(event.end)}
          />
        </div>
      );
    }
    return null;
  }
}

EventCalendar.proptypes = {
  events: React.PropTypes.array
};