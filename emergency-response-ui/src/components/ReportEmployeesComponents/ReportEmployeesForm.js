import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Form, Row, Button, Col} from "react-bootstrap"

function ReportEmployeesForm({employeeChoices, reportChoices}){
    const port = 4422
    const history = useHistory();
    const [employeeID, setemployeeID] = useState(null)
    const [reportID, setreportID] = useState(null)

    const addreportemployee = async (e) => {
        e.preventDefault();
        const addEmployee = {employeeID, reportID};
        const response = await fetch(`http://flip3.engr.oregonstate.edu:${port}/reportemployees`, {
            method: 'POST', 
            body: JSON.stringify(addEmployee),
            headers: {
                'Content-Type': 'application/json',
            }
        }); 
        
        if (response.status === 201) {
            alert('Employee succesffully tied to report!');
        } 
        else {
            let responseMessage = await response.json()
            responseMessage = JSON.stringify(responseMessage)
            alert(`Failed to add employee to report. SQL Message: ${responseMessage}.`)
        };
        history.go(0);
    }

    return(
        <div>
            <Form>
                <br />
                <Form.Label>Add an Employee to a Report:</Form.Label>
                <br />
                <Row>
                    <Col>
                        <Form.Label>Employee ID: 
                            <Form.Select 
                                value={employeeID}
                                placeholder='Employee ID' 
                                onChange={(e) => setemployeeID(e.target.value)}>
                                    <option value={null}>ID: FirstName LastName </option>
                                    {employeeChoices.map((employeeChoice) => {
                                        return (
                                            <option key={employeeChoice.employeeID} value={employeeChoice.employeeID}> 
                                                {employeeChoice.employeeID + ': ' + employeeChoice.firstName + ' ' + employeeChoice.lastName}
                                            </option>
                                        )
                                    })}
                            </Form.Select>
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Label> Report ID:
                            <Form.Select 
                                value={reportID}
                                placeholder='Report ID' 
                                onChange={(e) => setreportID(e.target.value)}>
                                    <option value={null}>ReportDate: ReportTitle </option>
                                    {reportChoices.map((reportChoice) => {
                                        return (
                                            <option key={reportChoice.reportID} value={reportChoice.reportID}> 
                                                {reportChoice.reportTimeStamp + ': ' + reportChoice.reportTitle}
                                            </option>
                                        )
                                    })}
                            </Form.Select>
                        </Form.Label>
                    </Col>
                </Row>
                <br />
                <Button variant='primary' onClick={(e) => addreportemployee(e)}>Add</Button>
            </Form>
        </div>
    )
}

export default ReportEmployeesForm