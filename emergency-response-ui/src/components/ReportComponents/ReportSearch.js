import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function ReportSearch() {
  const [searchCol, setsearchCol] = useState();
  const [searchVal, setsearchVal] = useState();

  //define function to get the results after form submitted
  const getReports = () => {
    //use search col to fill in select query
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
              <option>Shift ID</option>
              <option>Author ID</option>
              <option>Patient Last Name</option>
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
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
}

export default ReportSearch;
