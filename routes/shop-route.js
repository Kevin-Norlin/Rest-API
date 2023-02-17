const express = require("express")
const path = require('path')
let shopItems = []; /* = require("../shopitemsarray.js") */
const router = express.Router()
const dir_name = "public"

const shop = path.join(dir_name, "shop.ejs")






router.route('/')
    .get(async (req, res) => {
        // Retrieve shopitems from db
        await fetch('http://localhost:3000/get_products')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                shopItems = data;
                console.log("i am in the function! :D")
                
            })
            .catch(error => {
                console.error(error);
            })
        console.log("shop")
        console.log(shopItems)
        if (req.session.user) {
            res.render(path.resolve(shop), { user: req.session.user, id: req.session.user, shopItems: shopItems })
        }
        else {
            res.render(path.resolve(shop), { user: null, shopItems: shopItems })
            console.log("in route")
            console.log(shopItems)
        }

    })

module.exports = router;      