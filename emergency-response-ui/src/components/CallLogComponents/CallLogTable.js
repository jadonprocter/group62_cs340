import React from "react";
import CallLogTableRow from "./CallLogTableRow";
function CallLogTable({ callLogs }) {
  return (
    <div>
      <table>
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
      </table>
    </div>
  );
}

export default CallLogTable;
