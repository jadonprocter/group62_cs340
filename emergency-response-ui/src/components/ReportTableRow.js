import React from "react";

function ReportTableRow({afterreport}) {
    return(
        <tr>
            <td>{afterreport.reportID}</td>
            <td>{afterreport.shiftID}</td>
            <td>{afterreport.authorID}</td>
            <td>{afterreport.patientFirstName}</td>
            <td>{afterreport.patientLastName}</td>
            <td>{afterreport.patientGender}</td>
            <td>{afterreport.patientAge}</td>
            <td>{afterreport.medicationFlag}</td>
            <td>{afterreport.incidentDesc}</td>
        </tr>
    )
}

export default ReportTableRow