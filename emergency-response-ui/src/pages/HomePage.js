import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <h1> HOMEPAGE </h1>
            <Link to="/employees">Employees Page</Link>
            <Link to="/shifts">Shifts Page</Link>
            <Link to="/call-logs">Call Logs Page</Link>
            <Link to="/reports">Reports Page</Link>

            <div>
                <Link to="/employees">Employees Page</Link>
            </div>
            <div>
                <Link to="/shifts">Shifts Page</Link>
            </div>
            <div>
                <Link to="/call-logs">Call Logs Page</Link>
            </div>
            <div>
                <Link to="/reports">Reports Page</Link>
            </div>
            
        </div>
    )
}

export default HomePage;