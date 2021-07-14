import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import styled from "styled-components";
const Snavbar = styled(Navbar)`
  background-color: #fcde73;
`;
const Header = () => {
  return (
    <Snavbar bg="#FCDE73" expand="lg">
      <Navbar.Brand href="#">Employees</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Snavbar>
  );
};
export default Header;
