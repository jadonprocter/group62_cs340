-- this file will serve as the creation file for the database

CREATE TABLE EmergencyResponseEmployees(
    employeeID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    role enum('EMT', 'Driver', 'Paramedic', 'Dispatcher') NOT NULL,
    compensationRate decimal(5,2) NOT NULL,
    areaCode char(3) NOT NULL,
    phoneNumber char(7) NOT NULL UNIQUE,
    employeeEmail varchar(255) NOT NULL UNIQUE
);

CREATE TABLE Shifts(
    shiftID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    shiftDate date NOT NULL, 
    startTime time NOT NULL,
    endTime time NOT NULL,
    holidayPay boolean NOT NULL DEFAULT 0
);

    
CREATE TABLE CallLogs(
    callID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    shiftID int NOT NULL,
    dispatcherID int NOT NULL,
    callTimeStamp timestamp NOT NULL,
    responseType enum('Fire', 'Medic', 'Police') NOT NULL,
    callerFirstName varchar(255) NOT NULL,
    callerLastName varchar(255) NOT NULL,
    chiefComplaint varchar(800),
    areaCode char(3) NOT NULL,
    phoneNumber char(7) NOT NULL,
    streetAddress varchar(255) NOT NULL,
    zipCode char(5) NOT NULL,
    phoneNotes varchar(2000)
);

CREATE TABLE Reports(
    reportID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    shiftID int NOT NULL,
    callID int,
    authorID int NOT NULL,
    reportTimeStamp timestamp NOT NULL,
    patientFirstName varchar(255) NOT NULL,
    patientLastName varchar(255) NOT NULL,
    patientGender enum('Male', 'Female') NOT NULL,
    patientAge int NOT NULL,
    medicationAdministered boolean NOT NULL DEFAULT 0,
    incidentDescription varchar(20000) NOT NULL
);

-- on delete (if we delete an employee or a report, no need to keep M:M table entity)
CREATE TABLE ReportEmployees(
    employeeID int NOT NULL,
    reportID int NOT NULL,
    PRIMARY KEY(employeeID, reportID),
    FOREIGN KEY (employeeID)
        REFERENCES EmergencyResponseEmployees(employeeID)
        ON DELETE CASCADE,
    FOREIGN KEY (reportID)
        REFERENCES Reports(reportID)
        ON DELETE CASCADE
);

-- on delete (if we delete an employee or a shift, no need to keep M:M table entity)
CREATE TABLE EmployeeShifts(
    employeeID int NOT NULL,
    shiftID int NOT NULL,
    PRIMARY KEY(employeeID, shiftID),
    FOREIGN KEY (employeeID)
        REFERENCES EmergencyResponseEmployees(employeeID)
        ON DELETE CASCADE,
    FOREIGN KEY (shiftID)
        REFERENCES Shifts(shiftID)
        ON DELETE CASCADE
);

--adding in the FKs

-- ON Delete, restrict (if a report is tagged to a shift, call, or author, will no longer be able to delete
-- the shift, call, or author)
ALTER TABLE Reports
    ADD FOREIGN KEY (shiftID) 
        REFERENCES Shifts(shiftID)
        ON DELETE restrict;
ALTER TABLE Reports
    ADD FOREIGN KEY (callID)
        REFERENCES CallLogs(callID)
        ON DELETE restrict;
ALTER TABLE Reports
    ADD FOREIGN KEY (authorID)
        REFERENCES EmergencyResponseEmployees(employeeID)
        ON DELETE restrict;

ALTER TABLE CallLogs
    ADD FOREIGN KEY (shiftID)
        REFERENCES Shifts(shiftID)
        ON DELETE restrict;
ALTER TABLE CallLogs
    ADD FOREIGN KEY (dispatcherID)
        REFERENCES EmergencyResponseEmployees(employeeID)
        ON DELETE restrict;