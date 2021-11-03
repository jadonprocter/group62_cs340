import React from "react";
import { Table } from "react-bootstrap";

function ReportTable({ afterreports, editReport }) {
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Call ID</th>
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
          {afterreports.map((afterreport, i) => {
            return (
              <tr key={i}>
                {Object.values(afterreport).map((attribute, j) => {
                  return <td key={j}>{attribute}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Call ID</th>
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

          {afterreports.map((afterreport) => (
            <ReportTableRow
              afterreport={afterreport}
              editReport={editReport}
              key={afterreport.reportID}
            ></ReportTableRow>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default ReportTable;
