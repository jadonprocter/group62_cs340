import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Form, Row, Button, Col} from "react-bootstrap"

function ReportEmployeesForm(){
    const port = 4422
    const history = useHistory();
    const [employeeID, setemployeeID] = useState('')
    const [reportID, setreportID] = useState('')

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
            alert('New Report Employee successfully added!');
        } 
        else {
            alert(`Failed to add employee to report. Response code: ${response.status}.`);
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
                            <Form.Control placeholder='Employee ID' onChange={(e) => setemployeeID(e.target.value)}></Form.Control>
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Label> Report ID:
                            <Form.Control placeholder = 'Report ID' onChange={(e) => setreportID(e.target.value)}></Form.Control>
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