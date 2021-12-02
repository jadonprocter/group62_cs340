import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import EmployeeTable from "../../components/EmployeeComponents/EmployeeTable";
import { Button } from "react-bootstrap";

function EmployeesPage({ setEmployeeToEdit }) {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();
  const loadEmployees = async () => {
    const getEmployees = await fetch(`http://flip3.engr.oregonstate.edu:4422/employees`);
    const theEmployees = await getEmployees.json()
    setEmployees(theEmployees);
  };

  const editEmployee = (employeeToEdit) => {
    setEmployeeToEdit(employeeToEdit);
    history.push("/edit-employee");
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <EmployeeTable employees={employees} editEmployee={editEmployee} />
      <Link to="create-employee">
        <Button primary>Create New Employee</Button>
      </Link>
    </div>
  );
}

export default EmployeesPage;
