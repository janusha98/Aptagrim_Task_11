import React from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  DropdownButton,
  Dropdown,
  Container
} from "react-bootstrap";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="Assets/profile.png" />
            <Card.Body className="text-center">
              <Card.Title>John</Card.Title>
              <Card.Text>
                <p>John@gmail.com</p>
                <p>UX/UI Designer</p>
                <p> 9959149451</p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="text-center">
                <img src="Assets/progress.png" />
              </ListGroupItem>
              <ListGroupItem>
                <p>Hired Date</p>
                <p>19-01-2021</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>Employee Type</p>
                <p>Full Time</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>Notice period</p>
                <p>Immediate</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>Current Location</p>
                <p>Hyderabad, India</p>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col lg={9}>
          <DropdownButton
            id="dropdown-item-button"
            title="Dropdown button"
            drop="end"
          >
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
