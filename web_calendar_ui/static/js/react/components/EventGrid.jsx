import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
import {
  showTimeInDayAndMonth,
  showTimeInHoursAndMinutes
} from '../../utils';

require('../../../scss/eventgrid.scss');

const masonryOptions = {
  transitionDuration: 0,
  gutter: 10,
  columnWidth: 50
};

export default class EventGrid extends React.Component {
  renderGrid() {
    return (
      this.props.events.map((item, i) => {
        const eventDetailsUrl = `/event-details/?id=${i}`;
        return (
          <div className="grid-item" key={i}>
            <a href={eventDetailsUrl}>
              <h3>{item.title}</h3>
              {showTimeInHoursAndMinutes(item)}
              <div>
                {showTimeInDayAndMonth(item)}
              </div>
              <p>{item.description}</p>
            </a>
          </div>
        )
      })
    );
  }

  render() {
    if (this.props.events) {
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

EventGrid.proptypes = {
  events: React.PropTypes.array
};
