import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import ReportEmployeesForm from "../../components/ReportEmployeesComponents/ReportEmployeesForm";
import ReportEmployeesTable from "../../components/ReportEmployeesComponents/ReportEmployeesTable";

function ReportEmployeesPage() {
    const port = 4422
    const history = useHistory()
    const [reportEmployees, setreportEmployees] = useState([])
    const [employeeChoices, setEmployeeChoices] = useState([])
    const [reportChoices, setReportChoices] = useState([])

    const loadReportEmployees = async() => {
        //use this function to load the data from SQL when database connected
        const getReportEmployees = await fetch(`http://flip3.engr.oregonstate.edu:${port}/reportemployees`);
        const theReportEmployees = await getReportEmployees.json();
        setreportEmployees(theReportEmployees)

        const getEmployees = await fetch(`http://flip3.engr.oregonstate.edu:${port}/employees`)
        const employees = await getEmployees.json()
        setEmployeeChoices(employees)

        const getReports = await fetch(`http://flip3.engr.oregonstate.edu:${port}/reports`)
        const reports = await getReports.json()
        setReportChoices(reports)
    }

    const deletereportemployee = async (reportEmployee) => {
        const employeeID = reportEmployee.employeeID
        const reportID = reportEmployee.reportID
        const response = await fetch(`http://flip3.engr.oregonstate.edu:${port}/reportemployees/${employeeID}/${reportID}`, {method: 'DELETE'})
        if (response.status === 204) {
          alert(`Report ${reportID} delete from Employee ${employeeID} deleted`)
        } else {
          alert(`Unable to delete report-employee`)
        }
        history.go(0)
      }

    useEffect(() => {
        loadReportEmployees()
    }, [])

    return(
        <div id="tableOverride">
            <h1>Employees tied to Reports</h1>
            <ReportEmployeesTable reportEmployees={reportEmployees} deletereportemployee={deletereportemployee}/>
            <ReportEmployeesForm employeeChoices={employeeChoices} reportChoices={reportChoices}></ReportEmployeesForm>
        </div>
    )
}

export default ReportEmployeesPage