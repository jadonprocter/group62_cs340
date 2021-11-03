import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import ReportSearch from "../../components/ReportComponents/ReportSearch";
import ReportTable from "../../components/ReportComponents/ReportTable";
import { Button } from "react-bootstrap";

function ReportsPage({ setReportToEdit }) {
  const history = useHistory();
  // define reports to pass in to table
  const [afterreports, setafterReports] = useState([]);

  const loadReports = async () => {
    // this async function will be used to grab the reports from the back end
    //fake data to populate table
    const demoReports = [
      {
        reportID: 1234,
        callID: 89743,
        shiftID: 1234,
        authorID: 1234,
        patientFirstName: "John",
        patientLastName: "Doe",
        patientGender: "Male",
        patientAge: "25",
        medicationFlag: "False",
        incidentDesc: "At approximately 12:15 pm we arrived on scene...",
      },
      {
        reportID: 2352,
        callID: 987234,
        shiftID: 9875,
        authorID: 2134,
        patientFirstName: "Jane",
        patientLastName: "Whoever",
        patientGender: "Female",
        patientAge: "82",
        medicationFlag: "True",
        incidentDesc: "She dead",
      },
    ];

    setafterReports(demoReports);
  };

  useEffect(() => {
    loadReports();
  }, []);

  const deleteReport = () => {
    alert('Report deleted')
    history.push("/reports")
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
