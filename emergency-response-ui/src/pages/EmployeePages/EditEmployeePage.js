import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function EditEmployeePage({ employeeToEdit }) {
  const [employeeID] = useState(employeeToEdit.employeeID);
  const [firstName, setFirstName] = useState(employeeToEdit.firstName);
  const [lastName, setLastName] = useState(employeeToEdit.lastName);
  const [role, setRole] = useState(employeeToEdit.role);
  const [compensationRate, setCompensationRate] = useState(
    employeeToEdit.compensationRate
  );
  const [areaCode, setAreaCode] = useState(employeeToEdit.areaCode);
  const [phoneNumber, setPhoneNumber] = useState(employeeToEdit.phoneNumber);
  const [employeeEmail, setEmployeeEmail] = useState(
    employeeToEdit.employeeEmail
  );

  const history = useHistory();

  const editEmployee = async (e) => {
    e.preventDefault()
    const editedEmployee = {employeeID, firstName, lastName, role, compensationRate, areaCode, phoneNumber, employeeEmail}
    const response = await fetch('http://flip3.engr.oregonstate.edu:4422/employees', {
      method: 'PUT',
      body: JSON.stringify(editedEmployee),
      header: {
        'Content-Type': 'application/json',
      }
    })
    if (response === 204) {
      alert(`Employee with id: ${employeeID}, has been updated`);
    }  
    else {
      alert("unable to update employee");
    }
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
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Role:</Form.Label>
          <Form.Control
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Compensation Rate (hourly):</Form.Label>
          <Form.Control
            type="number"
            value={compensationRate}
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
            placeholder={areaCode}
            onChange={(e) => setAreaCode(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="text"
            value={phoneNumber}
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
            onChange={(e) => setEmployeeEmail(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button
            variant="primary"
            onClick={(e) =>
              editEmployee(e)
            }
          >
            SUBMIT
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
export default EditEmployeePage;
