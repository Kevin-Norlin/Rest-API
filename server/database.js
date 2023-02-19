const sql = require('mssql');
const config = require('../config')
const server_name = process.env.DB_HOST;
const database_name = process.env.DB_NAME;
const user_name = process.env.DB_USER;
const user_password = process.env.DB_PASS;
const driver_version = process.env.DB_DRIVER;
console.log(server_name)


const pool = new sql.ConnectionPool({

    user: user_name,
    password: user_password,
    server: server_name,
    database: database_name,
    driver: driver_version,
    encrypt: false,

    options: {
        trustedConnection: true
    }
});

pool.connect(err => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Connected to database');
    }
  });

  module.exports = pool;