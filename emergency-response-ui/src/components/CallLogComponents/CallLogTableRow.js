import React from "react";

function CallLogTableRow({ call }) {
  return (
    <tr>
      <td>{call.callID}</td>
      <td>{call.shiftID}</td>
      <td>{call.dispatcherID}</td>
      <td>{call.timeStamp}</td>
      <td>{call.responseType}</td>
      <td>{call.callerFirstName}</td>
      <td>{call.callerLastName}</td>
      <td>{call.chiefComplaint}</td>
      <td>{call.areaCode}</td>
      <td>{call.phoneNumber}</td>
      <td>{call.streetAddress}</td>
      <td>{call.zipCode}</td>
      <td>{call.phoneNotes}</td>
    </tr>
  );
}

export default CallLogTableRow;
