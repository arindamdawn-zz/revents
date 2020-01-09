import React, { Component } from "react";
import EventDashboard from "../../feature/event/EventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar/NavBar";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header style={{ backgroundColor: "#fff" }}>
            <NavBar></NavBar>
          </Header>
          <Content style={{ padding: '50px' }}>
            <EventDashboard />
          </Content>
          <Footer>
            <p>Footer Content</p>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
