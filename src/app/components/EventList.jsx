import React from 'react';
const $ = require('jquery');

export default class EventList extends React.Component {

    constructor() {
        super();
        this.events = [];
    }

    componentWillMount() {
        const url = window.location.origin + '/events/';
        $.ajax({
            url,
            datatype: 'json',
            cache: false,
            success: (data) => {
                console.log(data);
                this.events = data;
            }
        });
    }

    render() {
        return (
            <ul className="list-group">
                { this.events.map((event) => {
                      return <li className="list-group-item">{ event }</li>;
                  })
                }
            </ul>
        );
    }
}
