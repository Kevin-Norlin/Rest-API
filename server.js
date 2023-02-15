const express = require("express")
const app = express()
const dirname = "C:\Users\kevin\VsCode\Htmlcss\Rest API"
const path = require('path')
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// public html,css and javascript files
app.use(express.static(__dirname + '/public'));

// images
app.use(express.static(__dirname+ '/public/images'));


 
   

// db router 
const dbRouter = require("./routes/post-data-SQL")
app.post('/submitForm',dbRouter)



// login router
const loginRouter = require("./routes/login-route")
app.use('/login',loginRouter)

//about router
const aboutRouter = require("./routes/about-route")
app.use('/about',aboutRouter)

// shop router
const shopRouter = require("./routes/shop-route")
app.use('/shop',shopRouter) 

// index router
const indexRouter = require("./routes/index-route")
app.use('/',indexRouter)

// page-not-found router
const notFoundRouter = require("./routes/page-not-found")
app.use(notFoundRouter)








// Server start
app.listen(3000, () => {
    console.log("API sever listening on port 3000...")
})
