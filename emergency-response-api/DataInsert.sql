
DELETE from EmergencyResponseEmployees;
DELETE from Shifts;
DELETE from CallLogs;

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

INSERT INTO CallLogs(shiftID, dispatcherID, responseType, callerFirstName, callerLastName, chiefComplaint, areaCode, phoneNumber, streetAddress, zipCode, phoneNotes)
    VALUES
    ((SELECT shiftID from Shifts WHERE shiftDate='20211110' AND startTime='06:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Herby'), 'Fire', 'Good', 'Samaritan', 'Northern Hotel is on fire, 4th Floor', '406', '5555559', '19 N Broadway', '59101', 'Evacuation underway'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211112' AND startTime='18:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Herby'), 'Medic', 'Some', 'Bystander', 'Chest pain', '406', '5555510', '570 S 24th St', '59101', 'AED on site'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211114' AND startTime='06:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Herby'), 'Police', 'Billy', 'Joel', 'Robbed at gunpoint downtown', '895', '5555511', '109 N Broadway', '59101', 'Suspect fled on foot towards St. Vincents'),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211113' AND startTime='18:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Wyatt'), 'Fire', 'John', 'Wayne', 'Small fire in Daisy Dukes', '406', '5555512', '222 N Broadway', '59101', ''),
    ((SELECT shiftID from Shifts WHERE shiftDate='20211112' AND startTime='18:00:00'), (SELECT employeeID FROM EmergencyResponseEmployees WHERE firstName='Wyatt'), 'Medic', 'Clint', 'Eastwood', 'Gunshot wound to thigh', '406', '5555513', '1123 1st Ave N', '59101', 'Tourniquet applied');
