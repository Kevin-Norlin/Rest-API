const express = require("express")
const app = express()
const dirname = "C:\Users\kevin\VsCode\Htmlcss\Rest API"
const path = require('path')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const session = require("express-session");
app.set('view engine','ejs')



app.use(session({
    secret: "testsecret",
    cookie:{
        sameSite: "strict",
    },
    saveUnitilialized: false
}))

/* A session can have the following:
* User - containing: id and email
* cart - containing: array of items that have been added to the cart
* order - containing: id, adress, totalprice, payment (paymentType, payment details).


*/

const requireAuth = (req, res, next) => {
    if (req.session.user && req.session.user.id) {
      // User is authorized, continue to next middleware or route handler
      console.log("authfunction");
      console.log(req.session.user)
      next();
    } else {
      // User is not authorized, redirect to login page or return 401 Unauthorized
      res.status(401).send('Unauthorized');
    }
  };


// public html,css 
app.use(express.static(__dirname + '/public', {index: false}));
// javascript
app.use((express.static(__dirname + '/public/scripts')));

// images 
app.use(express.static(__dirname+ '/public/images'));


 
   

// db router 
const dbRouter = require("./routes/post-userdata-SQL")
app.post('/submitForm_register',dbRouter)
app.post('/submitForm_login',dbRouter)

const productsDbRouter = require("./routes/get-products-route")
app.get('/get_products',productsDbRouter);


// login router
const loginRouter = require("./routes/login-route")
app.use('/login',loginRouter)

// login successful router
const loginSuccessfulRouter = require("./routes/login-successful-route")
app.use('/login-successful',requireAuth,loginSuccessfulRouter) 

//about router
const aboutRouter = require("./routes/about-route")
app.use('/about',aboutRouter)

// shop router
const shopRouter = require("./routes/shop-route")
app.use('/shop',shopRouter) 

// my account router
const myAccountRouter = require("./routes/myaccount-route")
app.use('/myaccount',requireAuth,myAccountRouter)

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
