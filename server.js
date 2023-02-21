const express = require("express")
const app = express()
const path = require('path')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const session = require("express-session");
app.set('view engine','ejs')
app.set('views','./client/public/views/pages')
const paths = require('./paths');



app.use(session({
    secret: "testsecret",
    resave: false,
    cookie:{
        sameSite: "strict",
    },
    saveUninitialized: false,
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


 
app.use(express.static(path.join(__dirname,'client','public')))


 
   
 
// db router 
const dbRouter = require(paths['@userRoute'])
app.post('/submitForm_register',dbRouter)
app.post('/submitForm_login',dbRouter)

// Products Router
/*
const postItemRouter = require("./routes/post-product")
app.post('/add_product',postItemRouter);
const productsDbRouter = require("./routes/get-products")
app.get('/get_products',productsDbRouter);




// addItemToCart router
const addItemToCartRouter = require("./routes/cart");
app.post('/add_product_to_cart',addItemToCartRouter);


*/




// login router
const loginRouter = require(paths['@loginRoute'])
app.use('/login',loginRouter)



//about router
const aboutRouter = require(paths['@aboutRoute'])
app.use('/about',aboutRouter)

// shop router
const shopRouter = require(paths['@shopRoute'])
app.use('/shop',shopRouter) 

// my account router
const myAccountRouter = require(paths['@myaccountRoute'])
app.use('/myaccount',requireAuth,myAccountRouter)

// index router
const indexRouter = require(paths['@indexRoute'])
app.use('/',indexRouter)
// get-session-data
app.get('/session-data', (req,res) => {
  
  res.json(req.session);
})

// page-not-found router 
const notFoundRouter = require(paths['@pagenotfoundRoute'])
app.use(notFoundRouter) 









require('dotenv').config();
// Server start
app.listen(3000, () => {
    console.log("API sever listening on port 3000...")
})

