import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

function ReportForm({reporttoedit}) {

    const history = useHistory()

    //define starting conditions for the form based on if a report was passed in
    
    const [callID, setcallID] = useState(reporttoedit != null ? reporttoedit.callID : '')
    const [shiftID, setshiftID] = useState(reporttoedit != null ? reporttoedit.shiftID : '')
    const [authorID, setauthorID] = useState(reporttoedit != null ? reporttoedit.authorID : 'lb')
    const [patientFirstName, setpatientFirstName] = useState(reporttoedit != null ? reporttoedit.patientFirstName : '')
    const [patientLastName, setpatientLastName] = useState(reporttoedit != null ? reporttoedit.patientLastName : '')
    const [patientGender, setpatientGender] = useState(reporttoedit != null ? reporttoedit.patientGender : '')
    const [patientAge, setpatientAge] = useState(reporttoedit != null ? reporttoedit.patientAge : '')
    const [incidentDesc, setincidentDesc] = useState(reporttoedit != null ? reporttoedit.incidentDesc : '')
    const [medicationFlag, setmedicationFlag] = useState(reporttoedit != null ? reporttoedit.medicationFlag : '')

    //set the flag for if a new report is being created or if one is being updated
    let newFlag = false
    if (reporttoedit == null) {
        newFlag = true
    } 
    
    //define the function to create a new report
    const newReport = async (e) => {
        e.preventDefault()
        history.push('/reports')
        return
        /* DISABLING UNTIL BACKEND IS UP
        e.preventDefault()
        const formInfo = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(formInfo),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert('Exercise successfully created!')
        } else {
            alert(`Failed to create exercise. Response code ${response.status}.`)
        };
        history.push("/"); */
    };

    //define the function to update an exercise
    const updateReport = async (e) => {
        e.preventDefault()
        history.push('/reports')
        return
        /* DISABLING UNTIL BACKEND IS UP
        e.preventDefault()
        const modExercise = {name, reps, weight, unit, date}
        //fetch the PUT route from express server
        const response = await fetch(`/exercises/${exercisetoEdit._id}`, {
            method: 'PUT', 
            body: JSON.stringify(modExercise),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (response.status === 200) {
            alert('Successfully updated exercise!')
        } else {
           alert(`Failed to update the exercise with ID ${exercisetoEdit._id}, status code ${response.status}`)
        }
        history.push('/') */
    }

    return (
        <div>
            <form>
                                        
                    <div className="inputBox">
                        <label>Call ID:
                            <input 
                                type="number"
                                value={callID}
                                placeholder="Auto increment integer"
                                onChange={e => setcallID(e.target.value)}  />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label>Shift ID: 
                            <input 
                                type="number"
                                value={shiftID}
                                placeholder="Auto increment integer"
                                onChange={e => setshiftID(e.target.value)}  />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label>Author ID: 
                            <input 
                                type="number"
                                value={authorID}
                                placeholder="Auto increment integer"
                                onChange={e => setauthorID(e.target.value)}  />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label>Patient First Name: 
                            <input 
                                type="text"
                                value={patientFirstName}
                                placeholder="John"
                                onChange={e => setpatientFirstName(e.target.value)}  />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label>Patient Last Name: 
                            <input 
                                type="text"
                                value={patientLastName}
                                placeholder="Doe"
                                onChange={e => setpatientLastName(e.target.value)}  />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label>Patient Gender: 
                            <select value={patientGender} onChange={e => setpatientGender(e.target.value)} > 
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select> 
                        </label>
                    </div>

                    <div className="inputBox">
                        <label>Patient Age: 
                            <input 
                                type="number"
                                value={patientAge}
                                placeholder="e.g. 15"
                                onChange={e => setpatientAge(e.target.value)}  />
                        </label>
                    </div>

                    <div className="inputBox">
                        <label>Medication Administered: 
                            <select value={medicationFlag} onChange={e => setmedicationFlag(e.target.value)} > 
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select> 
                        </label>
                    </div>

                    <div className="inputBox">
                        <label>Incident Description: 
                            <textarea 
                                value={incidentDesc}
                                placeholder="Record the details of the incident here."
                                maxLength={65500}
                                onChange={e => setincidentDesc(e.target.value)}  />
                        </label>
                    </div>
                    
                    <button onClick={newFlag ? newReport : updateReport}>Submit</button>
            </form>
        </div>
    )
}

export default ReportForm