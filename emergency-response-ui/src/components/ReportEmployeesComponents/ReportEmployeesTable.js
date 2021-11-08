import React from "react";
import {Table} from "react-bootstrap" 

function ReportEmployeesTable({reportEmployees}){
    return(
        <div>    
            <Table striped bordered hover responsive>
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
                    {reportEmployees.map((reportEmployee, i) => {
                        return(
                            <tr key={i}>
                                {Object.values(reportEmployee).map((attribute, j) => {
                                    return(
                                        <td key={j}>
                                        {attribute}
                                        </td>
                                )})} 
                            </tr>
                    )})}
                </tbody>
            </Table>
        </div>
    )
}

export default ReportEmployeesTable