const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const about = path.join(dir_name, "about.html")

router.route('/')
.get((req,res) => {
    console.log("about page")
    res.sendFile(path.resolve(about));
})

module.exports = router; 