import React from "react";
import { Table } from "react-bootstrap";

function EmployeeShiftTable({ employeeShifts }) {
  console.log(employeeShifts);
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Shift ID</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {employeeShifts.map((employeeShift, i) => {
            return (
              <tr key={i}>
                {Object.values(employeeShift).map((attribute, j) => {
                  return <td key={j}>{attribute}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Shift ID</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {ShiftsemployeeShiftshifts.map((employeeShift) => (
            <EmployeeShiftTableRow
              employeeShift={employeeShift}
              key={(employeeShift.employeeID, employeeShift.shiftID)}
            />
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default EmployeeShiftTable;
