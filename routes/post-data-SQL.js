
const express = require("express")

const router = express.Router()
const sql = require("mssql")
server_name = 'DESKTOP-LAS76MN'
database_name = 'MyDB'
table_name = "users"
user_name = 'sa'
user_password = '1234'
driver_version = 'tedious'

router.post('/submitForm', async (req,res) => {
    const data = req.body
    if (!data) {
        return res.status(400).send('No data received')
    }
    try {
        const pool = await sql.connect({
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
        const check = await pool.request()
        .input('Email',sql.VarChar(8000),data.Email)
        .query(`SELECT Email,Password FROM ${table_name} WHERE Email = @Email`)
        if (check.recordset.length > 0) {
            console.log("Email already exists")
            return res.status(400).send("Email already exists")
        }
        const result = await pool.request()
        .input('Email',sql.VarChar(8000),data.Email)
        .input('Password',sql.VarChar(8000),data.Password)
        .query(`INSERT INTO ${table_name} (Email,Password) VALUES (@Email, @Password)`)
        console.log(result)
    }
    catch (err) {
        console.error(err)
        res.status(500).send('Error storing data in database')
    }
})

// TODO: Login 

module.exports = router;