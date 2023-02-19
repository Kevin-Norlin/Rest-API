
/*
Database table (products): 
id, name, description, image_url, price, current_stock
*/
const express = require("express");
const router = express.Router();
const sql = require("mssql");
const paths = require('../../paths');
const pool = require(paths['@database']);

let products;
router.route('/add_product')
  .post(async (req,res) => {
    const data = req.body;
    console.log(data)
        const result = await pool.request().query(`INSERT INTO products (name, description, image_url, price, current_stock)
                                                   VALUES ('${data.name}', '${data.description}', '${data.image_url}', '${data.price}', '${data.current_stock}');`);
        console.log("data posted!")
        return res.status(200).json({data: "Success!"});

    })
  

module.exports = router;