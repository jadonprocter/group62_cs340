import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

function ShiftForm() {

    const history = useHistory()

    //define starting conditions for the form based on if a report was passed in
    
    const [startDate, setstartDate] = useState('')
    const [startTime, setstartTime] = useState('')
    const [endTime, setendTime] = useState('')
    const [holidayPay, setholidayPay] = useState('')
    
    //define the function to create a new report
    const newShift = async (e) => {
        e.preventDefault()
        history.push('/shifts')
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

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Create a New Shift Instance:</legend>
                    <div>
                        <label>Start Date:
                            <input
                                type="date"
                                value={startDate}
                                onChange={e => setstartDate(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>Start Time:
                            <input
                                type="time"
                                value={startTime}
                                onChange={e => setstartTime(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                        <label>End Time:
                            <input
                                type="time"
                                value={endTime}
                                onChange={e => setendTime(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                        <label>Holiday Pay:
                            <select value={holidayPay} onChange={e => setholidayPay(e.target.value)}>
                                <option>True</option>
                                <option>False</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={newShift}>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default ShiftForm