import React, { Component } from "react";
import { Avatar, List } from "antd";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <div>
        <List.Item>
          <Avatar src={attendee.photoURL} />
        </List.Item>
      </div>
    );
  }
}
export default EventListAttendee;
