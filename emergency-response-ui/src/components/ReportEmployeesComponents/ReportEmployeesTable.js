import React from "react";
import {Table, Button} from "react-bootstrap" 

function ReportEmployeesTable({reportEmployees, deletereportemployee}){

    return(
        <div>    
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Report ID</th>
                        <th>Report Title</th>
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
                                <td>
                                    <Button
                                        onClick={() => deletereportemployee(reportEmployee)}
                                        variant="secondary"
                                        size="sm"
                                    >
                                        delete
                                    </Button>
                                </td> 
                            </tr>
                    )})}
                </tbody>
            </Table>
        </div>
    )
}

export default ReportEmployeesTable