const express = require("express")
const path = require('path')
const router = express.Router()
const dir_name = "public"

const index = path.join(dir_name, "index.ejs")

router.route('/')
    .get((req, res) => {
        console.log(index)
        console.log("index page")
        if (req.session.user) {
            res.render(path.resolve(index), { user: req.session.user, id: req.session.user })
        }
        else {
            res.render(path.resolve(index), { user: null })
        }

    })





module.exports = router;


