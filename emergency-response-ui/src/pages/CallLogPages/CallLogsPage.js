import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CallLogTable from "../../components/CallLogComponents/CallLogTable";

function CallLogsPage() {
  const [callLogs, setCallLogs] = useState([]);
  const getCallLogs = () => {
    const demoCallLogs = () => {
      const logs = [
        {
          callID: 1,
          shiftID: 2,
          dispatcherID: 3,
          timeStamp: "implement time stamp",
          responseType: "default",
          callerFirstName: "jadon",
          callerLastName: "procter",
          chiefComplaint: "default",
          areaCode: "000",
          phoneNumber: "111-2222",
          streetAddress: "324 Nunya Business Ave",
          zipCode: "12345",
          phoneNotes: "No Notes",
        },
        {
          callID: 4,
          shiftID: 5,
          dispatcherID: 6,
          timeStamp: "implement time stamp",
          responseType: "default",
          callerFirstName: "philip",
          callerLastName: "peiffer",
          chiefComplaint: "default",
          areaCode: "000",
          phoneNumber: "111-2222",
          streetAddress: "324 Nunya Business Ave",
          zipCode: "54321",
          phoneNotes: "No Notes",
        },
      ];
      return logs;
    };
    setCallLogs(demoCallLogs());
  };

  useEffect(() => {
    getCallLogs();
  }, []);

  return (
    <div>
      <h1>Call Logs</h1>
      <CallLogTable callLogs={callLogs} />
      <Link to="/create-call-log">
        <button>Create Call Log</button>
      </Link>
    </div>
  );
}

export default CallLogsPage;
