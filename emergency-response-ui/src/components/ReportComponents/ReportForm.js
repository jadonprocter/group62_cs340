import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function ReportForm({ reportToEdit, callChoices, shiftChoices, authorChoices }) {
  const history = useHistory();
  const port = 4422

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
  const [reportTitle, setreportTitle] = useState(
    reportToEdit != null ? reportToEdit.reportTitle : null
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
    const formInfo = {shiftID, callID, authorID, reportTitle, patientFirstName, patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription};
    const response = await fetch(`http://flip3.engr.oregonstate.edu:4422/reports`, {
        method: 'POST',
        body: JSON.stringify(formInfo),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 201) {
        alert('Report successfully created!')
        history.push("/reports")
    } else {
        let responseMessage = await response.json()
        responseMessage = JSON.stringify(responseMessage)
        alert(`Failed to create report! SQL message: ${responseMessage}`)
    };
  };

  //define the function to update a report
  const updateReport = async (e) => {
    e.preventDefault();
    const updateObject = {shiftID, callID, authorID, reportTitle, patientFirstName, patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription};
    const response = await fetch(`http://flip3.engr.oregonstate.edu:4422/reports/${reportToEdit.reportID}`, {
        method: 'PUT',
        body: JSON.stringify(updateObject),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 200) {
        alert('Report successfully updated!')
        history.push("/reports");
    } else {
        let responseMessage = await response.json()
        responseMessage = JSON.stringify(responseMessage)
        alert(`Failed to update report! SQL message: ${responseMessage}`)
    };
  };

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Label>Report Title:</Form.Label>
            <Form.Control
              type="text"
              value={reportTitle}
              placeholder="Title (e.g. Fire response - few word desc.)"
              onChange={(e) => setreportTitle(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Label>Call ID:</Form.Label>
            <Form.Select 
                value={callID}
                placeholder='call ID' 
                onChange={(e) => setcallID(e.target.value)}>
                    <option value={null}>ID: Response Type, Address, Chief Complaint </option>
                    {callChoices.map((call) => {
                        return (
                            <option key={call.callID} value={call.callID}> 
                                {call.callID + ': ' + call.responseType + ', ' + call.streetAddress + ', ' + call.chiefComplaint}
                            </option>
                        )
                    })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Shift ID:</Form.Label>
            <Form.Select 
                value={shiftID}
                placeholder='shift ID' 
                onChange={(e) => setshiftID(e.target.value)}>
                    <option value={null}>ID: Shift Date, StartTime - EndTime </option>
                    {shiftChoices.map((shift) => {
                        return (
                            <option key={shift.shiftID} value={shift.shiftID}> 
                                {shift.shiftID + ': ' + shift.shiftDate + ', ' + shift.startTime + '-' + shift.endTime}
                            </option>
                        )
                    })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Author ID:</Form.Label>
            <Form.Select 
                value={authorID}
                placeholder='author ID' 
                onChange={(e) => setauthorID(e.target.value)}>
                    <option value={null}>ID: FirstName LastName </option>
                    {authorChoices.map((author) => {
                        return (
                            <option key={author.employeeID} value={author.employeeID}> 
                                {author.employeeID + ': ' + author.firstName + ' ' + author.lastName}
                            </option>
                        )
                    })}
            </Form.Select>
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
              <option value="N/A">N/A</option>
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
