import React from "react";
import { Table } from "react-bootstrap";
function CallLogTable({ callLogs }) {
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Call ID</th>
            <th>Shift ID</th>
            <th>Dispatcher ID</th>
            <th>Time Stamp</th>
            <th>Response Type</th>
            <th>Caller First Name</th>
            <th>Caller Last Name</th>
            <th>Chief Complaint</th>
            <th>Area Code</th>
            <th>Phone Number</th>
            <th>Street Address</th>
            <th>Zip Code</th>
            <th>Phone Notes</th>
          </tr>
        </thead>
        <tbody>
          {callLogs.map((callLog, i) => {
            return (
              <tr key={i}>
                {Object.values(callLog).map((attribute, j) => {
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
            <th>Call ID</th>
            <th>Shift ID</th>
            <th>Dispatcher ID</th>
            <th>Time Stamp</th>
            <th>Response Type</th>
            <th>Caller First Name</th>
            <th>Caller Last Name</th>
            <th>Chief Complaint</th>
            <th>Area Code</th>
            <th>Phone Number</th>
            <th>Street Address</th>
            <th>Zip Code</th>
            <th>Phone Notes</th>
          </tr>
        </thead>
        <tbody>
          {callLogs.map((call) => {
            return <CallLogTableRow call={call} />;
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default CallLogTable;
