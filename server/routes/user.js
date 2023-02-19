
const express = require("express")
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const router = express.Router()
const sql = require("mssql")
table_name = "users"


const paths = require('../../paths');
const pool = require(paths['@database']);


router.post('/submitForm_register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.Password, 10);
  const data = {
    Email: req.body.Email,
    Password: hashedPassword 
  };
  if (!data) {
    return res.status(400).json({ data: 'No data received' })
  }
  try {
    const check = await pool.request()
      .input('Email', sql.VarChar(8000), data.Email)
      .query(`SELECT Email,Password FROM ${table_name} WHERE Email = @Email`)
    if (check.recordset.length > 0) {
      console.log("Email already exists")
      return res.status(400).json({ Error: "Email already exists" })
    }
    const result = await pool.request()
      .input('Email', sql.VarChar(8000), data.Email)
      .input('Password', sql.VarChar(8000), data.Password)
      .query(`INSERT INTO ${table_name} (Email,Password) VALUES (@Email, @Password)`)
    console.log(result)
    return res.status(200).json({ data: "Account created!" })
  }
  catch (err) {
    console.error(err)
    return res.status(500).json({ Error: 'Error storing data in database' })
  }
})

// TODO: Login 
router.post('/submitForm_login', async (req, res) => {
  const data = req.body
  if (!data) {
    console.log("no data")
    return res.status(400).json({ data: 'No data received' })
  }
  try {
    const result = await pool.request()
      .input('Email', sql.VarChar(8000), data.Email)
      .query(`SELECT Password FROM ${table_name} WHERE Email = @Email`)
    console.log(result.recordset[0].Password);
    bcrypt.compare(data.Password, result.recordset[0].Password, function (err, result) {
      if (err) {

        console.log("error")
        return res.status(400).json({ Error: "Something went wrong in passcompare" });
      }
      if (result) {
        const newUser = {
          id: uuid.v4(),
          email: data.Email
        }
        console.log("Match!")
        req.session.user = newUser;
        


        return res.status(200).json({ data: "Match!" })
      } else {
        // Passwords do not match

        console.log("No match")
        return res.status(401).json({ Error: "No match" })
      }
    });


  } catch (err) {
    console.error(err)
    res.status(500).json({ Error: 'Error in database' })
  }
})





module.exports = router;