import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function ReportForm({ reportToEdit }) {
  const history = useHistory();
  // const port = 4423

  //define starting conditions for the form based on if a report was passed in
  const [callID, setcallID] = useState(
    reportToEdit != null ? reportToEdit.callID : null
  );
  const [shiftID, setshiftID] = useState(
    reportToEdit != null ? reportToEdit.shiftID : null
  );
  const [authorID, setauthorID] = useState(
    reportToEdit != null ? reportToEdit.authorID : null
  );
  const [patientFirstName, setpatientFirstName] = useState(
    reportToEdit != null ? reportToEdit.patientFirstName : null
  );
  const [patientLastName, setpatientLastName] = useState(
    reportToEdit != null ? reportToEdit.patientLastName : null
  );
  const [patientGender, setpatientGender] = useState(
    reportToEdit != null ? reportToEdit.patientGender : "Male"
  );
  const [patientAge, setpatientAge] = useState(
    reportToEdit != null ? reportToEdit.patientAge : null
  );
  const [incidentDescription, setincidentDescription] = useState(
    reportToEdit != null ? reportToEdit.incidentDescription : null
  );
  const [medicationAdministered, setmedicationAdministered] = useState(
    reportToEdit != null ? (reportToEdit.medicationAdministered) : "1"
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
    const response = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_URL}/reports`, {
        method: 'POST',
        body: JSON.stringify(formInfo),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 201) {
        alert('Report successfully created!')
    } else {
        console.log(response)
        alert(`Failed to create report. Response code ${response.status}.`)
    };
    history.push("/reports");
  };

  //define the function to update a report
  const updateReport = async (e) => {
    e.preventDefault();
    const updateObject = {shiftID, callID, authorID, patientFirstName, patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription};
    const response = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_URL}/reports/${reportToEdit.reportID}`, {
        method: 'PUT',
        body: JSON.stringify(updateObject),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 200) {
        alert('Report successfully updated!')
    } else {
        alert(`Failed to update report. Response code ${response.status}.`)
    };
    history.push("/reports");
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
            <Form.Label>Author ID:</Form.Label>
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
            <Form.Label>Medication Administered:</Form.Label>
              <Form.Select
                value={medicationAdministered}
                onChange={(e) => setmedicationAdministered(e.target.value)}
              >
                <option value="1">Yes</option>
                <option value="0">No</option>
            </Form.Select>
          </Col>
          <Col></Col>
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
