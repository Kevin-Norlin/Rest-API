const express = require("express")
const app = express()
const dirname = "C:\Users\kevin\VsCode\Htmlcss\Rest API"
const path = require('path')

// Server start
app.listen(3000, () => {
    console.log("API sever listening on port 3000...")
})

// db router
const dbRouter = require("./routes/post-data-SQL")
app.use('./login',dbRouter)

// mainPages router
app.use(express.static(path.join(dirname,"public")))
const mainPagesRouter = require("./routes/get-mainPages")
app.use('/',mainPagesRouter)
 

