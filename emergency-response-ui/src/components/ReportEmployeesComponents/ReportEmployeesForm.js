import React, { useState } from "react";
import {Form, Row, Button, Col} from "react-bootstrap"

function ReportEmployeesForm(){
    const [employeeID, setemployeeID] = useState('')
    const [reportID, setreportID] = useState('')

    const addreportemployee = (e) => {
        const sendObject = {sendemployeeID: employeeID, sendreportID: reportID}
        e.preventDefault()
        console.log(`employee ${sendObject.sendemployeeID} added to ${sendObject.sendreportID}`)
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