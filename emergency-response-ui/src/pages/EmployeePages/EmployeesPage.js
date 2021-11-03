import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import EmployeeTable from "../../components/EmployeeComponents/EmployeeTable";
import { Button } from "react-bootstrap";

function EmployeesPage({ employeeToEdit, setEmployeeToEdit }) {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();
  const getEmployees = async () => {
    const demoEmployees = () => {
      return [
        {
          employeeID: 1,
          firstName: "Philip",
          lastName: "Peiffer",
          role: "Dispatcher",
          compensationRate: 20.25,
          areaCode: "111",
          phoneNumber: "222-3333",
          employeeEmail: "philippeiffer@fakeemails.com",
        },
        {
          employeeID: 2,
          firstName: "Jadon",
          lastName: "Procter",
          role: "Ambulance Driver",
          compensationRate: 18.25,
          areaCode: "333",
          phoneNumber: "111-2222",
          employeeEmail: "jadonprocter@fakeemails.com",
        },
      ];
    };
    setEmployees(demoEmployees());
  };

  const editEmployee = async (employee) => {
    setEmployeeToEdit(employee);
    history.push("/edit-employee");
  };

  const deleteEmployee = async (employee) => {
    alert("Deleted Employee (not really cause there is no backend lol)");
    // Make fetch to delete row (employee)
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <EmployeeTable
        employees={employees}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
      <Link to="create-employee">
        <Button primary>Create New Employee</Button>
      </Link>
    </div>
  );
}

export default EmployeesPage;
