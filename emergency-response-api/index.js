const db = require('./dbcon');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const PORT = process.env.PORT;
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
    let query1 = 'SELECT reportID, callID, shiftID, authorID, patientFirstName,\
    patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription \
    FROM Reports;'

    db.pool.query(query1, function(err, results){
        if (err){
            res.status(500)
            console.error(err)
            res.send(`Error retrieving reports: ${err}`)
        } else {
            res.status(200)
            res.send(results)
        }
     })
})

app.get(`/reports/:searchCol/:searchVal`, (req, res) => {
    let query1 = 'SELECT reportID, callID, shiftID, authorID, patientFirstName,\
    patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription \
    FROM Reports WHERE '

    // pull out the search terms
    let searchCol = req.params.searchCol
    let searchVal = req.params.searchVal
    let searchTerm = String(searchCol) + '=' + String(searchVal)

    // add them to the end of the query
    query1 = query1 + searchTerm

    db.pool.query(query1, function(err, results){
        if (err){
            res.status(500)
            console.error(err)
            res.send(`Error retrieving reports: ${err}`)
        } else {
            res.status(200)
            res.send(results)
        }
     })
})

app.post('/reports', (req, res) => {
    let postVals = req.body
    db.pool.query('INSERT INTO Reports SET ?', postVals, function(err, results) {
        if (err) {
            console.error(err);
            res.status(500).json(results)
        }
        else res.status(201).json(results)
    })
})

app.put('/reports/:reportID', (req, res) => {
    let updateVals = req.body
    console.log(req.body);
    let updatequery = 'UPDATE Reports SET ? WHERE ?'
    db.pool.query(updatequery, [updateVals, req.params], function(err, results){
        if(err) {
            console.error(err);
            res.status(500)
            res.send({'Error updating report': err})
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
                    FROM Shifts;';

    db.pool.query(query1, function(err, results){
        if (err){
            res.status(500)
            console.error(err)
            res.send(`Error retrieving shifts: ${err}`)
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
            console.error(err);
            res.status(500)
            res.send({'Error': 'Error creating shift', 'Error Info': err})
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
    console.log("HERE-----------------");
    console.log(req.body);
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
    const query1 = `SELECT re.employeeID, e.firstName, e.lastName, re.reportID, r.reportTimeStamp 
                    FROM ReportEmployees re
                    INNER JOIN EmergencyResponseEmployees e ON re.employeeID = e.employeeID
                    INNER JOIN Reports r ON re.reportID = r.reportID;`;

    db.pool.query(query1, function(err, results){
        if (err){
            console.error(err); 
            res.status(500)
            res.send(`Error retrieving report employees: ${err}`)
        }
        else {
            // clean up the dates so that they're normal format
            for (let object of results) {
                object.reportTimeStamp = new Date(object.reportTimeStamp).toLocaleDateString()

            }
            res.status(200)
            res.send(results)
        }
     })
})

app.post('/reportemployees', (req, res) => {
    const postVals = req.body
    db.pool.query('INSERT INTO ReportEmployees SET ?', postVals, function(err, results) {
        if (err){
            console.error(err); 
            res.status(500)
            res.send(`Error tying report to employees: ${err}`)
        }
        else {
            res.status(200)
            res.send(results)
        }
    })
})


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

