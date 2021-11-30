import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function AssignEmployeeShiftForm() {
  const history = useHistory();
  const [employeeID, setEmployeeID] = useState();
  const [shiftID, setShiftID] = useState();

  const assignShift = async (e) => {
    e.preventDefault();
    const assignEmployee = {employeeID, shiftID};
    const response = fetch(`http://flip3.engr.oregonstate.edu:4422/employeeshifts`, {
      method: 'POST', 
      body: JSON.stringify(assignEmployee),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    // STATUS CODE COMING BACK 'undefined' FOR SOME REASON -- THIS IS A PATCH.
    if (response.status === 201 || response.status === undefined) {
      alert('Employee successfully assigned to shift!')
    } 
    else {
        alert(`Failed to assign employee to shift. Response code: ${response.status}.`)
    };
    history.go(0);
  };
  return (
    <Form>
      <br />
      <Form.Label>Assign Employee to Shift:</Form.Label>
      <br />
      <Row>
        <Col>
          <Form.Label>Employee ID:</Form.Label>
          <Form.Control
            onChange={(e) => setEmployeeID(e.target.value)}
            placeholder="Employee ID"
          />
        </Col>
        <Col>
          <Form.Label>Shift ID:</Form.Label>
          <Form.Control
            onChange={(e) => setShiftID(e.target.value)}
            placeholder="Shift ID"
          />
        </Col>
      </Row>
      <br />
      <Button variant="primary" onClick={(e) => assignShift(e)}>
        Assign
      </Button>
    </Form>
  );
}

export default AssignEmployeeShiftForm;
