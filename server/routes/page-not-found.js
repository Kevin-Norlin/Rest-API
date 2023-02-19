const express = require("express")
const path = require('path')
const router = express.Router()
const paths = require('../../paths')
const dir_name = paths['@views'];

const notFound = path.join(dir_name, "not-found.ejs")
router.route("*")
    .get((req, res) => {
        if (req.session.user) {
            res.render(path.resolve(notFound), { user: req.session.user, id: req.session.user })
        }
        else {
            res.render(path.resolve(notFound), { user: null })
        } 

    })
 
 


module.exports = router;   