import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const events = [
  {
    id: "1",
    title: "Trip to tower of London",
    date: "2018-03-01T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    city: "London, UK",
    venue: "Tower of London, St Katherine's, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/med/men/75.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/med/men/75.jpg"
      },
      {
        id: "b",
        name: "John",
        photoURL: "https://randomuser.me/api/portraits/med/men/75.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to tower of Alaska",
    date: "2018-03-01T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    city: "London, UK",
    venue: "Tower of London, St Katherine's, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/med/men/75.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/med/men/75.jpg"
      },
      {
        id: "b",
        name: "John",
        photoURL: "https://randomuser.me/api/portraits/med/men/75.jpg"
      }
    ]
  }
];
class EventDashboard extends Component {
  state = {
    events: events,
    isOpen: false
  };

  handleIsOpenToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    const { events, isOpen } = this.state;
    return (
      <div>
        <Row>
          <Col span={16}>
            <EventList events={events} />
          </Col>
          <Col span={8}>
            <Button
              type='primary'
              style={{ marginBottom: "1rem" }}
              onClick={this.handleIsOpenToggle}
            >
              Create Event
            </Button>
            {isOpen && <EventForm cancelFormOpen={this.handleIsOpenToggle}/>}
          </Col>
        </Row>
      </div>
    );
  }
}

export default EventDashboard;
