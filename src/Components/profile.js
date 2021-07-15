import React,{useState} from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  DropdownButton,
  Dropdown,
  Container,
  Modal
} from "react-bootstrap";
import styled from "styled-components";
import Keytool from "./keyTools";
import DropModal from "./Modal";

const StyledDropdown = styled(DropdownButton)`
  border: 1px solid grey;
  /* width: 50%; */
`;

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Row className="mt-3">
        <Col lg={4}>
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
        <Col lg={8}>
          <Row className="mt-5">
            <div>
              <Dropdown.Header>Key Policy Documents</Dropdown.Header>
              <StyledDropdown
                id="dropdown-item-button"
                title="Select"
                drop="end"
                variant="default"
                onClick={handleShow}
              >
                <Dropdown.ItemText>Select</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </StyledDropdown>
              <DropModal show={show} onHide={handleClose}/>
            </div>
          </Row>
          <Row className="mt-5">
            <Col lg={4}>
              <div>
                <Dropdown.Header>Offer Letter Template</Dropdown.Header>
                <StyledDropdown
                  id="dropdown-item-button"
                  title="Select"
                  drop="end"
                  variant="default"
                >
                  <Dropdown.ItemText>Select</Dropdown.ItemText>
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </StyledDropdown>
              </div>
            </Col>
            <Col lg={4}>
              <div>
                <Dropdown.Header>CTC</Dropdown.Header>
                <StyledDropdown
                  id="dropdown-item-button"
                  title="Select"
                  drop="end"
                  variant="default"
                >
                  <Dropdown.ItemText>Select</Dropdown.ItemText>
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </StyledDropdown>
              </div>
            </Col>
            <Col lg={4}>
              <div>
                <Dropdown.Header>Joining Date</Dropdown.Header>
                <StyledDropdown
                  id="dropdown-item-button"
                  title="Select"
                  drop="end"
                  variant="default"
                >
                  <Dropdown.ItemText>Select</Dropdown.ItemText>
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </StyledDropdown>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Keytool />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
