import React from "react";

function EmployeeShiftTableRow({ employeeShift }) {
  return (
    <tr>
      <td>{employeeShift.employeeID}</td>
      <td>{employeeShift.employeeFirstName}</td>
      <td>{employeeShift.employeeLastName}</td>
      <td>{employeeShift.shiftID}</td>
      <td>{employeeShift.startDate}</td>
      <td>{employeeShift.startTime}</td>
      <td>{employeeShift.endTime}</td>
    </tr>
  );
}

export default EmployeeShiftTableRow;
