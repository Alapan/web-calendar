import React from 'react';
import EventList from './EventList.jsx';
import EventGrid from './EventGrid.jsx';
require('../../../scss/container.scss');

export default class Container extends React.Component {
  constructor() {
  	super();
  	this.state = {
  	  displayType: ''
  	};
  }

  renderDisplayTypeOptions() {
  	return (
      <div className="btn-group pull-right">
        <button 
          type="button"
          className="btn btn-default"
          onClick={() => this.setState({ displayType: 'grid'})}
        >Grid</button>
        <button type="button"
          className="btn btn-default"
          onClick={() => this.setState({ displayType: 'list'})}
        >List</button>
        <button type="button"
          className="btn btn-default"
          onClick={() => this.setState({ displayType: 'calendar'})}
        >Calendar</button>
      </div>
  	);
  }

  render() {
    let display = '';
    switch(this.state.displayType) {
      case 'grid':
        display = <EventGrid />;
        break;
      case 'list':
        display = <EventList />;
        break;
      default:
        display = <EventGrid />;
    }
  	return (
  	  <div>
  	    <div className="well well-sm display-options-container">
  	      { this.renderDisplayTypeOptions() }
  	    </div>
        {display}
      </div>
  	);
  }
}