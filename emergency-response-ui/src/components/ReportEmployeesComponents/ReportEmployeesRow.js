import React from "react";

function ReportEmployeesRow({reportEmployee}){
    return(
        <tr>
            <td>{reportEmployee.employeeID}</td>
            <td>{reportEmployee.employeeFirstName}</td>
            <td>{reportEmployee.employeeLastName}</td>
            <td>{reportEmployee.reportID}</td>
            <td>{reportEmployee.reportDate}</td>
            <td>{reportEmployee.reportTime}</td>
        </tr>
    )
}

export default ReportEmployeesRow