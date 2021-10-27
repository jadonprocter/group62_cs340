import React from "react";
import ReportTableRow from "./ReportTableRow";

function ReportTable({ afterreports }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Shift ID</th>
            <th>Author ID</th>
            <th>Patient First Name</th>
            <th>Patient Last Name</th>
            <th>Patient Gender</th>
            <th>Patient Age</th>
            <th>Medications Administered</th>
            <th>Incident Description</th>
          </tr>
        </thead>
        <tbody>
          {/*Map the reports to a table row. Use the report ID as the key. NOTE - still need 
                    to add delete and edit functionality if wanted*/}
          {afterreports.map((afterreport) => (
            <ReportTableRow
              afterreport={afterreport}
              key={afterreport.reportID}
            ></ReportTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportTable;
