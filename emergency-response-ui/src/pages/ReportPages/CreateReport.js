import {React, useEffect, useState} from "react";
import ReportForm from "../../components/ReportComponents/ReportForm";

function CreateReport({ reportToEdit }) {
  const port = 4423
  const [callChoices, setCallChoices] = useState([])
  const [shiftChoices, setShiftChoices] = useState([])
  const [authorChoices, setAuthorChoices] = useState([])
  
  // run queries to get dropdown menus
  const loadChoices = async () => {
    let response = await fetch(`http://flip3.engr.oregonstate.edu:${port}/calllogs`)
    const calls = await response.json()
    setCallChoices(calls)

    response = await fetch(`http://flip3.engr.oregonstate.edu:${port}/shifts`)
    const shifts = await response.json()
    setShiftChoices(shifts)

    response = await fetch(`http://flip3.engr.oregonstate.edu:${port}/employees`)
    const employees = await response.json()
    setAuthorChoices(employees)
  } 

  useEffect(() => {
    loadChoices();
  }, [])

  if (reportToEdit == null) {
    return (
      <div>
        <h1>Create a New Report</h1>
        <ReportForm reportToEdit={null} callChoices={callChoices} shiftChoices={shiftChoices} authorChoices={authorChoices}></ReportForm>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Edit a Report</h1>
        <ReportForm reportToEdit={reportToEdit} callChoices={callChoices} shiftChoices={shiftChoices} authorChoices={authorChoices}></ReportForm>
      </div>
    );
  }
}

export default CreateReport;
