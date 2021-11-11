---------------------GENERAL NOTE----------------------
-- In any place that user input is required, the column name is given with : preceding (e.g. :shiftDate would be a 
-- user input value for the attribute shiftDate in the Shifts table)

/* ---------------------------------------------------------------------------------------------------------------
Employees
-------------------------------------------------------------------------------------------------------------------*/


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

