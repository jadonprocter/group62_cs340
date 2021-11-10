DELETE from EmergencyResponseEmployees;
DELETE from Shifts;
DELETE from CallLogs;
DELETE from Reports;
DELETE from EmployeeShifts;
DELETE from ReportEmployees;

INSERT INTO EmergencyResponseEmployees(firstName, lastName, role, compensationRate, areaCode, phoneNumber, employeeEmail)
    VALUES
    ("Philip", "Peiffer", "EMT", 22.15, 406, 5555555, 'fakeemail1@noemail.com'),
    ("Jadon", "Procter", "Driver", 23.45, 406, 5555556, 'fakeemail2@noemail.com'),
    ("Sundance", "Kid", "Paramedic", 22.45, 406, 5555557, 'fakeemail3@noemail.com'),
    ("Butch", "Cassidy", "Driver", 44.05, 406, 5555600, 'fakeemail4@noemail.com'),
    ("Wyatt", "Earp", "Dispatcher", 19.00, 406, 5555601, 'fakeemail5@noemail.com'),
    ("Herby", "Hankok", "Dispatcher", 123.45, 406, 5555602, 'fakeemail6@noemail.com');

INSERT INTO Shifts(shiftDate, startTime, endTime, holidayPay)
    VALUES
    ('2021/11/10', '06:00:00', '18:00:00', '0'),
    ('2021/11/10', '18:00:00', '06:00:00', '0'),
    ('2021/11/11', '06:00:00', '18:00:00', '0'),
    ('2021/11/11', '18:00:00', '06:00:00', '0'),
    ('2021/11/12', '06:00:00', '18:00:00', '0'),
    ('2021/11/12', '18:00:00', '06:00:00', '0'),
    ('2021/11/13', '06:00:00', '18:00:00', '0'),
    ('2021/11/13', '18:00:00', '06:00:00', '0'),
    ('2021/11/14', '06:00:00', '18:00:00', '0'),
    ('2021/11/14', '18:00:00', '06:00:00', '0');

INSERT INTO CallLogs(shiftID, dispatcherID, callTimeStamp, responseType, callerFirstName, callerLastName, chiefComplaint, areaCode, phoneNumber, streetAddress, zipCode, phoneNotes)
    VALUES
    ((SELECT shiftID from Shifts WHERE shiftDate='20211110' AND startTime='06:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Herby'), '06-01-03', 'Fire', 'Good', 'Samaritan', 'Northern Hotel is on fire, 4th Floor', '406', '5555559', '19 N Broadway', '59101', 'Evacuation underway'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211112' AND startTime='18:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Herby'), '06-01-03', 'Medic', 'Some', 'Bystander', 'Chest pain', '406', '5555510', '570 S 24th St', '59101', 'AED on site'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211114' AND startTime='06:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Herby'), '06-01-03', 'Police', 'Billy', 'Joel', 'Robbed at gunpoint downtown', '895', '5555511', '109 N Broadway', '59101', 'Suspect fled on foot towards St. Vincents'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211113' AND startTime='18:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Wyatt'), '06-01-03', 'Fire', 'John', 'Wayne', 'Small fire in Daisy Dukes', '406', '5555512', '222 N Broadway', '59101', ''),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211112' AND startTime='18:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Wyatt'), '06-01-03', 'Medic', 'Clint', 'Eastwood', 'Gunshot wound to thigh', '406', '5555513', '1123 1st Ave N', '59101', 'Tourniquet applied');

