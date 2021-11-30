import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
function CreateEmployeePage() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();
  const [compensationRate, setCompensationRate] = useState();
  const [areaCode, setAreaCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [employeeEmail, setEmployeeEmail] = useState();

  const history = useHistory();

  const createEmployee = async (e) => {
    e.preventDefault();
    const newEmployee = {firstName, lastName, role, compensationRate, areaCode, phoneNumber, employeeEmail}
    const response = await fetch(`http://flip3.engr.oregonstate.edu:4422/employees`, {
      method: 'POST', 
      body: JSON.stringify(newEmployee),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response.status === 201) {
      alert('New Employee successfully added!')
    } 
    else {
        alert(`Failed to add new employee. Response code: ${response.status}.`)
    };
    history.push("/employees");
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Role:</Form.Label>
          <Form.Select onChange={(e) => setRole(e.target.value)}>
            <option value="dispatcher">Dispatcher</option>
            <option value="ambulance-driver">Ambulance Driver</option>
            <option value="paramedic">Paramedic</option>
            <option value="trainee">Trainee</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Compensation Rate:</Form.Label>
          <Form.Control
            type="Number"
            value={compensationRate}
            placeholder="10"
            onChange={(e) => setCompensationRate(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Area Code:</Form.Label>
          <Form.Control
            type="text"
            value={areaCode}
            placeholder="000"
            onChange={(e) => setAreaCode(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Phone Number:</Form.Label>
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
          <Form.Label>Employee Email:</Form.Label>
          <Form.Control
            type="text"
            value={employeeEmail}
            placeholder="name@example.com"
            onChange={(e) => setEmployeeEmail(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button
            variant="primary"
            onClick={ (e) => createEmployee(e) }
          >
            Add New Employee
          </Button>
        </Col>
      </Row>
      <br />
    </Form>
  );
}

export default CreateEmployeePage;
