import React from "react";

function ShiftRow({shift}) {
    return(
        <tr>
            <td>{shift.shiftID}</td>
            <td>{shift.startDate}</td>
            <td>{shift.startTime}</td>
            <td>{shift.endTime}</td>
            <td>{shift.holidayPay}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default ShiftRow