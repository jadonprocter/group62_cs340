import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CallLogTable from "../../components/CallLogComponents/CallLogTable";

function CallLogsPage() {
  const [callLogs, setCallLogs] = useState([]);

  const loadCallLogs = async () => {
    const getCallLogs = await fetch(`http://flip3.engr.oregonstate.edu:4422/calllogs`);
    const theCallLogs = await getCallLogs.json();
    setCallLogs(theCallLogs);
  };

  useEffect(() => {
    loadCallLogs();
  }, []);

  return (
    <div>
      <h1>Call Logs</h1>
      <CallLogTable callLogs={callLogs} />
      <Link to="/create-call-log">
        <Button variant="primary">Create Call Log</Button>
      </Link>
    </div>
  );
}

export default CallLogsPage;
