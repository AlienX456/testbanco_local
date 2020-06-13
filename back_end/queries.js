const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'employee_db',
  password: 'admin01',
  port: 6000,
})


const getEmployee = (request, response) => {
    console.log('SELECT * FROM employee_schema.employee WHERE fullname="'+request.body.fullname+'"');

    pool.query("SELECT * FROM employee_schema.employee WHERE fullname='"+request.body.fullname+"'", (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows[0])
    })
}

module.exports = {
    getEmployee,
}
