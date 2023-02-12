const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const index = path.join(dir_name,"index.html")

router.route('/')
.get((req,res) => {
    console.log(index)
    console.log("index page")
    res.sendFile(path.resolve(index))

})

module.exports = router; 


