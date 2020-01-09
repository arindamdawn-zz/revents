import React, { Component, Fragment } from "react";
import { Card, Avatar, Icon, List, Divider } from "antd";
import Meta from "antd/lib/card/Meta";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event } = this.props;
    return (
      <Fragment>
        <Card
          style={{ marginBottom: "2rem", marginRight: "2rem" }}
          extra={<a href='#'>View</a>}
          title={event.title}
        >
          <Meta
            description={event.description}
            avatar={<Avatar src={event.hostPhotoURL} size={64} />}
          />
          <p>hosted by : {this.props.event.hostedBy}</p>

          <div className='section'>
            <span>
              <Icon type='clock-circle' title='Date' />
            </span>
            {this.props.event.date}
            <span>
              <Icon type='home' title='Location' />
            </span>
            {event.venue}
          </div>
          <Divider />
          <div className='attendees'>
            <List itemLayout='horizontal' grid={{ gutter: 16, column: 12 }}>
              {event.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
            </List>
          </div>
        </Card>
      </Fragment>
    );
  }
}
export default EventListItem;
