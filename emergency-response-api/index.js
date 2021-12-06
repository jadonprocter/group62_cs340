const db = require('./dbcon');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const PORT = 4422;
const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

/*--------------------------------------------------------------------------------
REPORT queries 
get - get reports table
post - create a new report
put - update existing report
delete - delete a report
---------------------------------------------------------------------------------*/

app.get('/reports', (req, res) => {
    let query1 = 'SELECT reportID, callID, shiftID, authorID, reportTitle, reportTimeStamp, patientFirstName,\
    patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription \
    FROM Reports ORDER BY reportTimeStamp DESC;'

    db.pool.query(query1, function(err, results){
        if (err){
            res.status(500)
            console.error(err)
            res.send(`Error retrieving reports: ${err}`)
        } else {
            // clean up the dates so that they're normal format
            for (let object of results) {
                object.reportTimeStamp = new Date(object.reportTimeStamp).toLocaleDateString()
            }

            res.status(200)
            res.send(results)
        }
     })
})

app.get(`/reports/:searchTerm`, (req, res) => {
    let query1 = `SELECT reportID, callID, shiftID, authorID, reportTitle, reportTimeStamp, patientFirstName,\
    patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription \
    FROM Reports WHERE ${req.params.searchTerm} ORDER BY reportTimeStamp DESC;`

    db.pool.query(query1, function(err, results){
        if (err){
            res.status(500)
            console.error(err)
            res.send(JSON.stringify({'error finding report': err.sqlMessage}))
        } else {
             // clean up the dates so that they're normal format
             for (let object of results) {
                object.reportTimeStamp = new Date(object.reportTimeStamp).toLocaleDateString()
            }
            res.status(200)
            res.send(results)
        }
     })
})

app.post('/reports', (req, res) => {
    let postVals = req.body
    db.pool.query('INSERT INTO Reports SET ?', postVals, function(err, results) {
        if (err){
            res.status(500)
            console.error(err)
            res.send(JSON.stringify({'error creating report': err.sqlMessage}))
        }
        else res.status(201).json(results)
    })
})

app.put('/reports/:reportID', (req, res) => {
    let updateVals = req.body
    let updatequery = 'UPDATE Reports SET ? WHERE ?'
    db.pool.query(updatequery, [updateVals, req.params], function(err, results){
        if(err) {
            console.error(err)
            res.status(500).json({'error updating report': err.sqlMessage})
        }
        else res.status(200).json(results)
    })
})

app.delete('/reports/:reportID', (req, res) => {
    // grab the reportID OBJECT from the parameters object
    let reportID = req.params
    let deletequery = 'DELETE FROM Reports WHERE ?'
    db.pool.query(deletequery, reportID, function(err, results) {
        if (err) {
            console.error(err);
            res.status(500)
            res.send({"Error deleting report": err})
        } else if (results.affectedRows >= 1){
            res.status(204).send()
        } else {
            res.status(404).json({"Report not found": results})
        }
    })
})

/*--------------------------------------------------------------------------------
SHIFTS queries 
get - get shifts table
post - create a new shift
---------------------------------------------------------------------------------*/
app.get('/shifts', (req, res) => {
    const query1 = 'SELECT shiftID, shiftDate, startTime, endTime, holidayPay\
                    FROM Shifts ORDER BY shiftDate DESC;';

    db.pool.query(query1, function(err, results){
        if (err) {
            console.error(err)
            res.status(500).json({'error retrieving shifts': err.sqlMessage})
        } else {
            // clean up shift dates so that they're normal format
            for (let object of results) {
                object.shiftDate = new Date(object.shiftDate).toLocaleDateString()
            }
            res.status(200)
            res.send(results)
        }
     })
})

app.post('/shifts', (req, res) => {
    const postVals = req.body
    db.pool.query('INSERT INTO Shifts SET ?', postVals, function(err, results) {
        if (err) {
            console.error(err)
            res.status(500).json({'error creating shift': err.sqlMessage})
        } else {res.status(201).json(results)}
    })
})

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
 
app.put('/employees/:employeeID', (req, res) => {
    let updateVals = req.body
    let updatequery = 'UPDATE EmergencyResponseEmployees SET ? WHERE ?'
    db.pool.query(updatequery, [updateVals, req.params], function(err, results){
        if(err) {
            console.error(err);
            res.status(500)
            res.send({'Error editing employee': err})
        }
        else res.status(200).json(results)
    })
})

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
app.post('/calllogs', (req, res) => {
    const postVals = req.body
    db.pool.query('INSERT INTO CallLogs SET ?', postVals, (err, results) => {
        if (err) {
            console.log('There was an  error createing the Call Log: ', err);
        }
        else {
            res.status(201).json(results);
        }
    })
})

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
app.post('/employeeshifts', (req, res) => {
    const postVals = req.body
    db.pool.query('INSERT INTO EmployeeShifts SET ?', postVals, (err, results) => {
        if (err) {
            console.log('There was an error assigning the employeee to the shift: ', err);
        }
        else {
            res.status(201).json(results);
        }
    })
})

/*--------------------------------------------------------------------------------
REPORTEMPLOYEES queries 
get - get report employees table
post - create a new report employees instance
---------------------------------------------------------------------------------*/
app.get('/reportemployees', (req, res) => {
    const query1 = `SELECT re.employeeID, e.firstName, e.lastName, re.reportID, r.reportTitle, r.reportTimeStamp 
                    FROM ReportEmployees re
                    INNER JOIN EmergencyResponseEmployees e ON re.employeeID = e.employeeID
                    INNER JOIN Reports r ON re.reportID = r.reportID;`;

    db.pool.query(query1, function(err, results){
        if (err) {
            console.error(err)
            res.status(500).json({'error retrieving report-employees': err.sqlMessage})
        }
        else {
            // clean up the dates so that they're normal format
            for (let object of results) {
                let holder = new Date(object.reportTimeStamp).toLocaleDateString()
                object.reportTime = new Date(object.reportTimeStamp).toLocaleTimeString()
                object.reportTimeStamp = holder
            }
            res.status(200)
            res.send(results)
        }
     })
})

app.post('/reportemployees', (req, res) => {
    const postVals = req.body
    db.pool.query('INSERT INTO ReportEmployees SET ?', postVals, function(err, results) {
        if (err) {
            console.error(err)
            res.status(500).json({'error tying report to employee': err.sqlMessage})
        }
        else {
            res.status(201)
            res.send(results)
        }
    })
})

app.delete('/reportemployees/:employeeID/:reportID', (req, res) => {

    let deletequery = 'DELETE FROM ReportEmployees WHERE employeeID=? AND reportID=?'
    db.pool.query(deletequery, [req.params.employeeID, req.params.reportID], function(err, results) {
        if (err) {
            console.error(err);
            res.status(500)
            res.send({"Error deleting report-employee": err})
        } else if (results.affectedRows >= 1){
            res.status(204).send()
        } else {
            res.status(404).json({"Report-employee not found": results})
        }
    })
})


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

