import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EmployeeShiftTable from "../../components/EmployeeShiftComponents/EmployeeShiftTable";
import { Form, Row, Col, Button } from "react-bootstrap";
import AssignEmployeeShiftForm from "../../components/EmployeeShiftComponents/AssignEmployeeShiftForm";

function EmployeeShiftPage() {
  const [employeeShifts, setEmployeeShifts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState();

  const loadEmployeeShifts = async(e) => {
    const getEmployeeShifts = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_PORT}/employeeshifts`);
    const theEmployeeShifts = await getEmployeeShifts.json();
    setEmployeeShifts(theEmployeeShifts);
  };

  const onSearch = () => {
    // this will be done on sql side but was having some fun
    if (searchBy) {
      const filterForSearch = (employee) => {
        return employee.employeeID === search;
      };
      const filterArray = employeeShifts.filter(filterForSearch);
      setEmployeeShifts(filterArray);
      return filterArray;
    } else {
      alert("Functionality Not implemented");
    }
  };

  useEffect(() => {
    loadEmployeeShifts();
  }, []);

  return (
    <div>
      <h1>Employee Shifts</h1>
      <EmployeeShiftTable employeeShifts={employeeShifts} />
      <br />
      <Form>
        <Row>
          <Col>
            <Form.Label>Search By:</Form.Label>
            <Form.Select onChange={(e) => setSearchBy(e.target.value)}>
              <option value="employeeID">employeeID</option>
              <option value="employeeFirstName">employeeFirstName</option>
              <option value="employeeLastName">employeeLastName</option>
              <option value="shiftID">shiftID</option>
              <option value="startDate">startDate</option>
              <option value="startTime">startTime</option>
              <option value="endTime">endTime</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Search:</Form.Label>
            <Form.Control
              type="text"
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Button variant="primary" type="submit" onClick={() => onSearch}>
          Search
        </Button>
      </Form>

      <AssignEmployeeShiftForm />
      <br />
    </div>
  );
}

export default EmployeeShiftPage;
