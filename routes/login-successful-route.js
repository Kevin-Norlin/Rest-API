const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const login = path.join(dir_name, "login-successful.html")

router.route('/')
.get((req,res) => {
    console.log("login-successful")
    res.sendFile(path.resolve(login))
})

module.exports = router; 