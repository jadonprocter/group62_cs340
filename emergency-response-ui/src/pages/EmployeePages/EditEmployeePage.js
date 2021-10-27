import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function EditEmployeePage({ employeeToEdit }) {
  const [employeeID] = useState(employeeToEdit.employeeID);
  const [firstName, setFirstName] = useState(employeeToEdit.firstName);
  const [lastName, setLastName] = useState(employeeToEdit.lastName);
  const [role, setRole] = useState(employeeToEdit.role);
  const [compensationRate, setCompensationRate] = useState(
    employeeToEdit.compensationRate
  );
  const [areaCode, setAreaCode] = useState(employeeToEdit.areaCode);
  const [phoneNumber, setPhoneNumber] = useState(employeeToEdit.phoneNumber);
  const [employeeEmail, setEmployeeEmail] = useState(
    employeeToEdit.employeeEmail
  );

  const history = useHistory();

  const editEmployee = (updatedEmployeeObj) => {
    console.log(updatedEmployeeObj);
    alert("Employee Updated (Not really there is no backend yet lol)");
    history.push("/employees");
    // function then makes a call to backend to alter the row in the table with the corresponding id
  };

  return (
    <form>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Role:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Compensation Rate (hourly):
          <input
            type="number"
            value={compensationRate}
            onChange={(e) => setCompensationRate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Area Code:
          <input
            type="text"
            value={areaCode}
            placeholder={areaCode}
            onChange={(e) => setAreaCode(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Employee Email:
          <input
            type="text"
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button
          onClick={() =>
            editEmployee({
              employeeID,
              firstName,
              lastName,
              role,
              compensationRate,
              areaCode,
              phoneNumber,
              employeeEmail,
            })
          }
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
export default EditEmployeePage;
