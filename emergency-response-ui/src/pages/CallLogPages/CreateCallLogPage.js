import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function CreateCallLogPage() {
  const history = useHistory();
  // const [callID, setCallID] = useState();
  const [shiftID, setShiftID] = useState();
  const [dispatcherID, setDispatcherID] = useState();
  const [callTimeStamp, setCallTimeStamp] = useState();
  const [responseType, setResponseType] = useState();
  const [callerFirstName, setCallerFirstName] = useState();
  const [callerLastName, setCallerLastName] = useState();
  const [chiefComplaint, setChiefComplaint] = useState();
  const [areaCode, setAreaCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [zipCode, setZipCode] = useState();
  const [phoneNotes, setPhoneNotes] = useState();
  
  const getTimeStamp = () => {
    const date = new Date();
    const stringDate = date.toISOString();
    setCallTimeStamp(stringDate)
  }

  const createCallLog = async (e) => {
    getTimeStamp();
    e.preventDefault();
    const newCallLog = {shiftID, dispatcherID, callTimeStamp, responseType, callerFirstName, callerLastName, chiefComplaint, areaCode, phoneNumber, streetAddress, zipCode, phoneNotes};
    const response = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_PORT}/calllogs`, {
      method: 'POST',
      body: JSON.stringify(newCallLog),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response.status === 201) {
      alert('New Call Log created!')
    } 
    else {
        alert(`Failed to create call log. Response code: ${response.status}.`)
    };
    history.push("/call-logs");
  };

  return (
    <Form>
      <Row>
        {/* <Col>
          <Form.Label>Call ID:</Form.Label>
          <Form.Control
            type="number"
            value={callID}
            placeholder="Call ID"
            onChange={(e) => setCallID(e.target.value)}
          />
        </Col> */}
        <Col>
          <Form.Label>Shift ID:</Form.Label>
          <Form.Control
            type="number"
            value={shiftID}
            placeholder="Shift ID"
            onChange={(e) => setShiftID(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Dispatcher ID:</Form.Label>
          <Form.Control
            type="number"
            value={dispatcherID}
            placeholder="Dispatcher ID"
            onChange={(e) => setDispatcherID(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Response Type:</Form.Label>
          <Form.Select onChange={(e) => setResponseType(e.target.value)}>
            <option value="default">Default</option>
            <option value="different-default">Different Default</option>
          </Form.Select>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Caller First Name:</Form.Label>
          <Form.Control
            type="text"
            value={callerFirstName}
            placeholder="Caller First Name"
            onChange={(e) => setCallerFirstName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Caller Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={callerLastName}
            placeholder="Caller Last Name"
            onChange={(e) => setCallerLastName(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Chief Complaint:</Form.Label>
          <Form.Control
            type="text"
            value={chiefComplaint}
            placeholder="Chief Complaint"
            onChange={(e) => setChiefComplaint(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs lg="2">
          <Form.Label>Area Code:</Form.Label>
          <Form.Control
            type="text"
            value={areaCode}
            placeholder="000"
            onChange={(e) => setAreaCode(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Phone Number: </Form.Label>
          <Form.Control
            type="text"
            value={phoneNumber}
            placeholder="000-0000 (exclude area code)"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Street Address:</Form.Label>
          <Form.Control
            type="text"
            value={streetAddress}
            placeholder="123 Example Street"
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </Col>

        <Col>
          <Form.Label> Zip Code:</Form.Label>
          <Form.Control
            type="text"
            value={zipCode}
            placeholder="12345"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Phone Notes:</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            value={phoneNotes}
            placeholder="Notes..."
            onChange={(e) => setPhoneNotes(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button
            variant="primary"
            onClick={(e) =>
              createCallLog(e)
            }
          >
            Create New Call Log
          </Button>
        </Col>
      </Row>
      <br />
    </Form>
  );
}

export default CreateCallLogPage;
