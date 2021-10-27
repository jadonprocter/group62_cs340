import React, { useState } from "react";

function ReportSearch(){
    const [searchCol, setsearchCol] = useState()
    const [searchVal, setsearchVal] = useState()

    //define function to get the results after form submitted
    const getReports = () => {
        //use search col to fill in select query
        return
    }

    return(
        <div>
            <fieldset>
                <legend>Search for a Report:</legend>
                <label>Select Category:
                    <select value={searchCol} onChange={e => setsearchCol(e.target.value)}>
                        <option>Shift ID</option>
                        <option>Author ID</option>
                        <option>Patient Last Name</option>
                    </select>
                    <input
                        type="search"
                        value={searchVal}
                        placeholder="Enter Search Term"
                        onChange={e => setsearchVal(e.target.value)}/>
                </label>
            </fieldset>
        </div>
    )
}

export default ReportSearch