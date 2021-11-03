import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import ReportEmployeesPage from "./pages/ReportEmployeePages/ReportEmployeesPage";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [employeeToEdit, setEmployeeToEdit] = useState();
  const [reportToEdit, setReportToEdit] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Container fluid>
            <Row>
              <Col>
                <NavigationBar />
              </Col>
            </Row>
            <Row>
              <Col>
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
                  <ReportsPage setReportToEdit={setReportToEdit} />
                </Route>
                <Route path="/createreport">
                  <CreateReport />
                </Route>
                <Route path="/editreport">
                  <CreateReport reportToEdit={reportToEdit} />
                </Route>
                <Route path="/reportemployees">
                  <ReportEmployeesPage />
                </Route>
                <Route path="/call-logs">
                  <CallLogsPage />
                </Route>
                <Route path="/create-call-log">
                  <CreateCallLogPage />
                </Route>
              </Col>
            </Row>
          </Container>
        </Router>
      </header>
    </div>
  );
}

export default App;
