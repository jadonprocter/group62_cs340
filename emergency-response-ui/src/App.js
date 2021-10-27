import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import EmployeesPage from "./pages/EmployeePages/EmployeesPage";
import ShiftsPage from "./pages/ShiftPage/Shifts";
import EmployeeShiftPage from "./pages/EmployeeShiftPages/EmployeeShiftPage";
import ReportsPage from "./pages/ReportPages/ReportsPage";
import CallLogsPage from "./pages/CallLogPages/CallLogsPage";
import CreateCallLogPage from "./pages/CallLogPages/CreateCallLogPage";
import CreateReport from "./pages/ReportPages/CreateReport";
import CreateEmployeePage from "./pages/EmployeePages/CreateEmployeePage";
import EditEmployeePage from "./pages/EmployeePages/EditEmployeePage";
import { useState } from "react";

function App() {
  const [employeeToEdit, setEmployeeToEdit] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavigationBar />
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
          <Route path="/edit-employee">
            <EditEmployeePage employeeToEdit={employeeToEdit} />
          </Route>
          <Route path="/shifts">
            <ShiftsPage />
          </Route>
          <Route path="/employee-shifts">
            <EmployeeShiftPage />
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
          <Route path="/create-call-log">
            <CreateCallLogPage />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
