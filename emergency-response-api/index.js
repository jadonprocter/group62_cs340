const db = require('./dbcon');
const express = require('express');

const PORT = 4000;
const app = express();

app.use(express.json())

/*--------------------------------------------------------------------------------
REPORT queries 
get - get reports table
post - create a new report
put - update existing report
delete - delete a report
---------------------------------------------------------------------------------*/
app.get('/getreports', (req, res) => {
    let query1 = 'SELECT reportID, callID, shiftID, authorID, patientFirstName,\
    patientLastName, patientGender, patientAge, medicationAdministered, incidentDescription \
    FROM Reports;'

    db.pool.query(query1, function(err, results, fields){
         if (err) {console.error(err)};
         console.log(results);
     })
     console.log(res)
})

app.post('/reports', () => {})

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
app.get('/employees', () => {})
app.post('/employees', () => {})

/*--------------------------------------------------------------------------------
CALLLOGS queries 
get - get call log table
post - create a new call log
---------------------------------------------------------------------------------*/
app.get('/calllogs', () => {})
app.post('/calllogs', () => {})

/*--------------------------------------------------------------------------------
EMPLOYEESHIFTS queries 
get - get employee shifts table
post - create a new employeeshift instance
---------------------------------------------------------------------------------*/
app.get('/employeeshifts', () => {})
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

