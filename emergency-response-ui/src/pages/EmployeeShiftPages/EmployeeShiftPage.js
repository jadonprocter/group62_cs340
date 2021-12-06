import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EmployeeShiftTable from "../../components/EmployeeShiftComponents/EmployeeShiftTable";
import AssignEmployeeShiftForm from "../../components/EmployeeShiftComponents/AssignEmployeeShiftForm";

function EmployeeShiftPage() {
  const [employeeShifts, setEmployeeShifts] = useState([]);

  const loadEmployeeShifts = async(e) => {
    const getEmployeeShifts = await fetch(`http://flip3.engr.oregonstate.edu:4422/employeeshifts`);
    const theEmployeeShifts = await getEmployeeShifts.json();
    setEmployeeShifts(theEmployeeShifts);
  };

  useEffect(() => {
    loadEmployeeShifts();
  }, []);

  return (
    <div>
      <h1>Employee Shifts</h1>
      <EmployeeShiftTable employeeShifts={employeeShifts} />
      <br />

      <AssignEmployeeShiftForm />
      <br />
    </div>
  );
}

export default EmployeeShiftPage;
