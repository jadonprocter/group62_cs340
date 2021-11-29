import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import ReportSearch from "../../components/ReportComponents/ReportSearch";
import ReportTable from "../../components/ReportComponents/ReportTable";
import { Button } from "react-bootstrap";

function ReportsPage({ setReportToEdit }) {
  const history = useHistory();
  const port = 4423
  // define reports to pass in to table
  const [afterreports, setafterReports] = useState([]);

  const loadReports = async () => {
    // this async function will be used to grab the reports from the back end
      const response = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_PORT}/reports`)
      const reports = await response.json()
      setafterReports(reports)
  };

  useEffect(() => {
    loadReports();
  }, []);

  const deleteReport = async (reportID) => {
    const response = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_PORT}/reports/${reportID}`, {method: 'DELETE'})
    if (response.status === 204) {
      alert(`Report ${reportID} deleted`)
    } else {
      alert(`Unable to delete report ${reportID}`)
    }
    history.go(0)
  }

  function editReport(reportToEdit) {
    setReportToEdit(reportToEdit);
    history.push("/editreport");
  }

  return (
    <div>
      <h1>Reports</h1>
      {/*insert the table of existing reports here, have a link to creating a new report at the 
            bottom. Pass in reports list to report table for population. */}
      <ReportTable afterreports={afterreports} editReport={editReport} deleteReport={deleteReport}/>
      <Link to="/createreport">
        <Button variant="primary">Create Report</Button>
      </Link>
      <ReportSearch />
    </div>
  );
}

export default ReportsPage;
