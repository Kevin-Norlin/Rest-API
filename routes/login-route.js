const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const login = path.join(dir_name, "login.ejs")

router.route('/')
    .get((req, res) => {
        console.log("login")
        if (req.session.user) {
            res.render(path.resolve(login), { user: req.session.user, id: req.session.user })
        }
        else {
            res.render(path.resolve(login), { user: null })
        }
 
    })

module.exports = router;   