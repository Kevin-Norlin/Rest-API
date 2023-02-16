const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const myAccount = path.join(dir_name, "myaccount.ejs")

router.route('/')
    .get((req, res) => {
        console.log("My account page")
        if (req.session.user) {
            res.render(path.resolve(myAccount), { user: req.session.user, id: req.session.user })
        }
        else {
            res.render(path.resolve(myAccount), { user: null })
        }

    })



module.exports = router; 