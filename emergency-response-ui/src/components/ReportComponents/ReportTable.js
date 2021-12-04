import React from "react";
import { Table, Button } from "react-bootstrap";

function ReportTable({ afterreports, editReport, deleteReport }) {
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Call ID</th>
            <th>Shift ID</th>
            <th>Author ID</th>
            <th>Report Title</th>
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
                <td>
                  <Button
                    onClick={() => editReport(afterreport)}
                    variant="secondary"
                    size="sm"
                  >
                    edit
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => deleteReport(afterreport.reportID)}
                    variant="secondary"
                    size="sm"
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ReportTable;
