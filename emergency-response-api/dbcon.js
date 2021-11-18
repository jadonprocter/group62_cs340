const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error
}
console.log(result.parsed);

let mysql = require('mysql');

let pool = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASSWORD,
  database        : process.env.DB_DATABASE
});

module.exports.pool = pool