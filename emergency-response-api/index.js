const pool = require('./dbcon');
const express =require('express');

const PORT = 3000;
const app = express();

// SELECT (read) queries METHOD - get
app.get('/reports', () => {})
app.get('/employees', () => {})
app.get('/shifts', () => {})
app.get('/calllogs', () => {})
app.get('/reportemployees', () => {})
app.get('/employeeshifts', () => {})

// INSERT (create) queries METHOD - post
app.post('/reports', () => {})
app.post('/employees', () => {})
app.post('/shifts', () => {})
app.post('/calllogs', () => {})
app.post('/reportemployees', () => {})
app.post('/employeeshifts', () => {})

// UPDATE (update) queries METHOD - put

// DELETE (delete) queries METHOD - delete
app.delete('/reports', () => {})


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

