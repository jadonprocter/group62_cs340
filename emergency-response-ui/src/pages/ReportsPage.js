import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReportTable from "../components/ReportTable";

function ReportsPage() {
    // define reports to pass in to table
    const [afterreports, setafterReports] = useState([])

    const loadReports = async () => {
        // this async function will be used to grab the reports from the back end  
         //fake data to populate table
        const demoReports = [
            {
            reportID: 1234,
            shiftID: 1234,
            authorID: 1234,
            patientFirstName: "John",
            patientLastName: "Doe",
            patientGender: "Male",
            patientAge: "25",
            medicationFlag: "False",
            incidentDesc: "At approximately 12:15 pm we arrived on scene..."
            },
            {
            reportID: 2352,
            shiftID: 9875,
            authorID: 2134,
            patientFirstName: "Jane",
            patientLastName: "Whoever",
            patientGender: "Female",
            patientAge: "82",
            medicationFlag: "True",
            incidentDesc: "She dead"
            }]

        setafterReports(demoReports)
    }

    useEffect(() => {
        loadReports();
    }, []);

    return (
        <div>
            <h1>Reports</h1>
            {/*insert the table of existing reports here, have a link to creating a new report at the 
            bottom. Pass in reports list to report table for population. */}
            <ReportTable afterreports={afterreports} />
            <Link to='/createreport'>Create New Report</Link>
        </div>
    )
}

export default ReportsPage;