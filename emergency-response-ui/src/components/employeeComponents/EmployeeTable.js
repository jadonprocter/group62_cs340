import React from "react";
import { Table, Button } from "react-bootstrap";

function EmployeeTable({ employees, editEmployee, deleteEmployee }) {
  return (
    <div>
      <Table striped bordered hover responsive>
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
          {employees.map((employee, i) => {
            return (
              <tr key={i}>
                {Object.values(employee).map((attribute, j) => {
                  return <td key={j}>{attribute}</td>;
                })}
                <td>
                  <Button
                    onClick={() => editEmployee(employee)}
                    variant="secondary"
                    size="sm"
                  >
                    edit
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => deleteEmployee(employee)}
                    variant="secondary"
                    size="sm"
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <table>
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
      </table> */}
    </div>
  );
}

export default EmployeeTable;
