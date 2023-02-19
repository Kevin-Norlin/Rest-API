const express = require("express")
const path = require('path')
const router = express.Router()
const paths = require('../../paths')
const dir_name = paths['@views'];

const login = path.join(dir_name, "login.ejs")
const loginSuccessful = path.join(dir_name, "login-successful.ejs")

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

router.route('/login-successful')
    .get((req, res) => {
        console.log("login-successful")
        if (req.session.user) {
            res.render(path.resolve(loginSuccessful), { user: req.session.user, id: req.session.user })
        }
        else {
            res.render(path.resolve(login), { user: null })
        }

    })



module.exports = router; 

