const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const shop = path.join(dir_name, "shop.html")

router.route('/')
.get((req,res) => {
    console.log("shop")
    res.sendFile(path.resolve(shop))
})

module.exports = router;  