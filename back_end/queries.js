const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'employee_db',
  password: 'admin01',
  port: 6000,
})


const getEmployee = (request, response) => {
    pool.query("SELECT * FROM employee_schema.employee WHERE id="+request.body.id, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows[0])
    })
}

const getAllEmployee = (request, response) => {

    pool.query("SELECT * FROM employee_schema.employee", (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}



module.exports = {
    getEmployee,
    getAllEmployee,
}
