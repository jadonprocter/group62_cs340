import React from "react";
import {} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  // will update navigation with bootstrap this is simply for quick and easy testing.
  return (
    <Navbar variant="dark" expand="lg" bg="dark" fixed="top">
      <Container fluid>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/employees">Employees</Nav.Link>
          <Nav.Link href="/shifts">Shifts</Nav.Link>
          <Nav.Link href="/Reports">Reports</Nav.Link>
          <Nav.Link href="/call-logs">CallLogs</Nav.Link>
          <Nav.Link href="/employee-shifts">EmployeeShifts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
