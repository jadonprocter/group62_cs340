import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EmployeeShiftTable from "../../components/EmployeeShiftComponents/EmployeeShiftTable";

function EmployeeShiftPage() {
  const [employeeShifts, setEmployeeShifts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState();

  const getEmployeeShifts = () => {
    const demoEmployeeShifts = () => {
      return [
        {
          employeeID: 1,
          employeeFirstName: "philip",
          employeeLastName: "peiffer",
          shiftID: 1,
          startDate: "2021/10/25",
          startTime: "05:00",
          endTime: "17:00",
        },
        {
          employeeID: 2,
          employeeFirstName: "jadon",
          employeeLastName: "procter",
          shiftID: 2,
          startDate: "2021/10/26",
          startTime: "05:00",
          endTime: "17:00",
        },
      ];
    };
    setEmployeeShifts(demoEmployeeShifts());
  };

  const onSearch = () => {
    // this will be done on sql side but was having some fun
    if (searchBy) {
      const filterForSearch = (employee) => {
        return employee.employeeID === search;
      };
      const filterArray = employeeShifts.filter(filterForSearch);
      setEmployeeShifts(filterArray);
      return filterArray;
    } else {
      alert("Functionality Not implemented");
    }
  };

  useEffect(() => {
    getEmployeeShifts();
  }, []);

  return (
    <div>
      <h1>Employee Shifts</h1>
      <EmployeeShiftTable employeeShifts={employeeShifts} />
      <div>
        <form>
          <label>
            Search:
            <input
              type="search"
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <label>
            Search By:
            <select onChange={(e) => setSearchBy(e.target.value)}>
              <option value="employeeID">employeeID</option>
              <option value="employeeFirstName">employeeFirstName</option>
              <option value="employeeLastName">employeeLastName</option>
              <option value="shiftID">shiftID</option>
              <option value="startDate">startDate</option>
              <option value="startTime">startTime</option>
              <option value="endTime">endTime</option>
            </select>
          </label>
          <button onClick={() => onSearch}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeShiftPage;
