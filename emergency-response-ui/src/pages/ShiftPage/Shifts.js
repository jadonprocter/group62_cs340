import React, { useEffect, useState } from "react";
import ShiftForm from "../../components/ShiftComponents/ShiftForm";
import ShiftTable from "../../components/ShiftComponents/ShiftTable";

function ShiftsPage() {
    const port = 4422
    const [shifts, setShifts] = useState([])

    //grab shifts from backend
    const loadShifts = async () => {
        const getShifts = await fetch(`http://flip3.engr.oregonstate.edu:${port}/shifts`);
        // convert to JS object
        const theShifts = await getShifts.json();
        setShifts(theShifts);
    }

    useEffect(() => {
        loadShifts()
    },[])

    return (
        <div id="tableOverride">
            <h1>Shifts</h1>
            <ShiftTable shifts={shifts}></ShiftTable>
            <ShiftForm></ShiftForm>
        </div>
    )
}

export default ShiftsPage;