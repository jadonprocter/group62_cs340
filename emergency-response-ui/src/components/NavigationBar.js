import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  // will update navigation with bootstrap this is simply for quick and easy testing.
  return (
    <div className="nav">
      <span className="navbutton"><Link to="/">Home</Link> </span>
      <span className="navbutton"><Link to="/employees">Employees</Link> </span>
      <span className="navbutton"><Link to="/shifts">Shifts</Link> </span>
      <span className="navbutton"><Link to="/reports">Reports</Link> </span>
      <span className="navbutton"><Link to="/call-logs">Call Logs</Link> </span>
      <span className="navbutton"><Link to="/employee-shifts">Employee Shifts</Link> </span>
    </div>
  );
}

export default NavigationBar;
