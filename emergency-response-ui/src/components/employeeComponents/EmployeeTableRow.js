import React from "react";

function EmployeeTableRow({ employee, editEmployee, deleteEmployee }) {
  return (
    <tr>
      <td>{employee.employeeID}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.role}</td>
      <td>{employee.compensationRate}</td>
      <td>{employee.areaCode}</td>
      <td>{employee.phoneNumber}</td>
      <td>{employee.employeeEmail}</td>
      <td>
        <button onClick={() => editEmployee(employee)}>Edit</button>
      </td>
      <td>
        <button onClick={() => deleteEmployee(employee)}>Delete</button>
      </td>
    </tr>
  );
}

export default EmployeeTableRow;
