import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  // will update navigation with bootstrap this is simply for quick and easy testing.
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/shifts">Shifts</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/call-logs">Call Logs</Link>
      <Link to="/employee-shifts">Employee Shifts</Link>
    </div>
  );
}

export default NavigationBar;
