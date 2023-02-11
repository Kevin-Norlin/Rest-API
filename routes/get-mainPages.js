const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const index = path.join(dir_name,"index.html")
const about = path.join(dir_name, "about.html")
const login = path.join(dir_name, "login.html")
const shop = path.join(dir_name, "shop.html")


router.route('/').get((req,res) => {
    console.log(index)
    console.log("index page")
    res.sendFile(path.resolve(index))

})

router.route('/about').get((req,res) => {
    console.log("about page")
    res.sendFile(path.resolve(about));
})

router.route('/login').get((req,res) => {
    console.log("login")
    res.sendFile(path.resolve(login))
})

router.route('/shop').get((req,res) => {
    console.log("shop")
    res.sendFile(path.resolve(shop))
})
module.exports = router;