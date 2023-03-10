const express = require("express")
const path = require('path')
let shopItems = []; /* = require("../shopitemsarray.js") */
const router = express.Router()
const table_name = "products"
const paths = require('../../paths');
const pool = require(paths['@database']);
const shop = (paths['@views']);






router.route('/')
    .get(async (req, res) => {
        // Retrieve shopitems from db
        try {
            const result = await pool.request().query(`SELECT * FROM ${table_name}`);
            shopItems = result.recordset;


            console.log("shop")

            if (req.session.user) {
                res.render(shop + '/shop.ejs', { user: req.session.user, id: req.session.user.id, shopItems: shopItems })
            }
            else {
                res.render(shop + '/shop.ejs', { user: null, shopItems: shopItems })

            }
        }
        catch (err) {
            console.error('Error executing database query:', err);
            res.status(500).send('Internal server error');
        }

    })

module.exports = router;

router.route('/add_product_to_cart')
    .post((req, res) => {
        const productToAdd = req.body.product;
        const entry = {
            quantity: 1,
            product: productToAdd
        }
        if (!req.session.cart) {
            req.session.cart = [];
            req.session.cart.push(entry);
            return res.status(200).json({ message: 'Product added to cart' });
        }
        const index = req.session.cart.findIndex(obj => obj.product.id === productToAdd.id);
        if (index !== -1) {
            req.session.cart[index].quantity++;
        }
        else {
            req.session.cart.push(entry);
        }
        console.log("Product added to cart")
        res.status(200).json({ message: 'Product added to cart' });
    }) 