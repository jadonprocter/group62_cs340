import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AssignEmployeeShiftForm() {
  const [employeeID, setEmployeeID] = useState();
  const [shiftID, setShiftID] = useState();

  const assignShift = () => {
    alert("Not implemented (there is no backend yet)");
    // fetch and create
    return;
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
      <Button variant="primary" onClick={() => assignShift()}>
        Assign
      </Button>
    </Form>
  );
}

export default AssignEmployeeShiftForm;
