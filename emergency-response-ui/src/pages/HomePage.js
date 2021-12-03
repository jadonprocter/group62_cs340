import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1> Welcome! </h1>
      <p>
        Welcome to the Emergency Response database. Please use the navigation bar at the top (or the links below)
        to navigate to your desired page. The pages are broken down as follows:
      </p>
      <br />
      <Link to="/employees">Employees Page</Link>
      <p> Used to store emergency response employee information. </p>
      <Link to="/shifts">Shifts Page</Link>
      <p> Used to store information about shifts. </p>
      <Link to="/employee-shifts">EmployeeShifts Page</Link>
      <p> Ties an employee to a shift for scheduling and tracking purposes. </p>
      <Link to="/call-logs">Call Logs Page</Link>
      <p> Used by dispatchers to store information about calls to emergency response. </p>
      <Link to="/reports">Reports Page</Link>
      <p> Used by emergency response personnel to document actions taken during the response. </p>
      <Link to="/reportemployees">ReportEmployees Page</Link>
      <p> Used to keep track of which employees responded to which reports. </p>
    </div>
  );
}

export default HomePage;
