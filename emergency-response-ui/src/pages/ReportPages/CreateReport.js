import React from "react";
import ReportForm from "../../components/ReportComponents/ReportForm";

function CreateReport({reportToEdit}) {
    if (reportToEdit === null) {
        return (
            <div>   
                <h1>Creating New Report</h1>
                <ReportForm></ReportForm>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Editing a Report</h1>
                <ReportForm reportToEdit={reportToEdit}></ReportForm>
            </div>
        )
    }
    
}

export default CreateReport