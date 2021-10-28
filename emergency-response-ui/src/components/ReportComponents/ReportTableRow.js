import React from "react";

function ReportTableRow({afterreport, editReport}) {
    return(
        <tr>
            <td>{afterreport.reportID}</td>
            <td>{afterreport.callID}</td>
            <td>{afterreport.shiftID}</td>
            <td>{afterreport.authorID}</td>
            <td>{afterreport.patientFirstName}</td>
            <td>{afterreport.patientLastName}</td>
            <td>{afterreport.patientGender}</td>
            <td>{afterreport.patientAge}</td>
            <td>{afterreport.medicationFlag}</td>
            <td>{afterreport.incidentDesc}</td>
            <td><button onClick={() => editReport(afterreport)}>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default ReportTableRow