INSERT INTO Reports(shiftID, callID, authorID, reportTimeStamp, patientFirstName, patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription)
    VALUES
    ((SELECT shiftID from Shifts WHERE shiftDate='20211110' AND startTime='06:00:00'), (SELECT callID FROM CallLogs WHERE shiftID=(SELECT shiftID from Shifts WHERE shiftDate='20211110' AND startTime='06:00:00') AND callerLastName="Samaritan"), (SELECT employeeID FROM EmergencyResponseEmployees WHERE lastName="Kid"), '06-01-03', 'Paul', 'Scheer', 'Male', 1, 43, 'Burns from Fire while escaping an enclosed room'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211112' AND startTime='18:00:00'), (SELECT callID FROM CallLogs WHERE shiftID=(SELECT shiftID from Shifts WHERE shiftDate='20211112' AND startTime='18:00:00') AND callerLastName="Bystander"), (SELECT employeeID FROM EmergencyResponseEmployees WHERE lastName="Procter"), '06-01-03', 'June', 'Raphael', 'Female', 0, 34, 'car theft'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211114' AND startTime='06:00:00'), (SELECT callID FROM CallLogs WHERE shiftID=(SELECT shiftID from Shifts WHERE shiftDate='20211114' AND startTime='06:00:00') AND callerLastName="Joel"), (SELECT employeeID FROM EmergencyResponseEmployees WHERE lastName="Procter"), '06-01-03', 'Tom', 'Havaford', 'Male', 0, 23, 'Robbery'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211113' AND startTime='18:00:00'), (SELECT callID FROM CallLogs WHERE shiftID=(SELECT shiftID from Shifts WHERE shiftDate='20211113' AND startTime='18:00:00') AND callerLastName="Wayne"), (SELECT employeeID FROM EmergencyResponseEmployees WHERE lastName="Kid"), '06-01-03', 'Donna', 'Miegle', 'Female', 1, 28, 'fire burns'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211112' AND startTime='18:00:00'), (SELECT callID FROM CallLogs WHERE shiftID=(SELECT shiftID from Shifts WHERE shiftDate='20211112' AND startTime='18:00:00') AND callerLastName="Eastwood"), (SELECT employeeID FROM EmergencyResponseEmployees WHERE lastName="Peiffer"), '06-01-03', 'Leslie', 'Knope', 'Female', 0, 33, 'Some one help Leslie omg');

    
INSERT INTO EmployeeShifts(employeeID, shiftID)
    VALUES
    (1, 1),
    (1, 3),
    (1, 5),
    (1, 7),
    (1, 9),
    (2, 2),
    (2, 4),
    (2, 6),
    (2, 8),
    (2, 10),
    (3, 2),
    (3, 4),
    (3, 6),
    (3, 8),
    (4, 1),
    (4, 7),
    (4, 9),
    (5, 2),
    (5, 10),
    (6, 1),
    (6, 2),
    (6, 4);


INSERT INTO ReportEmployees(employeeID, reportID)
    VALUES
    (1, (SELECT reportID FROM  Reports WHERE reportID=1)),
    (1, (SELECT reportID FROM  Reports WHERE reportID=2)),
    (1, (SELECT reportID FROM  Reports WHERE reportID=3)),
    (2, (SELECT reportID FROM  Reports WHERE reportID=3)),
    (2, (SELECT reportID FROM  Reports WHERE reportID=5)),
    (2, (SELECT reportID FROM  Reports WHERE reportID=2)),
    (3, (SELECT reportID FROM  Reports WHERE reportID=4)),
    (3, (SELECT reportID FROM  Reports WHERE reportID=5)),
    (3, (SELECT reportID FROM  Reports WHERE reportID=3)),
    (4, (SELECT reportID FROM  Reports WHERE reportID=4)),
    (4, (SELECT reportID FROM  Reports WHERE reportID=5)),
    (4, (SELECT reportID FROM  Reports WHERE reportID=1)),
    (5, (SELECT reportID FROM  Reports WHERE reportID=3)),
    (5, (SELECT reportID FROM  Reports WHERE reportID=1)),
    (5, (SELECT reportID FROM  Reports WHERE reportID=2)),
    (6, (SELECT reportID FROM  Reports WHERE reportID=5)),
    (6, (SELECT reportID FROM  Reports WHERE reportID=2)),
    (6, (SELECT reportID FROM  Reports WHERE reportID=3)),
    (6, (SELECT reportID FROM  Reports WHERE reportID=1)),
    (6, (SELECT reportID FROM  Reports WHERE reportID=4));
        
