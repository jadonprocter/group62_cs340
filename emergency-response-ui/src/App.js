import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import EmployeesPage from "./pages/EmployeePages/EmployeesPage";
import ShiftsPage from "./pages/Shifts";
import ReportsPage from "./pages/ReportsPage";
import CallLogsPage from "./pages/CallLogsPage";
import CreateReport from "./pages/CreateReport";
import CreateEmployeePage from "./pages/EmployeePages/CreateEmployeePage";
import EditEmployeePage from "./pages/EmployeePages/EditEmployeePage";
import { useState } from "react";

function App() {
  const [employeeToEdit, setEmployeeToEdit] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/employees">
            <EmployeesPage
              employeeToEdit={employeeToEdit}
              setEmployeeToEdit={setEmployeeToEdit}
            />
          </Route>
          <Route path="/create-employee">
            <CreateEmployeePage />
          </Route>
          <Route path="edit-employee">
            <EditEmployeePage employeeToEdit={employeeToEdit} />
          </Route>
          <Route path="/shifts">
            <ShiftsPage />
          </Route>
          <Route path="/reports">
            <ReportsPage />
          </Route>
          <Route path="/createreport">
            <CreateReport />
          </Route>
          <Route path="/call-logs">
            <CallLogsPage />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
