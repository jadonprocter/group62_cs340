import React, {useEffect, useState} from "react";
import ReportEmployeesForm from "../../components/ReportEmployeesComponents/ReportEmployeesForm";
import ReportEmployeesTable from "../../components/ReportEmployeesComponents/ReportEmployeesTable";

function ReportEmployeesPage() {
    const [reportEmployees, setreportEmployees] = useState([])

    const getReportEmployees = () => {
        //use this function to load the data from SQL when database connected
        const dummydata = [
            {
                employeeID: 342,
                employeeFirstName: 'Philip',
                employeeLastName: 'Peiffer',
                reportID: 4323,
                reportDate: '2021/11/02',
                reportTime: '11:00 AM'
            },
            {
                employeeID: 23532,
                employeeFirstName: 'Jadon',
                employeeLastName: 'Procter',
                reportID: 4323,
                reportDate: '2021/11/02',
                reportTime: '11:00 AM'
            }
        ]
        setreportEmployees(dummydata)
    }

    useEffect(() => {
        getReportEmployees()
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