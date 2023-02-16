const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const shop = path.join(dir_name, "shop.ejs")

router.route('/')
    .get((req, res) => {
        console.log("shop")
        if (req.session.user) {
            res.render(path.resolve(shop), { user: req.session.user, id: req.session.user })
        }
        else {
            res.render(path.resolve(shop), { user: null })
        }

    })

module.exports = router;      