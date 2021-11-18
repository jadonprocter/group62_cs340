const db = require('./dbcon');
const express = require('express');
const cors = require('cors')
const SQL = require('sql-template-strings');

const PORT = 4422;
const app = express();

app.use(express.json())
app.use(cors())

/*--------------------------------------------------------------------------------
REPORT queries 
get - get reports table
post - create a new report
put - update existing report
delete - delete a report
---------------------------------------------------------------------------------*/
//text for commit
app.get('/reports', (req, res) => {
    let query1 = 'SELECT reportID, callID, shiftID, authorID, patientFirstName,\
    patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription \
    FROM Reports;'

    db.pool.query(query1, function(err, results){
        if (err){console.error(err)}
        res.send(results)
     })
})

app.post('/reports', (req, res) => {
    let postVals = req.body
    db.pool.query('INSERT INTO Reports SET ?', postVals, function(err, results) {
        if (err) {
            console.error(err);
            res.send({'Error': 'Error creating report', 'Error Info': err})
        }
        res.status(201).json(results)
    })
})

// to be filled in later:
app.put('/reports', () => {})
app.delete('/reports', () => {})

/*--------------------------------------------------------------------------------
SHIFTS queries 
get - get shifts table
post - create a new shift
---------------------------------------------------------------------------------*/
app.get('/shifts', () => {})
app.post('/shifts', () => {})

/*--------------------------------------------------------------------------------
EMPLOYEES queries 
get - get employees table
post - create a new employee
put - update existing employee
---------------------------------------------------------------------------------*/
app.get('/employees', (req, res) => {
    const query1 = 'SELECT employeeID, firstName, lastName, role, compensationRate, areaCode, phoneNumber, employeeEmail\
                    FROM EmergencyResponseEmployees;'

    db.pool.query(query1, function(err, results){
        if (err){console.error(err)}
        res.send(results)
     })
})

app.post('/employees', (req, res) => {
    const postVals = req.body
    db.pool.query('INSERT INTO EmergencyResponseEmployees SET ?', postVals, function(err, results) {
        if (err) {
            console.error(err);
            res.send({'Error': 'Error creating employee', 'Error Info': err})
        }
        res.status(201).json(results)
    })
})
// PUT NOT WORKING -- 
// app.put('/employees', (req, res) => {
//     const putVals = req.body
    
//     const updateQuery = (SQL`UPDATE EmergencyResponseEmployees
//                             SET firstName = ${putVals.firstName}, lastName = ${putVals.lastName}, role = ${putVals.role}, 
//                                 compensationRate = ${putVals.compensationRate}, areaCode = ${putVals.areaCode}, phoneNumber = ${putVals.phoneNumber}, 
//                                 employeeEmail = ${putVals.employeeEmail}
//                             WHERE employeeID = ${putVals.employeeID}`);
//     db.pool.query(updateQuery, (err, results) => {
//         if (err) {
//             console.log(err)
//             console.log(results)

//         }
//         else {
//             console.log(results)
//             res.status(204).json(results)
//         }
//     })
    
// })

/*--------------------------------------------------------------------------------
CALLLOGS queries 
get - get call log table
post - create a new call log
---------------------------------------------------------------------------------*/
app.get('/calllogs', (req, res) => {
    const query1 = 'SELECT callID, shiftID, dispatcherID, callTimeStamp, responseType, callerFirstName, callerLastName, chiefComplaint,\
                         areaCode, phoneNumber, streetAddress, zipCode, phoneNotes\
                    FROM CallLogs;';

    db.pool.query(query1, function(err, results){
        if (err){console.error(err)}
            res.send(results)
    })
})
app.post('/calllogs', () => {})

/*--------------------------------------------------------------------------------
EMPLOYEESHIFTS queries 
get - get employee shifts table
post - create a new employeeshift instance
---------------------------------------------------------------------------------*/
app.get('/employeeshifts', (req, res) => {
    const query1 = 'SELECT es.employeeID, e.firstName, e.lastName, es.shiftID, s.shiftDate, s.startTime, s.endTime\
                    FROM  EmployeeShifts es\
                    INNER JOIN EmergencyResponseEmployees e ON es.employeeID = e.employeeID\
                    INNER JOIN Shifts s ON es.shiftID = s.shiftID\
                    ORDER BY es.shiftID;';

    db.pool.query(query1, function(err, results){
        if (err){console.error(err)}
        res.send(results)
     })
})
app.post('/employeeshifts', () => {})

/*--------------------------------------------------------------------------------
REPORTEMPLOYEES queries 
get - get report employees table
post - create a new report employees instance
---------------------------------------------------------------------------------*/
app.get('/reportemployees', () => {})
app.post('/reportemployees', () => {})


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

