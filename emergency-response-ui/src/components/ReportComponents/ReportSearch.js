import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function ReportSearch() {
  const [searchCol, setsearchCol] = useState();
  const [searchVal, setsearchVal] = useState();

  //define function to get the results after form submitted
  const getReports = async (e) => {
    e.preventDefault()

    const results = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_PORT}/reports/${searchCol}/${searchVal}`)
    if (results.status === 500){
      alert(`Error finding report! Response code: ${results.status}`)
    } else {
      alert('Found some stuff!')
    }
    return;
  };

  return (
    <div>
      <Form>
        <br />
        <Form.Label>Search Reports:</Form.Label>
        <br />
        <Row>
          <Col>
            <Form.Label>Select Category</Form.Label>
            <Form.Select
              value={searchCol}
              onChange={(e) => setsearchCol(e.target.value)}
            >
              <option value='shiftID'>Shift ID</option>
              <option value='authorID'>Author ID</option>
              <option value='patientLastName'>Patient Last Name</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="search"
              value={searchVal}
              placeholder="Enter Search Term"
              onChange={(e) => setsearchVal(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Button variant="primary" onClick={(e) => getReports(e)}>Submit</Button>
      </Form>
    </div>
  );
}

export default ReportSearch;
