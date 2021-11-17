import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function ReportForm({ reportToEdit }) {
  const history = useHistory();

  //define starting conditions for the form based on if a report was passed in

  const [callID, setcallID] = useState(
    reportToEdit != null ? reportToEdit.callID : ""
  );
  const [shiftID, setshiftID] = useState(
    reportToEdit != null ? reportToEdit.shiftID : ""
  );
  const [authorID, setauthorID] = useState(
    reportToEdit != null ? reportToEdit.authorID : "lb"
  );
  const [patientFirstName, setpatientFirstName] = useState(
    reportToEdit != null ? reportToEdit.patientFirstName : ""
  );
  const [patientLastName, setpatientLastName] = useState(
    reportToEdit != null ? reportToEdit.patientLastName : ""
  );
  const [patientGender, setpatientGender] = useState(
    reportToEdit != null ? reportToEdit.patientGender : "Male"
  );
  const [patientAge, setpatientAge] = useState(
    reportToEdit != null ? reportToEdit.patientAge : ""
  );
  const [incidentDescription, setincidentDescription] = useState(
    reportToEdit != null ? reportToEdit.incidentDescription : ""
  );
  const [medicationAdministered, setmedicationAdministered] = useState(
    reportToEdit != null ? (reportToEdit.medicationAdministered) : "0"
  );

  //set the flag for if a new report is being created or if one is being updated
  let newFlag = false;
  if (reportToEdit == null) {
    newFlag = true;
  }

  //define the function to create a new report
  const newReport = async (e) => {
    e.preventDefault()
    const formInfo = {shiftID, callID, authorID, patientFirstName, patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription};
    const response = await fetch('http://flip3.engr.oregonstate.edu:4422/reports', {
        method: 'POST',
        body: JSON.stringify(formInfo),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 201) {
        alert('Report successfully created!')
    } else {
        alert(`Failed to create report. Response code ${response.status}.`)
    };
    history.push("/reports");
  };

  //define the function to update an exercise
  const updateReport = async (e) => {
    e.preventDefault();
    history.push("/reports");
    return;
    /* DISABLING UNTIL BACKEND IS UP
        e.preventDefault()
        const modExercise = {name, reps, weight, unit, date}
        //fetch the PUT route from express server
        const response = await fetch(`/exercises/${exercisetoEdit._id}`, {
            method: 'PUT', 
            body: JSON.stringify(modExercise),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (response.status === 200) {
            alert('Successfully updated exercise!')
        } else {
           alert(`Failed to update the exercise with ID ${exercisetoEdit._id}, status code ${response.status}`)
        }
        history.push('/') */
  };

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Label>Call ID:</Form.Label>
            <Form.Control
              type="number"
              value={callID}
              placeholder="Auto increment integer"
              onChange={(e) => setcallID(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Shift ID:</Form.Label>
            <Form.Control
              type="number"
              value={shiftID}
              placeholder="Auto increment integer"
              onChange={(e) => setshiftID(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label></Form.Label>
            Author ID:
            <Form.Control
              type="number"
              value={authorID}
              placeholder="Auto increment integer"
              onChange={(e) => setauthorID(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Label>Patient First Name:</Form.Label>
            <Form.Control
              type="text"
              value={patientFirstName}
              placeholder="John"
              onChange={(e) => setpatientFirstName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Patient Last Name:</Form.Label>
            <Form.Control
              type="text"
              value={patientLastName}
              placeholder="Doe"
              onChange={(e) => setpatientLastName(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Label>Patient Sex:</Form.Label>
            <Form.Select
              value={patientGender}
              onChange={(e) => setpatientGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Patient Age:</Form.Label>
            <Form.Control
              type="number"
              value={patientAge}
              placeholder="e.g. 15"
              onChange={(e) => setpatientAge(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Check
              label="Medication Administered"
              type="checkbox"
              value="1"
              onChange={(e) => setmedicationAdministered(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Label>Incident Description:</Form.Label>
            <Form.Control
              as="textarea"
              value={incidentDescription}
              placeholder="Record the details of the incident here."
              maxLength={65500}
              onChange={(e) => setincidentDescription(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Button variant="primary" onClick={newFlag ? newReport : updateReport}>
          Submit
        </Button>
        <br />
      </Form>
    </div>
  );
}

export default ReportForm;
