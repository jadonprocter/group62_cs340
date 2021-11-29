import React, {useEffect, useState} from "react";
import ReportEmployeesForm from "../../components/ReportEmployeesComponents/ReportEmployeesForm";
import ReportEmployeesTable from "../../components/ReportEmployeesComponents/ReportEmployeesTable";

function ReportEmployeesPage() {
    const [reportEmployees, setreportEmployees] = useState([])

    const loadReportEmployees = async() => {
        //use this function to load the data from SQL when database connected
        const getReportEmployees = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_PORT}/reportemployees`);
        const theReportEmployees = await getReportEmployees.json();
        setreportEmployees(theReportEmployees)
    }

    useEffect(() => {
        loadReportEmployees()
    }, [])

    return(
        <div>
            <h1>Employees tied to Reports</h1>
            <ReportEmployeesTable reportEmployees={reportEmployees}/>
            <ReportEmployeesForm></ReportEmployeesForm>
        </div>
    )
}

export default ReportEmployeesPage