const express = require("express")
const path = require('path')
const shopItems = require("C:/Users/kevin/VsCode/Htmlcss/Rest API/shopitemsarray")
const router = express.Router()
const dir_name = "public"

const shop = path.join(dir_name, "shop.ejs")

router.route('/')
    .get((req, res) => {
        console.log("shop")
        console.log(shopItems)
        if (req.session.user) {
            res.render(path.resolve(shop), { user: req.session.user, id: req.session.user, shopItems: shopItems })
        }
        else {
            res.render(path.resolve(shop), { user: null,shopItems: shopItems })
        }

    })

module.exports = router;      