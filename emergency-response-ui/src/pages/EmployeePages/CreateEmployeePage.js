import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateEmployeePage() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();
  const [compensationRate, setCompensationRate] = useState();
  const [areaCode, setAreaCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [employeeEmail, setEmployeeEmail] = useState();

  const history = useHistory();

  const createEmployee = (newEmployeeObj) => {
    console.log(newEmployeeObj);
    alert("New Employee Added (Not really there is no back end yet lol)");
    history.push("/employees");
  };

  return (
    <form>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
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
          <select onChange={(e) => setRole(e.target.value)}>
            <option value="dispatcher">Dispatcher</option>
            <option value="ambulance-driver">Ambulance Driver</option>
            <option value="paramedic">Paramedic</option>
            <option value="trainee">Trainee</option>
          </select>
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
            type="text"
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
            createEmployee({
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
          Add New Employee
        </button>
      </div>
    </form>
  );
}

export default CreateEmployeePage;
