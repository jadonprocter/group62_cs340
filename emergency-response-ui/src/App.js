
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import EmployeesPage from "./pages/EmployeesPage";
import ShiftsPage from "./pages/Shifts";
import ReportsPage from "./pages/ReportsPage";
import CallLogsPage from "./pages/CallLogsPage";
import CreateReport from "./pages/CreateReport"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/employees">
            <EmployeesPage/>
          </Route>
          <Route path="/shifts">
            <ShiftsPage/>
          </Route>
          <Route path="/reports">
            <ReportsPage/>
          </Route>
          <Route path="/call-logs">
            <CallLogsPage/>
          </Route>
          <Route path="/createreport">
            <CreateReport/>
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;