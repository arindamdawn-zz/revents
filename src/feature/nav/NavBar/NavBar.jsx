import React, { Component } from "react";
import { Button } from "antd";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  .leftMenu {
    display: flex;
    .logo {
      margin-right: 2rem;
      font-weight: 600;
    }
    button {
      margin-left: 1rem;
    }
    align-items: center;
  }
  .rightMenu {
    display: flex;
    align-items: center;
    a {
      margin-left: 1rem;
    }
  }
`;

class NavBar extends Component {
  render() {
    return (
      <Menu>
        <div className='leftMenu'>
          <div className='logo'>Re-vents</div>
          <a href='javascript(void)'>Events</a>
          <Button type='primary'>Create Event</Button>
        </div>

        <div className='rightMenu'>
          <a href='javascript(void)'>Login</a>
          <a href='javascript(void)'>Logout</a>
        </div>
      </Menu>
    );
  }
}
export default NavBar;
