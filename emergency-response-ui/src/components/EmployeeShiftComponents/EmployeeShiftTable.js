import EmployeeShiftTableRow from "./EmployeeShiftTableRow";

function EmployeeShiftTable({ employeeShifts }) {
  console.log(employeeShifts);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Shift ID</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {employeeShifts.map((employeeShift) => (
            <EmployeeShiftTableRow
              employeeShift={employeeShift}
              key={(employeeShift.employeeID, employeeShift.shiftID)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeShiftTable;
