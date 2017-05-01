import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
const $ = require('jquery');
import { daysOfWeek, monthsOfYear } from '../../constants';
require('../../../scss/eventgrid.scss');

const masonryOptions = {
  transitionDuration: 0,
  gutter: 10,
  columnWidth: 50
};

export default class EventGrid extends React.Component {
  constructor() {
  	super();
  	this.state = {
      events: []
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

  renderGrid() {
  	return (
      this.state.events.map((item, i) => {
    	  const eventDetailsUrl = `/event-details/?id=${i}`;
        return (
          <div className="grid-item" key={i}>
            <a href={eventDetailsUrl}>
              <h3>{item.name}</h3>
              {this.showDateAndTime(item)}
              <p>{item.description}</p>
            </a>
          </div>
        )
      })
  	);
  }

  render() {
  	if (this.state.events) {
      return (
        <Masonry
          className={'grid'}
          elementType={'div'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {this.renderGrid()}
        </Masonry>
      )
  	}
  	return null;
  }
}