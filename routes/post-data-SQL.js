
const express = require("express")
const sql = require("mssql")
const router = express.Router()

server_name = 'DESKTOP-LAS76MN'
database_name = 'MyDB'
table_name = "LoginDetails"

router.post('/post-data', async (req,res) => {
    const data = req.body
    try {
        const pool = await sql.connect({
            server: server_name,
            database: database_name
            
        })
        const result = await pool.request()
        .input(email,sql.VarChar(50),data.input1)
        .input(password,sql.VarChar(50),data.input2)
        .query(`INSERT INTO ${table_name} (Email,Password) VALUES (${email},${password})`)
        console.log(result)
    }
    catch (error) {
        console.error(error)
        res.status(500).send('Error storing data in database')
    }
})

module.exports = router;