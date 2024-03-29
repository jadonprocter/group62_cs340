import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function EditEmployeePage({ employeeToEdit }) {
  const [employeeID] = useState(employeeToEdit.employeeID);
  const [firstName, setEmployeeFirstName] = useState(employeeToEdit.firstName);
  const [lastName, setEmployeeLastName] = useState(employeeToEdit.lastName);
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
    const editedEmployee = {firstName, lastName, role, compensationRate, areaCode, phoneNumber, employeeEmail};
    console.log(editedEmployee);
    const response = await fetch(`http://flip3.engr.oregonstate.edu:4422/employees/${employeeToEdit.employeeID}`, {
      method: 'PUT',
      body: JSON.stringify(editedEmployee),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response === 200) {
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
            onChange={(e) => setEmployeeFirstName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setEmployeeLastName(e.target.value)}
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
