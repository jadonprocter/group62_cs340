import React from "react";
import EmployeeTableRow from "./EmployeeTableRow";

function EmployeeTable({ employees, editEmployee, deleteEmployee }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Compensation Rate</th>
            <th>Area Code</th>
            <th>Phone Number</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeTableRow
              employee={employee}
              key={employee.employeeID}
              editEmployee={editEmployee}
              deleteEmployee={deleteEmployee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
