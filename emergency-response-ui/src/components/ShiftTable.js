import React from "react";
import ShiftRow from "./ShiftRow";

function ShiftTable({shifts}){

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Shift ID</th>
                        <th>Start Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Holiday Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map((shift) => <ShiftRow shift={shift} key={shift.shiftID}></ShiftRow>)}
                </tbody>
            </table>
        </div>
    )
}

export default ShiftTable