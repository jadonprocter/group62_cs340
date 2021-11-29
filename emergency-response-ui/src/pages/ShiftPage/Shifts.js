import React, { useEffect, useState } from "react";
import ShiftForm from "../../components/ShiftComponents/ShiftForm";
import ShiftTable from "../../components/ShiftComponents/ShiftTable";

function ShiftsPage() {
    const [shifts, setShifts] = useState([])

    //grab shifts from backend
    const loadShifts = async () => {
        const getShifts = await fetch(`http://flip3.engr.oregonstate.edu:${process.env.BACKEND_URL}/calllogs`);
        // convert to JS object
        const theShifts = await getShifts.json();
        setShifts(theShifts);
    }

    useEffect(() => {
        loadShifts()
    },[])

    return (
        <div>
            <h1>Shifts</h1>
            <ShiftTable shifts={shifts}></ShiftTable>
            <ShiftForm></ShiftForm>
        </div>
    )
}

export default ShiftsPage;