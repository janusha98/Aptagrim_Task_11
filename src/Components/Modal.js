import React, { useState } from "react";
import { Button, Modal, Col, Row } from "react-bootstrap";
import styled from "styled-components";
const List = styled.li`
  list-style-type: none;
  padding: 4px;
`;
const SelectModal = (props) => {
  const Documents = [
    "Employment Policy",
    "Internship Policy",
    "Covid 19 Policy",
    "Leave policy",
    "Assest Policy"
  ];
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Key Policy Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Documents.map((value, id) => {
            return (
              <List key={id}>
                <Row>
                  <Col lg={8}>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${id}`}
                      name={value}
                      value={value}
                    />
                    <label htmlFor={`custom-checkbox-${id}`}>{value}</label>
                  </Col>
                  <Col lg={4}>
                    <button>view</button>
                  </Col>
                </Row>
              </List>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SelectModal;
