import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function ShiftForm() {
  const history = useHistory();

  //define starting conditions for the form based on if a report was passed in

  const [startDate, setstartDate] = useState("");
  const [startTime, setstartTime] = useState("");
  const [endTime, setendTime] = useState("");
  const [holidayPay, setholidayPay] = useState("");

  //define the function to create a new report
  const newShift = async (e) => {
    e.preventDefault();
    history.push("/shifts");
    return;
    /* DISABLING UNTIL BACKEND IS UP
        e.preventDefault()
        const formInfo = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(formInfo),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert('Exercise successfully created!')
        } else {
            alert(`Failed to create exercise. Response code ${response.status}.`)
        };
        history.push("/"); */
  };

  return (
    <div>
      <Form>
        <legend>Create a New Shift Instance:</legend>
        <Row>
          <Col>
            <Form.Label>Start Date:</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setstartDate(e.target.value)}
            />
          </Col>

          <Col>
            <Form.Label>Start Time:</Form.Label>
            <Form.Control
              type="time"
              value={startTime}
              onChange={(e) => setstartTime(e.target.value)}
            />
          </Col>

          <Col>
            <Form.Label>End Time:</Form.Label>
            <Form.Control
              type="time"
              value={endTime}
              onChange={(e) => setendTime(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Check
              type="checkbox"
              value={holidayPay}
              onChange={(e) => setholidayPay(e.target.value)}
              label="Holiday Pay"
            />
          </Col>
        </Row>
        <br />
        <Button variant="primary" type="submit" onClick={newShift}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ShiftForm;
