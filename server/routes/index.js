const express = require("express")
const path = require('path')
const router = express.Router()
const paths = require('../../paths')
const dir_name = paths['@views'];

const index = path.join(dir_name, "index.ejs")

router.route('/')
    .get((req, res) => {
        console.log(index)
        console.log("index page")
        if (req.session.user) {
            res.render(index, { user: req.session.user, id: req.session.user })
        }
        else {
            res.render(index, { user: null })
        }

    }) 





module.exports = router;


