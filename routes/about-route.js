const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const about = path.join(dir_name, "about.ejs")

router.route('/')
    .get((req, res) => {
        console.log("about page")
        if (req.session.user) {
            res.render(path.resolve(about), { user: req.session.user, id: req.session.user })
        }
        else {
            res.render(path.resolve(about), { user: null })
        }

    })



module.exports = router; 