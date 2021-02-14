import React, { Component } from "react";
import {Navbar, Nav, Button, Form,NavDropdown, FormControl} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
//import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
  

    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand></Navbar.Brand>
      <Nav className="mr-auto">

      <LinkContainer to="/home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/scraper">
           <Nav.Link>Scrape</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/history">
           <Nav.Link>History</Nav.Link>
        </LinkContainer>
         </Nav>
    </Navbar>
    );
  }
}

export default HeaderComponent;
