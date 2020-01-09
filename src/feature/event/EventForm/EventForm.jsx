import React, { Component } from "react";
import { Card, Form, Input, Button, DatePicker } from "antd";

class EventForm extends Component {
  render() {
    const { cancelFormOpen } = this.props;
    return (
      <Card>
        <Form>
          <Form.Item>
            <Input placeholder='Title' />
          </Form.Item>
          <Form.Item>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item>
            <Input placeholder='City' />
          </Form.Item>
          <Form.Item>
            <Input placeholder='Venue' />
          </Form.Item>
          <Form.Item>
            <Input placeholder='Hosted By' />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              style={{ marginRight: "1rem" }}
            >
              Submit
            </Button>
            <Button type='default' onClick={cancelFormOpen}>Cancel</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
export default EventForm;
