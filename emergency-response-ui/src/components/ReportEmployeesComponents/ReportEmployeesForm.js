import React, { useState } from "react";

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
            <form>
                <fieldset>
                    <legend>Add an employee to a report:</legend>
                    <label>Employee ID: 
                        <input type='number' placeholder={employeeID} onChange={(e) => setemployeeID(e.target.value)}></input>
                    </label>
                    <label> Report ID:
                        <input type='number' placeholder={reportID} onChange={(e) => setreportID(e.target.value)}></input>
                    </label>
                    <button onClick={(e) => addreportemployee(e)}>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default ReportEmployeesForm