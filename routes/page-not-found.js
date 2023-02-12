const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"


router.route("*")
.get((req,res) => {
    res.sendFile(path.resolve(dir_name,"not-found.html"))
    
})

module.exports = router;   