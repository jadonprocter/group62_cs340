---------------------GENERAL NOTE----------------------
-- In any place that user input is required, the column name is given with : preceding (e.g. :shiftDate would be a 
-- user input value for the attribute shiftDate in the Shifts table)

/* ---------------------------------------------------------------------------------------------------------------
Employees
-------------------------------------------------------------------------------------------------------------------*/
-- select for table
SELECT
    employeeID, firstName, lastName, role, compensationRate, areaCode, phoneNumber, employeeEmail
FROM
    EmergencyResponseEmployees;

-- create new employee
INSERT INTO 
    EmergencyResponseEmployees(firstName, lastName, role, compensationRate, areaCode, phoneNumber, employeeEmail)
VALUES
    (:firstName, :lastName, :role, :compensationRate, :areaCode, :phoneNumber, :employeeEmail);

-- edit existing employee in the table
UPDATE EmergencyResponseEmployees
SET firstName = :firstName, lastName = :lastName, role = :role, compensationRate = :compensationRate, areaCode = :areaCode, phoneNumber = :phoneNumber, employeeEmail = :employeeEmail
WHERE employeeID = :employeeID;


/* ---------------------------------------------------------------------------------------------------------------
Shifts
-------------------------------------------------------------------------------------------------------------------*/
-- select for table display
SELECT
    shiftID, shiftDate, startTime, endTime, holidayPay
FROM
    Shifts;

-- create new shift instance
INSERT INTO
    Shifts (shiftDate, startTime, endTime, holidayPay)
VALUES
    (:shiftDate, :startTime, :endTime, :holidayPay)

/* ---------------------------------------------------------------------------------------------------------------
CallLogs
-------------------------------------------------------------------------------------------------------------------*/
 -- select CallLogs for Table
SELECT
    callID, shiftID, dispatcherID, callTimeStamp, responseType, callerFirstName, callerLastName, chiefComplaint, areaCode, phoneNumber, streetAddress, zipCode, phoneNotes
FROM
    CallLogs;

--  create new CallLog
INSERT INTO 
    CallLogs(shiftID, dispatcherID, callTimeStamp, responseType, callerFirstName, callerLastName, chiefComplaint, areaCode, phoneNumber, streetAddress, zipCode, phoneNotes)
VALUES
    (shiftID = :shiftID, dispatcherID = :dispatcherID, callTimeStamp = :callTimeStamp, responseType = :responseType, callerFirstName = :callerFirstName, callerLastName = :callerLastName, chiefComplaint = :chiefComplaint, areaCode = :areaCode, phoneNumber = :phoneNumber, streetAddress = :streetAddress, zipCode = :zipCode, phoneNotes = :phoneNotes);

/* ---------------------------------------------------------------------------------------------------------------
Reports
-------------------------------------------------------------------------------------------------------------------*/
 -- select for table display
 SELECT 
    reportID, callID, shiftID, authorID, patientFirstName, patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription
 FROM 
    Reports;

 -- select for searching reports
 SELECT 
    reportID, callID, shiftID, authorID, patientFirstName, patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription
 FROM 
    Reports 
WHERE 
    (:shiftID, :reportID, :callID, :authorID, :patientLastName) = (:user_entered_value);

-- select for creation page (to pre-populate the shiftID field for dropdowns)
-- authorIDs and callIDs should be known by the author (they know their employeeID and callID communicated by dispatcher on dispatch
-- shifts should show up in dropdown as XXXX DATE StartTime from closest date to furthest away
SELECT 
    shiftID, shiftDate, startTime 
FROM 
    Shifts 
WHERE 
    shiftDate <= CURRDATE() 
ORDER BY 
    shiftDate DESC;

-- create new instance
INSERT INTO 
    Reports (callID, shiftID, authorID, patientFirstName, patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription)
VALUES 
    (:callID, :shiftID, :authorID, :patientFirstName, :patientLastName, :patientGender, :patientAge, :medicationAdministered, :incidentDescription);

-- update some instance
UPDATE 
    Reports
SET 
    callID = (:callID),
    shiftID = (:shiftID),
    authorID = (:authorID),
    patientFirstName = (:patientFirstName),
    patientLastName = (:patientLastName),
    patientGender = (:patientGender),
    patientAge = (:patientAge),
    medicationAdministered = (:medicationAdministered),
    incidentDescription = (:incidentDescription)
WHERE
    reportID = (:reportID);

/* ---------------------------------------------------------------------------------------------------------------
Report Employees
-------------------------------------------------------------------------------------------------------------------*/
-- select for displaying
SELECT 
    re.employeeID, e.firstName, e.lastName, re.reportID, r.reportTimeStamp
FROM
    ReportEmployees re 
    INNER JOIN 
    Employees e ON re.employeeID = e.employeeID
    INNER JOIN 
    Reports r ON re.reportID = r.reportID

-- adding employee to report
INSERT INTO
    ReportEmployees (employeeID, reportID)
VALUES
    (:employeeID, :reportID)

/* ---------------------------------------------------------------------------------------------------------------
Employee Shifts
-------------------------------------------------------------------------------------------------------------------*/
-- select for table
SELECT es.employeeID, e.firstName, e.lastName, es.shiftID, s.shiftDate, s.startTime, s.endTime
FROM  EmployeeShifts es
INNER JOIN EmergencyResponseEmployees e ON es.employeeID = e.employeeID
INNER JOIN Shifts s ON es.shiftID = s.shiftID
ORDER BY es.shiftID;

-- select by search 
SELECT es.employeeID, e.firstName, e.lastName, es.shiftID, s.shiftDate, s.startTime, s.endTime
FROM  EmployeeShifts es
INNER JOIN EmergencyResponseEmployees e ON es.employeeID = e.employeeID
INNER JOIN Shifts s ON es.shiftID = s.shiftID
-- THIS WHERE CLAUSE WILL BE NEEDED WHEN ACTUALLY SEARCHING, WHEN WHAT WE ARE 
-- SEARCHING BY WILL BE SPECIFIED BY THE USER.
-- WHERE :searchType = :searchParameter
ORDER BY es.shiftID;

-- create an EmployeeShift (assign an employee to a shift)
INSERT INTO
    EmployeeShifts(employeeID, shiftID)
VALUES
    (:employeeID, :shiftID)