
/*
Database table (products): 
id, name, description, image_url, price, current_stock
*/
const express = require("express");
const router = express.Router();
const sql = require("mssql");
server_name = 'DESKTOP-LAS76MN';
database_name = 'MyDB';
table_name = "products"
user_name = 'sa'
user_password = '1234'
driver_version = 'tedious'

let products;
router.route('/add_product')
  .post(async (req,res) => {
    const data = req.body;
    console.log(data)

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
        const result = await pool.request().query(`INSERT INTO products (name, description, image_url, price, current_stock)
                                                   VALUES ('${data.name}', '${data.description}', '${data.image_url}', '${data.price}', '${data.current_stock}');`);
        console.log("data posted!")
        return res.status(200).json({data: "Success!"});

    }
    catch(err) {
        console.error(err);
        res.status(500).send("Error inserting product to db");
    }
})

module.exports = router;