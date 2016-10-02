import React from 'react';

export default class EventList extends React.Component {

    constructor() {
        super();
        this.events = [];
    }

    componentWillMount() {
        const url = window.location.origin + '/events/'
        $.ajax({
            url,
            datatype: 'json',
            cache: false,
            success: (data) => {
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
