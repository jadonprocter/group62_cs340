let mysql = require('mysql');

let pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_peifferp',
  password        : '2017',
  database        : 'cs340_peifferp'
});

export default pool