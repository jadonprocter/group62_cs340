import React, { useEffect, useState } from "react";
import ShiftForm from "../components/ShiftForm";
import ShiftTable from "../components/ShiftTable";

function ShiftsPage() {
    const [shifts, setShifts] = useState([])

    //grab shifts from backend
    const getShifts = () => {
        //dummy data to start
        setShifts([{
            shiftID: 12234,
            startDate: '2021/10/26',
            startTime: '05:00',
            endTime: '17:00',
            holidayPay: "True"
        },
        {
            shiftID: 2342,
            startDate: '2021/10/26',
            startTime: '17:00',
            endTime: '5:00',
            holidayPay: "True"
        }])
    }

    useEffect(() => {
        getShifts()
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