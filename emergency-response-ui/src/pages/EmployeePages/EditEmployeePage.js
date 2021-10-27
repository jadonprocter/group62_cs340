import React from "react";
import { useState } from "react";

function EditEmployeePage({ employeeToEdit }) {
  const [id] = useState(employeeToEdit.id);
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

  const editEmployee = (updatedEmployeeObj) => {
    console.log(updatedEmployeeObj);
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
            placeholder={firstName}
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
            placeholder="Last Name"
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
            placeholder="Emergency Response Role"
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
            placeholder="Auto increment integer"
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
            placeholder="000"
            onChange={(e) => setAreaCode(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="number"
            value={phoneNumber}
            placeholder="000-0000 (exclude area code)"
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
            placeholder="name@example.com"
            onChange={(e) => setEmployeeEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button
          onClick={() =>
            editEmployee({
              id,
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
