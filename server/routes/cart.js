const express = require("express")
const path = require('path')
const router = express.Router()
const paths = require('../../paths')
const dir_name = paths['@views'];

router.route('/add_product_to_cart')
    .post((req,res) => {
        const data = req.body;

        if (!req.session.cart) {
            req.session.cart = [];
            req.body.quantity = 1;
            req.session.cart.push(req.body);
        }
        else if (!req.session.cart[req.body.item.id]) {
            req.body.quantity = 1;
            req.session.cart.push(req.body);
        }
        else {
            req.session.cart[req.body.item.id].quantity++;
        }
        req.session.save();
        
    })

module.exports = router;