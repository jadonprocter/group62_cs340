import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function ShiftForm() {
  const port = 4422
  const history = useHistory();
  const [shiftDate, setShiftDate] = useState(null);
  const [startTime, setstartTime] = useState(null);
  const [endTime, setendTime] = useState(null);
  const [holidayPay, setholidayPay] = useState(false);

  //define the function to create a new report
  const newShift = async (e) => {
    e.preventDefault();
    const newShift = {shiftDate, startTime, endTime, holidayPay};
    const response = await fetch(`http://flip3.engr.oregonstate.edu:${port}/shifts`, {
      method: 'POST', 
      body: JSON.stringify(newShift),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response.status === 201) {
      alert('New Shift successfully added!')
      history.go(0)
    } 
    else {
        let responseMessage = await response.json()
        responseMessage = JSON.stringify(responseMessage)
        alert(`Failed to add new shift. SQL Message: ${responseMessage}.`)
    };
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
              value={shiftDate}
              onChange={(e) => setShiftDate(e.target.value)}
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
              onChange={() => setholidayPay(!holidayPay)}
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
