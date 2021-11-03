import React from "react";
import ReportEmployeesRow from "./ReportEmployeesRow";

function ReportEmployeesTable({reportEmployees}){
    return(
        <div>    
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Report ID</th>
                        <th>Report Date</th>
                        <th>Report Time</th>
                    </tr>
                </thead>
                <tbody>
                    {reportEmployees.map((reportEmployee) => (<ReportEmployeesRow 
                                                                reportEmployee={reportEmployee}
                                                                key={reportEmployee.employeeFirstName}/>))}
                </tbody>
            </table>
        </div>
    )
}

export default ReportEmployeesTable